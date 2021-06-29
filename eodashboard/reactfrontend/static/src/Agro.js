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
          target: 'map4'
          });
         
        var raster1 = new TileLayer({
          source: new OSM({url:"http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"})
        });
      
        var wms1 = new TileLayer({ 
          source: new TileWMS(
            {
              url:"https://sedac.ciesin.columbia.edu/geoserver/wms",
              params:{'LAYERS': '	crop-climate:crop-climate-effects-climate-global-food-production', 'TILED': true},
            }
          )
        });
      
        const map1 = new Map({
          view: new View({
            center: [10, 10],
            zoom: 1
            }),
          layers: [raster1,wms1],
          target: 'map5'
          });


        });
    return (
        <div className="Agrodashboard">
            <br></br>
            <span className="labeltext">Global Agricultural Lands: Croplands</span>
            <br></br>
            <br></br>
            <div className="Mapflex">
              <div className="Map">
                <div id='map4'></div>
                <img className="legend" src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/EarthObservationDashboard/main/eodashboard/reactfrontend/static/src/data/cultivate.png" alt=""></img>
              </div>
              <br></br>
              <div>
                <span className="maptext">Agriculture utilizes arable land for the production of food, feed and fiber from annual and permanent crops (cropland), and uses grassland and permanent pastures for grazing and the production of feed for ruminant livestock herds (grassland).</span>
                <span className="maptext">
              The Global Croplands data set represents the proportion of land areas used as cropland (land used for the cultivation of food) in the year 2000. Satellite data from Modetate Resolution Imaging Spectroradiometer (MODIS) and
              Satellite Pour l'Observation de la Terre (SPOT) Image Vegetation sensors were combined with agricultural inventory data to create a global data set. 
              The visual presentation of these data demonstrates the extent to which human land use for agriculture has changed the Earth and in which areas this change is most intense. The data were compiled by Navin Ramankutty et al. (2008) and distributed by the Columbia University Center for International Earth Science Information Network (CIESIN).
               Here we can see the total cultivable land available till 2020.</span>
              </div>
            </div>
            <br></br>
            <br></br>
            <span className="labeltext">Crop Climate: Maize, Rice, and Wheat</span>
            <br></br>
            <br></br>
            <div className="Mapflex">
              <div className="Map">
                <div id="map5"></div>
                <img></img>
              </div>
            </div>
        </div>
    )};

export default Agro;
