import React, { useRef, useEffect, useState } from 'react';
import "./airqualitymapping.css";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import TileWMS from 'ol/source/TileWMS'


const Airquality = () => {
  useEffect( () => {
  
  var raster = new TileLayer({
    source: new OSM({url:"http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"})
  });

  var wms = new TileLayer({ 
    source: new TileWMS(
      {
        url:"https://sedac.ciesin.columbia.edu/geoserver/wms",
        params:{'LAYERS': 'gpw-v4:gpw-v4-population-density-rev11_2020', 'TILED': true},
      }
    )
  });

  const map = new Map({
    //interactions: defaults().extend([select, modify]),
    view: new View({
      center: [0, 0],
      zoom: 1
      }),
    layers: [raster,wms],
    target: 'map'
    });
});
    return(
        <div className="aqmapping">
            <span className="labeltext">Population Density</span>
            <br></br>
            <br></br>
            <div id="map" ></div>
        </div>
    );
}
export default Airquality;