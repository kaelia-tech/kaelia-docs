<template>
  <k-modal
    id="change-role-modal"
    :title="title"
    :buttons="getButtons()"
    v-model="isModalOpened"
    @opened="$emit('opened')"
    @closed="$emit('closed')">
    <div slot="modal-content" class="column xs-gutter">
      <k-form v-if="member" ref="form" :schema="getSchema()" />
    </div>
  </k-modal>
</template>

<script>
import _ from 'lodash'
import mixins from '../../mixins'

export default {
  name: 'k-change-role',
  mixins: [
    mixins.baseModal,
    mixins.objectProxy,
    mixins.refsResolver(['form'])
  ],
  props: {
    contextId: {
      type: String,
      required: true
    },
    objectId: {
      type: String,
      required: true
    },
    resource: {
      type: Object,
      default: () => null
    }
  },
  computed: {
    title () {
      return this.$t('KChangeRole.TITLE', { member: this.member ? this.member.name : '' })
    }
  },
  data () {
    return {
      member: null
    }
  },
  methods: {
    getScope () {
      return _.get(this.resource, 'scope', 'organisations')
    },
    getResourceId () {
      return _.get(this.resource, 'id', this.contextId)
    },
    getResoureceService () {
      return _.get(this.resource, 'service', 'organisations')
    },
    getSchema () {
      const scope = this.getScope()
      const resourceId = this.getResourceId()
      const currentRole = _.get(_.find(this.member[scope], { _id: resourceId }), 'permissions')
      const roles = [
        { label: this.$t('KChangeRole.MEMBER_LABEL'), value: 'member' },
        { label: this.$t('KChangeRole.MANAGER_LABEL'), value: 'manager' },
        { label: this.$t('KChangeRole.OWNER_LABEL'), value: 'owner' }
      ]
      _.remove(roles, role => { return role.value === currentRole })
      return {
        $schema: 'http://json-schema.org/draft-06/schema#',
        $id: 'http://kalisio.xyz/schemas/change-role#',
        type: 'object',
        properties: {
          role: {
            type: 'string',
            field: {
              component: 'form/KSelectField',
              label: 'KChangeRole.ROLE_FIELD_LABEL',
              type: 'radio',
              options: roles
            }
          }
        },
        required: ['role']
      }
    },
    getButtons () {
      return [
        { id: 'cancel-button', label: 'CANCEL', renderer: 'form-button', outline: true, handler: () => this.closeModal() },
        { id: 'update-button', label: 'KChangeRole.UPDATE_BUTTON', renderer: 'form-button', handler: () => this.doUpdate() }
      ]
    },
    getService () {
      return this.$api.getService('members')
    },
    async doUpdate () {
      const result = this.$refs.form.validate()
      if (result.isValid) {
        const authorisationService = this.$api.getService('authorisations')
        await authorisationService.create({
          scope: this.getScope(),
          permissions: result.values.role,
          subjects: this.objectId,
          subjectsService: this.contextId + '/members',
          resource: this.getResourceId(),
          resourcesService: this.getResoureceService()
        })
        this.closeModal()
      }
    }
  },
  async created () {
    // Load the required components
    this.$options.components['k-modal'] = this.$load('frame/KModal')
    this.$options.components['k-form'] = this.$load('form/KForm')
    // Load the member
    this.member = await this.loadObject()
  }
}
</script>
