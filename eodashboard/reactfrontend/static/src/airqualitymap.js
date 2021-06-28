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

  const map1 = new Map({
    //interactions: defaults().extend([select, modify]),
    view: new View({
      center: [0, 0],
      zoom: 1
      }),
    layers: [raster1,wms1],
    target: 'map1'
    });
    
  
  var raster2 = new TileLayer({
    source: new OSM({url:"http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"})
    });

  var wms2 = new TileLayer({ 
    source: new TileWMS(
      {
        url:"https://gibs-{a-c}.earthdata.nasa.gov/wms/epsg3857/best/wms.cgi?TIME=2020_10_03",
        params:{'LAYERS': 'AIRS_L3_Carbon_Monoxide_500hPa_Volume_Mixing_Ratio_Daily_Day', 'TILED': true},
      }
    )
  });

  const map2 = new Map({
    view: new View({
      center: [0, 0],
      zoom: 1
      }),
    layers: [raster2,wms2],
    target: 'map2'
    });
  var raster3 = new TileLayer({
    source: new OSM({url:"http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"})
    });

  var wms3 = new TileLayer({ 
    source: new TileWMS(
      {
        url:"https://gibs-{a-c}.earthdata.nasa.gov/wms/epsg3857/best/wms.cgi?TIME=2020_10_03",
        params:{'LAYERS': 'MOPITT_CO_Monthly_Surface_Mixing_Ratio_Day', 'TILED': true},
      }
    )
  });

  const map3 = new Map({
    view: new View({
      center: [0, 0],
      zoom: 1
      }),
    layers: [raster3,wms3],
    target: 'map3'
    });

});
    return(
        <div className="aqmapping">
            <span className="labeltext">Population Density</span>
            <br></br>
            <div className="Mapflex_with_tlegend">
              <div id="map"></div>
              <img className="legend" src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/EarthObservationDashboard/main/eodashboard/reactfrontend/static/src/data/Screenshot%20from%202021-06-27%2018-27-15.png" alt=""></img>
            </div>
            <br></br>
            <span className="maptext">The above map shows us that areas with more Population Density has more number of cases. This can be because of the fact that social distancing is really tough to be maintained in such densly populated areas.</span>
            <br></br>
            <br></br>
            <span className="labeltext"> Air Quality</span>
            <br></br>
            <div className="Mapflex_with_hlegend">
              <div id='map1'></div>
              <img className='legendmap' src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/EarthObservationDashboard/main/eodashboard/reactfrontend/static/src/data/Screenshot%20from%202021-06-28%2002-22-52.png" alt=""></img>
            </div>
            <br></br>
            <span className="maptext">This map shows the average air quality index from 1950 to 2020. The Air Quality issue category measures the direct impacts of air pollution on human health in each country. It consists of three indicators: PM2.5 exposure, household solid fuels, and ozone exposure.</span>
            <br></br>
            <br></br>
            <span className="labeltext">Carbon Monoxide (500hPa Volume Mixing Ratio Daily by Day)</span>
            <br></br>
            <div className="Mapflex_with_tlegend">
              <div id="map2"></div>
              <img className="legend" src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/EarthObservationDashboard/main/eodashboard/reactfrontend/static/src/data/cod.png" alt=""></img>
            </div>
            <br></br>
            <span className="maptext">This map shows the CO levels which might indicate the proportioanlity of increase of diseases, especially COVID-19. Carbon Monoxide can cause serious health damages, sometimes leading to situations of multi-organ failures, necrosis and respiratory problems. The places with High CO concentration can be seen to have higher number of COVID-19 patients.</span>
            <br></br>
            <br></br>
            <span className="labeltext">Carbon Monoxide (Monthly Surface Mixing Ratio by Day)</span>
            <br></br>
            <div className="Mapflex_with_tlegend">
              <div id="map3"></div>
              <img className="legend" src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/EarthObservationDashboard/main/eodashboard/reactfrontend/static/src/data/com.png" alt=""></img>
            </div>
            <br></br>
            <br></br>
        </div>
    );
}
export default Airquality;