<template>
  <div>
    <!-- Forms section -->
    <k-form ref="fileForm" :schema="getFileFormSchema()" @field-changed="onFileFormFieldChanged" />
    <k-form ref="propertiesForm" :key="propertiesFormKey" :schema="getPropertiesFormSchema()" />
    <!-- Buttons section -->
    <div class="q-pt-md row justify-end">
      <k-action
        id="import-layer-action"
        :label="$t('KImportLayer.IMPORT_BUTTON')"
        renderer="form-button"
        :loading="importing"
        @triggered="onImport" />
    </div>
  </div>
</template>

<script>
import _ from 'lodash'
import path from 'path'
import { generatePropertiesSchema } from '../../utils'

export default {
  name: 'k-import-layer',
  inject: ['kActivity'],
  data () {
    return {
      propertiesFormKey: 1,
      importing: false
    }
  },
  methods: {
    getFileFormSchema () {
      return {
        $schema: 'http://json-schema.org/draft-06/schema#',
        $id: 'http://kalisio.xyz/schemas/import-layer-select-file#',
        type: 'object',
        properties: {
          file: {
            type: 'object',
            field: {
              component: 'form/KFileField',
              label: 'KImportLayer.FILE_FIELD_LABEL',
              mimeTypes: '.json,.geojson,application/json,application/geo+json'
            }
          }
        },
        required: ['file']
      }
    },
    getPropertiesFormSchema () {
      return {
        $schema: 'http://json-schema.org/draft-06/schema#',
        $id: 'http://kalisio.xyz/schemas/import-layer-set-properties#',
        type: 'object',
        properties: {
          name: {
            type: 'string',
            maxLength: 128,
            minLength: 2,
            default: this.getFileName(),
            field: {
              component: 'form/KTextField',
              label: 'KImportLayer.NAME_FIELD_LABEL'
            }
          },
          description: {
            type: 'string',
            default: this.getFileName(),
            field: {
              component: 'form/KTextField',
              label: 'KImportLayer.DESCRIPTION_FIELD_LABEL'
            }
          },
          featureId: {
            type: 'string',
            maxLength: 256,
            minLength: 2,
            default: this.guessFeatureId(),
            field: {
              component: 'form/KSelectField',
              label: 'KImportLayer.FEATURE_ID_FIELD_LABEL',
              options: this.getProperties()
            }
          }
        },
        required: ['name', 'featureId']
      }
    },
    onFileFormFieldChanged (field, value) {
      this.file = value
      if (value) {
        this.file.schema = generatePropertiesSchema(value.content, value.name)
      }
      this.propertiesFormKey += 1
    },
    getFileName () {
      return this.file ? path.basename(this.file.name, path.extname(this.file.name)) : ''
    },
    getProperties () {
      if (this.file) {
        const properties = _.keys(_.get(this.file, 'schema.properties', {}))
        return _.map(properties, prop => { return { label: prop, value: prop } })
      }
      return []
    },
    guessFeatureId () {
      if (this.file) {
        const properties = _.keys(_.get(this.file, 'schema.properties', {}))
        for (const prop of properties) {
          if (prop.toLowerCase().includes('id', 'fid', 'featureid', '_id', 'objectid')) return prop
        }
      }
      return ''
    },
    async onImport () {
      const fileResult = this.$refs.fileForm.validate()
      const propertiesResult = this.$refs.propertiesForm.validate()
      if (!fileResult.isValid || !propertiesResult.isValid) return
      this.importing = true
      // Create the layer accordingly the input fields
      const geoJson = this.file.content
      // Create an empty layer used as a container
      const engine = {
        type: 'geoJson',
        isVisible: true,
        realtime: true
      }
      const newLayer = {
        name: propertiesResult.values.name,
        description: propertiesResult.values.description,
        type: 'OverlayLayer',
        icon: 'insert_drive_file',
        scope: 'user',
        featureId: propertiesResult.values.featureId,
        leaflet: engine,
        // Avoid sharing reference to the same object although options are similar
        // otherwise updating one will automatically update the other one
        cesium: Object.assign({}, engine),
        schema: {
          name: this.file.name,
          content: this.file.schema
        }
      }
      await this.kActivity.addLayer(newLayer)
      // Assign the features to the layer
      await this.kActivity.updateLayer(newLayer.name, geoJson)
      // Zoom to it
      this.kActivity.zoomToLayer(newLayer.name)
      this.importing = false
      this.$emit('done')
    }
  },
  created () {
    // Load the required components
    this.$options.components['k-form'] = this.$load('form/KForm')
    this.$options.components['k-action'] = this.$load('frame/KAction')
    // Set data
    this.file = null
  }
}
</script>
