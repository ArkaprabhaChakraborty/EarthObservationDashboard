import Map from "arcgis-js-api/Map";
import MapView from "arcgis-js-api/views/MapView";
import config from "arcgis-js-api/config";
import GraphicsLayer from "arcgis-js-api/layers/GraphicsLayer";
import Graphic from "arcgis-js-api/Graphic";
const data = require('./sample.json');

const noop = () => {};

config.apiKey = "AAPK771b17bb21a54036bb69d8b6fd6ab07dg1IWylKMs2OcSKU7PYzKhSPaE8RXc1qZjTVobGNDVFHfrhbX3xoK8qw75sw3aZuM";

export const graphiclayer = new GraphicsLayer(); 

export const maps = new Map({
    basemap: "arcgis-streets-night",
    layers:[graphiclayer],
});

export const view = new MapView({
    map:maps,
    center: [-8, 30],
    zoom: 1,
      constraints: {
        snapToZoom: false
      }
});

export function addPoint() {
    const obj = data["data"];

    const simpleMarkerSymbol = {
      type: "simple-marker",
      color: [150, 0, 0], // orange
      outline: {
        color: [255, 0, 0], // white
        width: 1,
      },
    };
    for(let i=0;i<obj.length;i++)
    { 
        var z = obj[i];
        const ptAttributes = {
            name: `${z["name"]}`,
            type: `Recovered: ${z["recovered"]}
            Active: ${z["active"]}
            Deaths: ${z["deaths"]}
            Confirmed: ${z['confirmed']}`,
        };  
        const point = {
            type: z["type"],
            longitude: z['longitude'],
            latitude: z['latitude'],
          };
        const pointGraphic = new Graphic({
            geometry: point,
            symbol: simpleMarkerSymbol,
            attributes: ptAttributes,
            popupTemplate: {
                title: "{name}",
                content: "{type}",
            },
        });
        graphiclayer.add(pointGraphic);
    };
}





export const initialize= (container) => {
    view.container = container;
    view
    .when(()=>{
        addPoint();
    }
    )
    .then(_ => {
        console.log("Map and View are ready")
    })
    .catch(noop);
    return () => {
        view.container = null;
    };
};
