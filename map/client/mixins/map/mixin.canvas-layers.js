import L from 'leaflet'
// import 'leaflet-canvas-layer'
import centroid from '@turf/centroid'

L.KanvasLayer = (L.Layer ? L.Layer : L.Class).extend({
    // -- initialized is called on prototype
    initialize: function (options) {
        this._map    = null;
        this._canvas = null;
        this._frame  = null;
        this._delegate = null;
        L.setOptions(this, options);
    },

    delegate :function(del){
        this._delegate = del;
        return this;
    },

    needRedraw: function () {
        if (!this._frame) {
            this._frame = L.Util.requestAnimFrame(this.drawLayer, this);
        }
        return this;
    },

    //-------------------------------------------------------------
    _onLayerDidResize: function (resizeEvent) {
        this._canvas.width = resizeEvent.newSize.x;
        this._canvas.height = resizeEvent.newSize.y;
    },
    //-------------------------------------------------------------
    _onLayerDidMove: function () {
        var topLeft = this._map.containerPointToLayerPoint([0, 0]);
        L.DomUtil.setPosition(this._canvas, topLeft);
        this.drawLayer();
    },
    //-------------------------------------------------------------
    getEvents: function () {
        var events = {
            resize: this._onLayerDidResize,
            moveend: this._onLayerDidMove,
            zoom: this._onLayerDidMove
        };
        if (this._map.options.zoomAnimation && L.Browser.any3d) {
            events.zoomanim =  this._animateZoom;
        }

        return events;
    },
    //-------------------------------------------------------------
    onAdd: function (map) {
        this._map = map;
        this._canvas = L.DomUtil.create('canvas', 'leaflet-layer');
        this.tiles = {};

        var size = this._map.getSize();
        this._canvas.width = size.x;
        this._canvas.height = size.y;

        var animated = this._map.options.zoomAnimation && L.Browser.any3d;
        L.DomUtil.addClass(this._canvas, 'leaflet-zoom-' + (animated ? 'animated' : 'hide'));


        map._panes.overlayPane.appendChild(this._canvas);

        map.on(this.getEvents(),this);

        var del = this._delegate || this;
        del.onLayerDidMount && del.onLayerDidMount(); // -- callback
        this.needRedraw();
    },

    //-------------------------------------------------------------
    onRemove: function (map) {
        var del = this._delegate || this;
        del.onLayerWillUnmount && del.onLayerWillUnmount(); // -- callback

        if (this._frame) {
            L.Util.cancelAnimFrame(this._frame);
        }

        map.getPanes().overlayPane.removeChild(this._canvas);

        map.off(this.getEvents(),this);

        this._canvas = null;

    },

    //------------------------------------------------------------
    addTo: function (map) {
        map.addLayer(this);
        return this;
    },
    // --------------------------------------------------------------------------------
    LatLonToMercator: function (latlon) {
        return {
            x: latlon.lng * 6378137 * Math.PI / 180,
            y: Math.log(Math.tan((90 + latlon.lat) * Math.PI / 360)) * 6378137
        };
    },

    //------------------------------------------------------------------------------
    drawLayer: function () {
        // -- todo make the viewInfo properties  flat objects.
        var size   = this._map.getSize();
        var bounds = this._map.getBounds();
        var zoom   = this._map.getZoom();

        var center = this.LatLonToMercator(this._map.getCenter());
        var corner = this.LatLonToMercator(this._map.containerPointToLatLng(this._map.getSize()));

        var del = this._delegate || this;
        del.onDrawLayer && del.onDrawLayer( {
                                                layer : this,
                                                canvas: this._canvas,
                                                bounds: bounds,
                                                size: size,
                                                zoom: zoom,
                                                center : center,
                                                corner : corner
                                            });
        this._frame = null;
    },
    // -- L.DomUtil.setTransform from leaflet 1.0.0 to work on 0.0.7
    //------------------------------------------------------------------------------
    _setTransform: function (el, offset, scale) {
        var pos = offset || new L.Point(0, 0);

        el.style[L.DomUtil.TRANSFORM] =
			(L.Browser.ie3d ?
				'translate(' + pos.x + 'px,' + pos.y + 'px)' :
				'translate3d(' + pos.x + 'px,' + pos.y + 'px,0)') +
			(scale ? ' scale(' + scale + ')' : '');
    },

    //------------------------------------------------------------------------------
    _animateZoom: function (e) {
        var scale = this._map.getZoomScale(e.zoom);
        // -- different calc of animation zoom  in leaflet 1.0.3 thanks @peterkarabinovic, @jduggan1
        var offset = L.Layer ? this._map._latLngBoundsToNewLayerBounds(this._map.getBounds(), e.zoom, e.center).min :
                               this._map._getCenterOffset(e.center)._multiplyBy(-scale).subtract(this._map._getMapPanePos());

        L.DomUtil.setTransform(this._canvas, offset, scale);


    }
});

L.kanvasLayer = function () {
    return new L.KanvasLayer();
};




export default {
  methods: {
    createLeafletCanvasLayer (options) {
      const layerOptions = options.leaflet || options

      // Check for valid type
      if (layerOptions.type !== 'kanvasLayer') return

      const layer = this.createLeafletLayer(options)
  //     const code = `
  //     ctx.fillStyle = "rgba(255,116,0, 0.2)";
  //     ctx.fillRect(0, 0, info.canvas.width / 2, info.canvas.height/2);
  //     ctx.fillStyle = "rgba(0,0,0, 0.5)";
  //     ctx.strokeText("coucou!", 50, 50);
  // `
  //     this.setupCanvasLayerDrawCode(layer, code)
      this.buildDrawCode(layer, layerOptions)
      return layer
    },

    buildDrawCode (layer, options) {
      const fnCode = `"use strict;"
return () => { console.log(window); }`
      const testFnGen = Function(fnCode)
      const fn = testFnGen().apply(undefined)
      fn()

      layer.getFeature = []
      layer.drawFunctions = []
      for (const d of options.draw) {
        const [srcLayer, srcFeature] = d.relativeTo.split('?')
        layer.getFeature.push(() => {
          const l = this.getLeafletLayerByName(srcLayer)
          if (!l) return null

          return l._features[srcFeature]
        })

        const drawCode = `"use strict;"
// define visible variables for drawing code
const ctx = this.ctx;
const info = this.info;
${d.code};
`
        layer.drawFunctions.push(new Function(drawCode))
      }
      if (!layer.onDrawLayer) {
        layer.onDrawLayer = (info) => {
          const ctx = info.canvas.getContext('2d')
          ctx.save()
          ctx.clearRect(0, 0, info.canvas.width, info.canvas.height)
          for (let i = 0; i < layer.getFeature.length; ++i) {
            const feature = layer.getFeature[i]()
            let offset
            if (feature) {
              const c = centroid(feature)
              offset = layer._map.latLngToContainerPoint(L.latLng(c.geometry.coordinates[1], c.geometry.coordinates[0]))
              ctx.translate(offset.x, offset.y)
            }
            layer.drawFunctions[i].call({ ctx, info, log: console.log })
            if (feature) {
              ctx.translate(-offset.x, -offset.y)
            }
          }
          ctx.restore()
        }
      }
      layer.needRedraw()
    },

    setupCanvasLayerDrawCode (layer, code) {
      const drawCode = `"use strict;"
const ctx = this.ctx;
const info = this.info;
${code}`
      layer.drawFunction = new Function(drawCode)
      if (!layer.onDrawLayer) {
        layer.onDrawLayer = (info) => {
          const ctx = info.canvas.getContext('2d')
          ctx.save()
          // ctx.resetTransform()
          ctx.clearRect(0, 0, info.canvas.width, info.canvas.height)
          ctx.translate(100, 100)
          layer.drawFunction.call({ ctx, info })
          ctx.restore()
        }
      }
      layer.needRedraw()
    },

    updateCanvasLayer (name, newDrawCode) {
      // Retrieve the layer
      const layer = this.getLeafletLayerByName(name)
      if (!layer) return // Cannot update invisible layer

      this.setupCanvasLayerDrawCode(layer, newDrawCode)
    }
  },

  created () {
    this.registerLeafletConstructor(this.createLeafletCanvasLayer)
  },

  beforeDestroy () {
  }
}
