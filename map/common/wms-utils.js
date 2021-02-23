import _ from 'lodash'
import fetch from 'node-fetch'
import xml2js from 'xml2js'
import { buildUrl } from '../../core/common'

// https://www.opengeospatial.org/standards/wms

export function GetCapabilities (url) {
  const query = buildUrl(url, {
    SERVICE: 'WMS',
    REQUEST: 'GetCapabilities'
  })
  return fetch(query)
    .then(response => response.text())
    .then(txt => xml2js.parseStringPromise(txt))
}

export function decodeCapabilities (caps) {
  const decoded = {
    availableLayers: []
  }

  // robin: i've seen Layer being children of other Layer ...
  const root = _.get(caps, 'WMS_Capabilities.Capability[0].Layer')
  if (root) {
    const flat = root.slice()
    for (let i = 0; i < flat.length; ++i) {
      const children = _.get(flat[i], 'Layer')
      if (children) {
        for (const c of children) flat.push(c)
      }
    }

    flat.forEach(layer => {
      const id = _.get(layer, 'Name[0]')
      const display = _.get(layer, 'Title[0]')
      if (id && display) {
        const obj = { id, display }
        if (layer.CRS) obj.crs = layer.CRS
        if (layer.Style) {
          obj.styles = layer.Style.map(s => {
            return {
              id: _.get(s, 'Name[0]'),
              display: _.get(s, 'Title[0]'),
              legend: {
                url: _.get(s, 'LegendURL[0].OnlineResource[0].$.xlink:href'),
                format: _.get(s, 'LegendURL[0].Format[0]')
              }
            }
          })
        }
        decoded.availableLayers.push(obj)
      }
    })
  }

  return decoded
}
