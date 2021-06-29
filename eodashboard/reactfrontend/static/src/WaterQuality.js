import React, {useEffect} from 'react';
import "./Water.css";
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import TileWMS from 'ol/source/TileWMS';

function Water() {
    useEffect( () => {
  
        var raster = new TileLayer({
          source: new OSM({url:"http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"})
        });
      
        var wms = new TileLayer({ 
          source: new TileWMS(
            {
              url:"https://sedac.ciesin.columbia.edu/geoserver/wms",
              params:{'LAYERS': 'esi:esi-environmental-sustainability-index-2005_water-quality', 'TILED': true},
            }
          )
        });
      
        const map = new Map({
          view: new View({
            center: [10, 10],
            zoom: 1
            }),
          layers: [raster,wms],
          target: 'map7'
          });
         
        var raster1 = new TileLayer({
          source: new OSM({url:"http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"})
        });
      
        var wms1 = new TileLayer({ 
          source: new TileWMS(
            {
              url:"https://sedac.ciesin.columbia.edu/geoserver/wms",
              params:{'LAYERS': 'epi:epi-environmental-performance-index-2020_eco-water-resources', 'TILED': true},
            }
          )
        });
      
        const map1 = new Map({
          view: new View({
            center: [10, 10],
            zoom: 1
            }),
          layers: [raster1,wms1],
          target: 'map8'
          });

        var raster2 = new TileLayer({
          source: new OSM({url:"http://{a-c}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}.png"})
        });
      
        var wms2 = new TileLayer({ 
          source: new TileWMS(
            {
              url:"https://sedac.ciesin.columbia.edu/geoserver/wms",
              params:{'LAYERS': 'epi:epi-environmental-performance-index-2020_hlt-sanitation-and-drinking-water', 'TILED': true},
            }
          )
        });
      
        const map2 = new Map({
          view: new View({
            center: [10, 10],
            zoom: 1
            }),
          layers: [raster2,wms2],
          target: 'map9'
          });


        });
    return (
        <div className="WaterDashboard">
            <br></br>
            <span className="labeltext">Water Quality</span>
            <br></br>
            <br></br>
            <div className="Mapflex">
              <div className="Map">
                <div id='map7'></div>
                <img className="legend" src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/EarthObservationDashboard/main/eodashboard/reactfrontend/static/src/data/water_quality.png" alt=""></img>
              </div>
              <br></br>
              <div>
                <span className="maptext">
                Water quality describes the condition of the water, including chemical, physical, and biological characteristics, usually with respect to its suitability for a particular purpose such as drinking or swimming. 
                Poor water quality can also pose a health risk for ecosystems.
                The parameters for water quality are determined by the intended use. Work in the area of water quality tends to be focused on water that is treated for potability, industrial/domestic use, or restoration (of an environment/ecosystem, generally for health of human/aquatic life).
             </span>
              </div>
            </div>
            <br></br>
            <br></br>
            <span className="labeltext">Water Quantity</span>
            <br></br>
            <br></br>
            <div className="Mapflex">
              <div className="Map">
                <div id="map8"></div>
                <img className="legend" src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/EarthObservationDashboard/main/eodashboard/reactfrontend/static/src/data/water.png" alt=""></img>
              </div>
              <br></br>
              <span className="maptext">Water quantity is the timing and total yield of water from a watershed, and is measured by total yield and peak flow over a specified period of time.
              Most of the earth consists of water, there is much more water than there is land.
About 70% of the earth's surface is covered in water. But water also exists in the air as vapour and in aquifers in the soil, as groundwater.
The total water supply of the world is 1.400.000.000 km3. (A m3 of water equals 1,000 litres.)
Each year, 119.000 km3 of water precipitates on land and 74.200 km3 evaporates into the atmosphere, by evapotranspiration from soil and vegetation. On ocean and sea surface 450.000 km3 of water falls every year and 502.800 km3 evaporates.
Of the freshwater on Earth, about 2.200 km3 flows in the ground, mostly within half a mile from the surface. About 135.000 km3 of water can be found in the atmosphere as water vapour, in lakes, soil moisture, marshes and wetlands, rivers, plant and animals. Groundwater and fresh water stored in surface bodies and in the atmosphere represent an available resource of fresh water. Most of the freshwater is stored in glaciers and icecaps, mainly in the Polar Regions and in Greenland, and it is unavailable. This is another 24.500.000 km3 of water, formig the 69.5 % of the total fresh water of the Earth. 
              </span>
            </div>
            <br></br>
            <br></br>
            <span className="labeltext">Sanitation and drinking water</span>
            <br></br>
            <br></br>
            <div className="Mapflex">
              <div className="Map">
                <div id="map9"></div>
                <img className="legend2" src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/EarthObservationDashboard/main/eodashboard/reactfrontend/static/src/data/sanit.png" alt=""></img>
              </div>
              <br></br>
              <span className="maptext">
              The benefits of having access to an improved drinking water source can only be fully realized when there is also access to improved sanitation and adherence to good hygiene practices. Beyond the immediate, obvious advantages of people being hydrated and healthier, access to water, sanitation and hygiene – known collectively as WASH – has profound wider socio-economic impacts, particularly for women and girls.
The fact that WASH is the subject of dedicated targets within the Sustainable Development Goal (SDG 6) is testament to its fundamental role in public health and therefore in the future of sustainable development. Indeed, access to safe water and sanitation are human rights, as recognized in 2010 by the United Nations General Assembly. For universal fulfilment of these rights to become reality, we will need the right systems: well-resourced, capable institutions delivering services and changing behaviour in resilient and appropriate ways.
              </span>
            </div>
            <br></br>
            <br></br>
        </div>
    )};

export default Water;