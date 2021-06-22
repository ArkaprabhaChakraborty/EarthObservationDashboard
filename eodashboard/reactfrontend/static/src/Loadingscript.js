require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/views/SceneView",
  "esri/layers/FeatureLayer",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/symbols/SimpleLineSymbol",
  "esri/symbols/SimpleFillSymbol",
  "esri/renderers/SimpleRenderer",
],(
  esriConfig,
  Map,
  MapView,
  SceneView,
  FeatureLayer,
  SimpleMarkerSymbol,
  SimpleLineSymbol,
  SimpleFillSymbol,
  SimpleRenderer,
  Legend,
)=> {
    esriConfig.apiKey = "AAPK996285b723b44e7b888bc9d942cd95bbAXK0UZXvcVkYG3T3csHyq7w605ZKQ2SyO4jAoqU9REwunqI8-2l-q53SWS_4JeqX";
    const map = new Map({
      basemap: "topo-vector"
    });

    const view = new MapView({
      container: "viewDiv",
      map: map,
      zoom: 4,
      center: [15, 65] // longitude, latitude
    });
  });
