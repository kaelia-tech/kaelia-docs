# Components

## Layers panel

The **k-layers-panel** is used to list all available layers in [catalog](./services.md#catalog-service) and organize them by category.

![Layers panel](../../assets/layers-panel.png) 

## Map

Although some dedicated components do exist, you usually rely on provided [mixins](./mixins.md#map) to build your own map.

Kano provides a good starting point to build your own [Map Activity](https://github.com/kalisio/kano/blob/master/src/components/MapActivity.vue).

### Location

The **k-location-map** allows to display a location on a map using a marker.

The **k-location-field** provides you with an autocomplete address search input powered by the [geocoder service](./services.md#geocoder-service) to be embedded in a [**k-form**](../kcore/components.md#forms).

## Globe

No dedicated component exist at the moment, you usually rely on provided [mixins](./mixins.md#globe) to build your own globe.

Kano provides a good starting point to build your own [Globe Activity](https://github.com/kalisio/kano/blob/master/src/components/GlobeActivity.vue).