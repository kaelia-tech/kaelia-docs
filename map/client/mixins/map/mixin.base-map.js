import _ from 'lodash'
import sift from 'sift'
import logger from 'loglevel'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
// This ensure we have all required plugins
import 'leaflet-fa-markers/L.Icon.FontAwesome.css'
import 'leaflet-fa-markers/L.Icon.FontAwesome.js'
import 'leaflet-fullscreen'
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css'
import 'leaflet.markercluster/dist/MarkerCluster.css'
import 'leaflet.markercluster/dist/MarkerCluster.Default.css'
import 'leaflet.markercluster'
import 'leaflet.vectorgrid/dist/Leaflet.VectorGrid.bundled.js'
import 'Leaflet.Geodesic'
import 'leaflet.locatecontrol'
import 'leaflet.locatecontrol/dist/L.Control.Locate.css'
import iso8601 from 'iso8601-js-period' // Required by leaflet.timedimension
import 'leaflet-timedimension/dist/leaflet.timedimension.src.js'
import 'leaflet-timedimension/dist/leaflet.timedimension.control.css'
import '@geoman-io/leaflet-geoman-free'
import '@geoman-io/leaflet-geoman-free/dist/leaflet-geoman.css'
import i18next from 'i18next'
import { LeafletEvents, bindLeafletEvents } from '../../utils'
window.nezasa = { iso8601 } // https://github.com/socib/Leaflet.TimeDimension/issues/124

// Fix to make Leaflet assets be correctly inserted by webpack
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
})
// Do not create geoman structs everywhere
L.PM.setOptIn(true)

export default {
  data () {
    return {
      layers: {}
    }
  },
  methods: {
    refreshMap () {
      if (this.map) this.map.invalidateSize()
    },
    setupMap (domEl, options) {
      const viewerOptions = options || this.activityOptions.engine.viewer
      // Initialize the map
      this.map = L.map(domEl, Object.assign({ zoomControl: false }, viewerOptions))
      // Make sure geoman is initialized on the map
      if (this.map.pm === undefined) {
        this.map.options.pmIgnore = false
        L.PM.reInitLayer(this.map)
        this.map.pm.setLang(i18next.language)
      }
      bindLeafletEvents(this.map, LeafletEvents.Map, this, viewerOptions)
      if (_.get(viewerOptions, 'scale', true)) this.setupScaleControl()
      if (_.get(viewerOptions, 'geolocate', true)) this.setupGeolocateControl()
      this.$emit('map-ready')
    },
    setupScaleControl () {
      // Add a scale control
      this.scaleControl = new L.control.scale()   // eslint-disable-line
      this.scaleControl.addTo(this.map)
    },
    setupGeolocateControl () {
      this.locateControl = new L.control.locate({  // eslint-disable-line
        locateOptions: {
          maxZoom: 16,
          watch: false,
          setView: false,
          timeout: 30000,
          enableHighAccuracy: true
        },
        strings: {
          title: this.$t('geolocation.TITLE'),
          metersUnit: this.$t('geolocation.METERS'),
          feetUnit: this.$t('geolocation.FEET'),
          popup: this.$t('geolocation.POPUP'),
          outsideMapBoundsMsg: this.$t('geolocation.OUTSIDE_MAP_BOUNDS')
        }
      })
      this.locateControl.addTo(this.map)
      // We'd like to use control features but without actually displaying it
      this.locateControl._container.style.display = 'none'
    },
    processLeafletLayerOptions (options) {
      // Because we update objects in place and don't want leaflet internal objects to be reactive
      const processedOptions = _.cloneDeep(options)
      const leafletOptions = processedOptions.leaflet
      // Transform from string to actual objects when required in some of the layer options
      this.leafletObjectOptions.forEach(option => {
        if (typeof _.get(leafletOptions, option) === 'string') {
          // Jump from string to object, eg { crs: 'CRS.EPSGXXX' } will become { crs: L.CRS.EPSGXXX }
          _.set(leafletOptions, option, _.get(L, _.get(leafletOptions, option)))
        }
      })
      // Copy generic options
      leafletOptions.attribution = processedOptions.attribution
      return processedOptions
    },
    createLeafletPane (paneOrZIndex) {
      // Create pane if required
      const paneName = paneOrZIndex.toString()
      let pane = this.map.getPane(paneName)
      if (!pane) {
        pane = this.map.createPane(paneName)
        if (typeof paneOrZIndex === 'number') _.set(pane, 'style.zIndex', paneOrZIndex)
        else _.set(pane, 'style.zIndex', 400) // Defaults for overlay in Leaflet
      }
      this.leafletPanes[paneName] = pane
      return pane
    },
    getLeafletPaneByName (paneOrZIndex) {
      const paneName = paneOrZIndex.toString()
      return this.leafletPanes[paneName]
    },
    removeLeafletPane (paneOrZIndex) {
      const paneName = paneOrZIndex.toString()
      const pane = this.getLeafletPaneByName(paneName)
      if (!pane) return
      delete this.leafletPanes[paneName]
    },
    updateLeafletPanesVisibility (panes) {
      const zoom = this.map.getZoom()
      // Check if we need to hide/show some panes based on current zoom level
      _.forOwn(this.leafletPanes, (pane, paneName) => {
        // Filter only some panes ?
        if (panes && panes.includes(paneName)) return
        if (!_.has(pane, 'minZoom') && !_.has(pane, 'maxZoom')) return
        if (!pane.style) pane.style = {}
        if (_.has(pane, 'minZoom') && (zoom < _.get(pane, 'minZoom'))) {
          pane.style.display = 'none'
          return
        }
        if (_.has(pane, 'maxZoom') && (zoom > _.get(pane, 'maxZoom'))) {
          pane.style.display = 'none'
          return
        }
        pane.style.display = 'block'
      })
    },
    createLeafletLayer (options) {
      const leafletOptions = options.leaflet || options
      // Manage panes to make z-index work for all types of layers
      // Indeed, although DOM-based layers can use setZIndex() to manage rendering order
      // SVG/Canvas-based layers provide no mean to manage render order except using bringToFront() or bringToBack()
      // This is why Leaflet 1.0 introduced panes: https://leafletjs.com/reference.html#map-pane & https://leafletjs.com/examples/map-panes/
      // By implicitely create a pane for each provided z-index makes this transparent for the user
      let zIndex = _.has(leafletOptions, 'zIndex')
      if (zIndex) {
        zIndex = _.get(leafletOptions, 'zIndex')
        this.createLeafletPane(zIndex)
        // Set layer to use target pane
        _.set(leafletOptions, 'pane', zIndex.toString())
      }
      // Different panes inside a layer can be used to manage visibility according to zoom level
      const panes = _.get(leafletOptions, 'panes')
      if (panes) {
        panes.forEach(paneOptions => {
          const pane = this.createLeafletPane(paneOptions.name || paneOptions.zIndex)
          Object.assign(pane, paneOptions)
        })
        this.updateLeafletPanesVisibility(panes.map(paneOptions => paneOptions.name || paneOptions.zIndex.toString()))
      }

      let layer
      // We use the source option as the first parameter of leaflet layer constructors,
      // which is usually the base URL
      if (leafletOptions.source) {
        const source = leafletOptions.source
        // Remove it from options to avoid sending it twice
        // and side effects like https://github.com/kalisio/kdk/issues/219
        delete leafletOptions.source
        layer = _.get(L, leafletOptions.type)(source, leafletOptions)
      } else {
        layer = _.get(L, leafletOptions.type)(leafletOptions)
      }
      return layer
    },
    registerLeafletConstructor (constructor) {
      this.leafletFactory.push(constructor)
    },
    async createLayer (options) {
      const processedOptions = this.processLeafletLayerOptions(options)
      let layer
      // Iterate over all registered constructors until we find one
      for (let i = 0; i < this.leafletFactory.length; i++) {
        const constructor = this.leafletFactory[i]
        layer = await constructor(processedOptions)
        if (layer) break
      }
      // Use default Leaflet layer constructor if none found
      return (layer || this.createLeafletLayer(processedOptions))
    },
    createLeafletTimedWmsLayer (options) {
      const leafletOptions = options.leaflet || options
      // Check for valid type
      if (leafletOptions.type !== 'tileLayer.wms') return
      let layer = this.createLeafletLayer(options)
      // Specific case of time dimension layer where we embed the underlying WMS layer
      const timeDimension = _.get(leafletOptions, 'timeDimension')
      if (timeDimension) {
        // It appears that sometimes the time resolution is missing, default as 1 day
        // Please refer to https://www.mapserver.org/ogc/wms_time.html#specifying-time-extents
        const timeRange = _.get(timeDimension, 'times')
        if ((typeof timeRange === 'string') && (timeRange.split('/').length === 2)) {
          _.set(timeDimension, 'times', `${timeRange}/P1D`)
        }
        // As we'd like to control time on a per-layer basis create a specific time dimension object
        layer = this.createLeafletLayer({
          type: 'timeDimension.layer.wms',
          source: layer,
          timeDimension: L.timeDimension(timeDimension),
          currentTime: this.currentTime
        })
        // This allow the layer to conform our internal time interface
        layer.setCurrentTime = (datetime) => { layer._timeDimension.setCurrentTime(datetime) }
      }
      return layer
    },
    hasLayer (name) {
      return _.has(this.layers, name)
    },
    isLayerVisible (name) {
      const leafetLayer = this.getLeafletLayerByName(name)
      return leafetLayer && this.map.hasLayer(leafetLayer)
    },
    isLayerDisabled (layer) {
      const minZoom = _.get(layer, 'leaflet.minZoom')
      const maxZoom = _.get(layer, 'leaflet.maxZoom')
      let isDisabled = false
      if (minZoom && (this.map.getZoom() < minZoom)) isDisabled = true
      if (maxZoom && (this.map.getZoom() > maxZoom)) isDisabled = true
      return isDisabled
    },
    updateLayerDisabled (layer) {
      const wasDisabled = layer.isDisabled
      layer.isDisabled = this.isLayerDisabled(layer)
      if (layer.isDisabled !== wasDisabled) this.$emit(wasDisabled ? 'layer-enabled' : 'layer-disabled', layer)
    },
    getLayerByName (name) {
      return this.layers[name]
    },
    getLeafletLayerByName (name) {
      return this.leafletLayers[name]
    },
    getLayers (filter = {}) {
      return _.values(this.layers).filter(sift(filter))
    },
    hasLayers (filter = {}) {
      return _.values(this.layers).filter(sift(filter)).length > 0
    },
    async showLayer (name) {
      // Retrieve the layer
      const layer = this.getLayerByName(name)
      if (!layer) return
      // Check the visibility state
      if (this.isLayerVisible(name)) return

      // Create the leaflet layer on show
      let leafletLayer = this.getLeafletLayerByName(name)
      if (!leafletLayer) {
        try {
          leafletLayer = await this.createLayer(layer)
        } catch (error) {
          logger.error(error)
          return
        }
      }
      // Add the leaflet layer to the map
      this.leafletLayers[name] = leafletLayer
      this.map.addLayer(leafletLayer)
      layer.isVisible = true

      // Ensure base layer will not pop on top of others
      if (layer.type === 'BaseLayer') leafletLayer.bringToBack()
      // Apply the current time if needed
      if (typeof leafletLayer.setCurrentTime === 'function' && this.currentTime) leafletLayer.setCurrentTime(this.currentTime)
      this.$emit('layer-shown', layer, leafletLayer)
    },
    hideLayer (name) {
      // Retrieve the layer
      const layer = this.getLayerByName(name)
      if (!layer) return
      // Check the visibility state
      if (!this.isLayerVisible(name)) return
      layer.isVisible = false
      // Remove the leaflet layer from map
      const leafletLayer = this.leafletLayers[name]
      this.map.removeLayer(leafletLayer)
      const panes = _.get(layer, 'leaflet.panes')
      if (panes) panes.forEach(pane => this.removeLeafletPane(pane.name || pane.zIndex))
      this.$emit('layer-hidden', layer, leafletLayer)
    },
    async addLayer (layer) {
      if (layer && !this.hasLayer(layer.name)) {
        layer.isVisible = false
        layer.isDisabled = this.isLayerDisabled(layer)
        // Store the layer and make it reactive
        this.$set(this.layers, layer.name, layer)
        this.$emit('layer-added', layer)
        // Handle the visibility state
        if (_.get(layer, 'leaflet.isVisible', false)) await this.showLayer(layer.name)
      }
      return layer
    },
    renameLayer (previousName, newName) {
      const layer = this.getLayerByName(previousName)
      const leafletLayer = this.getLeafletLayerByName(previousName)
      if (!layer) return
      // Update underlying layer map if layer has been already shown
      if (leafletLayer) {
        this.leafletLayers[newName] = leafletLayer
        delete this.leafletLayers[previousName]
      }
      // Update underlying layer map, this one is reactive
      this.$set(this.layers, newName, layer)
      this.$delete(this.layers, previousName)
    },
    removeLayer (name) {
      const layer = this.getLayerByName(name)
      if (!layer) return
      // If it was visible remove it from map
      if (layer.isVisible) this.hideLayer(name)
      // Delete the layer and make it reactive
      this.$delete(this.layers, layer.name)
      delete this.leafletLayers[name]
      this.$emit('layer-removed', layer)
    },
    toGeoJson (name) {
      const layer = this.getLeafletLayerByName(name)
      if (!layer || (typeof layer.toGeoJSON !== 'function')) return
      return layer.toGeoJSON()
    },
    zoomToLayer (name, options) {
      const layer = this.getLayerByName(name)
      if (!layer) return
      // Check for layers only visible at a given zoom level
      // If so simply jump to that level in order to show some data
      if (this.isLayerDisabled(layer)) {
        const minZoom = _.get(layer, 'leaflet.minZoom')
        if (minZoom) {
          const center = this.getCenter()
          this.center(center.longitude, center.latitude, minZoom)
          return
        }
      }
      const leafletLayer = this.getLeafletLayerByName(name)
      if (leafletLayer && leafletLayer.getBounds()) this.map.fitBounds(leafletLayer.getBounds(), options)
    },
    zoomToBounds (bounds) {
      this.map.fitBounds(bounds)
    },
    center (longitude, latitude, zoomLevel, options) {
      this.map.setView(new L.LatLng(latitude, longitude), zoomLevel || this.map.getZoom(), options)
    },
    getCenter () {
      const center = this.map.getCenter()
      const zoom = this.map.getZoom()
      return {
        longitude: center.lng,
        latitude: center.lat,
        zoomLevel: zoom
      }
    },
    getBounds () {
      this.viewBounds = this.map.getBounds()
      const south = this.viewBounds.getSouth()
      const west = this.viewBounds.getWest()
      const north = this.viewBounds.getNorth()
      const east = this.viewBounds.getEast()
      return [[south, west], [north, east]]
    },
    showUserLocation () {
      const position = this.$geolocation.get().position
      if (this.locateControl) {
        this.locateControl.start()
      } else if (position) {
        this.center(position.longitude, position.latitude)
      }
    },
    hideUserLocation () {
      if (this.locateControl) {
        this.locateControl.stop()
      }
    },
    isUserLocationVisible () {
      return (this.locateControl && this.locateControl._active)
    },
    setCursor (className) {
      L.DomUtil.addClass(this.map._container, className)
    },
    isCursor (className) {
      return L.DomUtil.hasClass(this.map._container, className)
    },
    unsetCursor (className) {
      L.DomUtil.removeClass(this.map._container, className)
    },
    onCurrentMapTimeChanged (datetime) {
      _.forEach(this.leafletLayers, leafletLayer => {
        if (typeof leafletLayer.setCurrentTime === 'function') leafletLayer.setCurrentTime(datetime)
      })
    },
    onMapZoomChanged () {
      this.updateLeafletPanesVisibility()
      // Update disable state
      const zoomLayers = _.values(this.layers).filter(sift({
        $or: [{ 'leaflet.minZoom': { $exists: true } }, { 'leaflet.maxZoom': { $exists: true } }]
      }))
      zoomLayers.forEach(async layer => { this.updateLayerDisabled(layer) })
    }
  },
  created () {
    this.leafletLayers = {}
    this.leafletPanes = {}
    this.leafletFactory = []
    // Default Leaflet layer options requiring conversion from string to actual Leaflet objects
    this.leafletObjectOptions = ['crs', 'rendererFactory']
    // Register support for WMS-T
    this.registerLeafletConstructor(this.createLeafletTimedWmsLayer)
    this.$on('zoomend', this.onMapZoomChanged)
    this.$on('current-time-changed', this.onCurrentMapTimeChanged)
  },
  beforeDestroy () {
    Object.keys(this.layers).forEach((layer) => this.removeLayer(layer))
    this.$off('zoomend', this.onMapZoomChanged)
    this.$off('current-time-changed', this.onCurrentMapTimeChanged)
  },
  destroyed () {
    if (this.map) this.map.remove()
  }
}
