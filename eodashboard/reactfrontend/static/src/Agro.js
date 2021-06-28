import React, {useEffect} from 'react';
import "./Agro.css";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import TileWMS from 'ol/source/TileWMS';

function Agro() {
    useEffect( () => {
  
        var raster = new TileLayer({
          source: new OSM({url:"http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"})
        });
      
        var wms = new TileLayer({ 
          source: new TileWMS(
            {
              url:"https://sedac.ciesin.columbia.edu/geoserver/wms",
              params:{'LAYERS': 'aglands:aglands-croplands-2000', 'TILED': true},
            }
          )
        });
      
        const map = new Map({
          view: new View({
            center: [10, 10],
            zoom: 1
            }),
          layers: [raster,wms],
          target: 'map'
          });
        });
    return (
        <div className="Agrodashboard">
            <br></br>
            <span className="labeltext">Global Agricultural Lands: Croplands</span>
            <div className="Mapflex">
                <div id='map'></div>
                <img ></img> 
            </div>
        </div>
    )};

export default Agro;
