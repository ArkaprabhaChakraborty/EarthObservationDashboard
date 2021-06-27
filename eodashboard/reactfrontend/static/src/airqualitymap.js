import React, { useRef, useEffect, useState } from 'react';
import "./airqualitymapping.css";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import TileWMS from 'ol/source/TileWMS';
import ImageWMS from "ol/source/ImageWMS";

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
    
  var raster1 = new TileLayer({
    source: new OSM({url:"http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"})
    });

  var wms1 = new TileLayer({ 
    source: new TileWMS(
      {
        url:"https://sedac.ciesin.columbia.edu/geoserver/wms",
        params:{'LAYERS': 'epi:epi-environmental-performance-index-2020_hlt-air-quality', 'TILED': true},
      }
    )
  });
  var wmsSource = new TileWMS({
    url: 'ttps://sedac.ciesin.columbia.edu/geoserver/wms',
    params: {'LAYERS': 'epi:epi-environmental-performance-index-2020_hlt-air-quality'},
  });

  var updateLegend = function (resolution) {
    var graphicUrl = wmsSource.getLegendUrl(resolution);
    var img = document.getElementById('legendmap');
    img.src = graphicUrl;
  };

  const map1 = new Map({
    //interactions: defaults().extend([select, modify]),
    view: new View({
      center: [0, 0],
      zoom: 1
      }),
    layers: [raster1,wms1],
    target: 'map1'
    });
  var resolution = map1.getView().getResolution();
  updateLegend(resolution);
  map1.getView().on('change:resolution', function (event) {
    var resolution = event.target.getResolution();
    updateLegend(resolution);
  });  



});
    return(
        <div className="aqmapping">
            <span className="labeltext">Population Density</span>
            <br></br>
            <br></br>
            <div id="map" ></div>
            <img className="legend" src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/EarthObservationDashboard/main/eodashboard/reactfrontend/static/src/data/Screenshot%20from%202021-06-27%2018-27-15.png" alt=""></img>
            <br></br>
            <br></br>
            <span className="maptext">The above map shows us that areas with more Population Density has more number of cases. This can be because of the fact that social distancing is really tough to be maintained in such densly populated areas.</span>
            <br></br>
            <br></br>
            <span className="labeltext"> Air Quality</span>
            <br></br>
            <br></br>
            <div id='map1'></div>
            <br></br>
            <br></br>
            <span className="maptext">This map shows the average air quality index from </span>
            <div id='legendmap'></div>
        </div>
    );
}
export default Airquality;