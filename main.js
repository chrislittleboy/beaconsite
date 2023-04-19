import Map from '/node_modules/ol/Map.js';
import {defaults as defaultControls} from '/node_modules/ol/control.js';
import Stamen from '/node_modules/ol/source/Stamen.js';
import TileLayer from '/node_modules/ol/layer/Tile.js';
import View from '/node_modules/ol/View.js';
import TileWMS from '/node_modules/ol/source/TileWMS.js';
const map = new Map({
  target: 'map',
  controls:defaultControls({ attribution: false }),
  layers: [
    new TileLayer({
      source: new Stamen({layer: 'terrain',}),
    }),
    new TileLayer({
  source: new TileWMS({
      url: 'http://127.0.0.1:8080/geoserver/wms',
      params: {'LAYERS': 'beacon:dams'},
      ratio: 1,
      serverType: 'geoserver',
    })
  })
  ],
  view: new View({
    center: [0, 0],
    zoom: 3,
  }),
});

function w3_open() {
    document.getElementById("sidebar").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("sidebar").style.display = "none";
  }
