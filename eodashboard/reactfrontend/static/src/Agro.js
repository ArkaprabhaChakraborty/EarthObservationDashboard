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

        var raster2 = new TileLayer({
          source: new OSM({url:"http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"})
        });
      
        var wms2 = new TileLayer({ 
          source: new TileWMS(
            {
              url:"https://sedac.ciesin.columbia.edu/geoserver/wms",
              params:{'LAYERS': 'ndh:ndh-drought-hazard-frequency-distribution', 'TILED': true},
            }
          )
        });
      
        const map2 = new Map({
          view: new View({
            center: [10, 10],
            zoom: 1
            }),
          layers: [raster2,wms2],
          target: 'map6'
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
                <img className="legend" src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/EarthObservationDashboard/main/eodashboard/reactfrontend/static/src/data/weight.png" alt=""></img>
              </div>
              <br></br>
              <span className="maptext">This Map shows the average production of wheat,rice and maize for all countries from 2017-2020. Maps like this provide insights on food availability during periods of crisis like COVID-19 
              and provide someuseful insights on how to battle with such crisis. Agricultural productivity is measured as the ratio of agricultural outputs to inputs. While individual products are usually measured by weight, which is known as crop yield, varying products make measuring overall agricultural output difficult. Therefore, agricultural productivity is usually measured as the market value of the final output. This 
              productivity can be compared to many different types of inputs such as labour or land. Such comparisons are called partial measures of productivity.
              </span>
            </div>
            <br></br>
            <br></br>
            <span className="labeltext"> Drought Hazard</span>
            <br></br>
            <br></br>
            <div className="Mapflex">
              <div className="Map">
                <div id="map6"></div>
                <img className="legend" src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/EarthObservationDashboard/main/eodashboard/reactfrontend/static/src/data/weight.png" alt=""></img>
              </div>
              <br></br>
              <span className="maptext">
              </span>
            </div>
        </div>
    )};

export default Agro;
