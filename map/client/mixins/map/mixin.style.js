import L from 'leaflet'
import _ from 'lodash'
import chroma from 'chroma-js'
import { LeafletStyleMappings } from '../../utils'

export default {
  methods: {
    createMarkerFromStyle (latlng, markerStyle, feature) {
      if (markerStyle) {
        let icon = markerStyle.icon
        // Parse icon options to get icon object if any
        if (icon) {
          const iconOptions = icon.options || icon
          const options = markerStyle.options || markerStyle
          icon = _.get(L, icon.type)(iconOptions)
          return _.get(L, markerStyle.type || 'marker')(latlng, Object.assign(_.omit(options, ['icon']), { icon }))
        } else {
          const options = markerStyle.options || markerStyle
          return _.get(L, markerStyle.type || 'marker')(latlng, options)
        }
      } else {
        return L.marker(latlng)
      }
    },
    convertFromSimpleStyleSpec (style, inPlace) {
      if (!style) return {}
      const convertedStyle = (inPlace ? style : {})
      // Compute flags first because if updating in place options in style spec will be replaced
      const isHtml = _.has(style, 'icon-html')
      const hasClass = _.has(style, 'icon-class')
      const isFontAwesome = _.has(style, 'icon-classes')
      let isIconSpec = false
      _.forOwn(style, (value, key) => {
        if (_.has(LeafletStyleMappings, key)) {
          const mapping = _.get(LeafletStyleMappings, key)
          // Specific options
          switch (key) {
            case 'icon-size':
            case 'icon-anchor':
            case 'marker-size':
              if (!Array.isArray(value)) value = [value, value]
              _.set(convertedStyle, mapping, value)
              break
            default:
              _.set(convertedStyle, mapping, value)
          }
          if (inPlace) _.unset(style, key)
          // In this case we have a marker spec
          if (mapping.startsWith('icon')) isIconSpec = true
        }
      })
      // Select the right icon type based on options
      if (isIconSpec) {
        _.set(convertedStyle, 'icon.type', (isFontAwesome ? 'icon.fontAwesome' : isHtml ? 'divIcon' : 'icon'))
        // Leaflet adds a default background style but we prefer to remove it
        if (isHtml && !hasClass) _.set(convertedStyle, 'icon.options.className', '')
        _.set(convertedStyle, 'type', 'marker')
      }
      // Manage panes to make z-index work for all types of layers,
      // pane name is actually a z-index value
      if (_.has(convertedStyle, 'pane')) _.set(convertedStyle, 'pane', _.get(convertedStyle, 'pane').toString())
      return convertedStyle
    },
    getDefaultMarker (feature, latlng, options) {
      const properties = feature.properties
      const leafletOptions = options.leaflet || options
      const style = Object.assign({}, this.activityOptions.engine.pointStyle,
        leafletOptions.layerStyle,
        this.convertFromSimpleStyleSpec(feature.style || feature.properties))

      // We allow to template style properties according to feature,
      // because it can be slow you have to specify a subset of properties
      if (leafletOptions.template) {
        leafletOptions.template.forEach(entry => {
          // Perform templating, set using simple spec mapping first then raw if property not found
          _.set(style, _.get(LeafletStyleMappings, entry.property, entry.property), entry.compiler({ properties, feature, chroma }))
        })
      }
      // We manage panes for z-index, so we need to forward it to marker options
      if (leafletOptions.pane) style.pane = leafletOptions.pane
      return (latlng ? this.createMarkerFromStyle(latlng, style) : style)
    },
    getDefaultStyle (feature, options) {
      const properties = feature.properties
      const leafletOptions = options.leaflet || options
      const style = Object.assign({}, this.activityOptions.engine.featureStyle,
        leafletOptions.layerStyle,
        this.convertFromSimpleStyleSpec(feature.style || feature.properties))

      // We allow to template style properties according to feature,
      // because it can be slow you have to specify a subset of properties
      if (leafletOptions.template) {
        leafletOptions.template.forEach(entry => {
          // Perform templating, set using simple spec mapping first then raw if property not found
          _.set(style, _.get(LeafletStyleMappings, entry.property, entry.property), entry.compiler({ properties, feature, chroma }))
        })
      }
      // We manage panes for z-index, so we need to forward it to marker options
      if (leafletOptions.pane) style.pane = leafletOptions.pane
      return style
    }
  },
  created () {
    this.registerStyle('markerStyle', this.getDefaultMarker)
    this.registerStyle('featureStyle', this.getDefaultStyle)
    // Perform required conversion for default feature styling
    if (this.activityOptions.engine.featureStyle) this.convertFromSimpleStyleSpec(this.activityOptions.engine.featureStyle, 'update-in-place')
    if (this.activityOptions.engine.pointStyle) this.convertFromSimpleStyleSpec(this.activityOptions.engine.pointStyle, 'update-in-place')
  }
}
