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
                <img className="legend" src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/EarthObservationDashboard/main/eodashboard/reactfrontend/static/src/data/cultivate.png" alt=""></img>
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
            <span className="labeltext">Sanitation and drinking water</span>
            <br></br>
            <br></br>
            <div className="Mapflex">
              <div className="Map">
                <div id="map9"></div>
                <img className="legend2" src="https://raw.githubusercontent.com/ArkaprabhaChakraborty/EarthObservationDashboard/main/eodashboard/reactfrontend/static/src/data/Screenshot%20from%202021-06-29%2016-27-26.png" alt=""></img>
              </div>
              <br></br>
              <span className="maptext">
                Along with agriculture its necesarry to take care of drought hazards.
                A drought is an event of prolonged shortages in the water supply, whether atmospheric, surface water or ground water. 
                A drought can last for months or years, or may be declared after as few as 15 days.
                The lack of adequate precipitation, either rain or snow, can cause reduced soil moisture or groundwater, diminished stream flow, crop damage, and a general water shortage.
                Drought is a recurring feature of the climate in most parts of the world. However, these regular droughts have become more extreme and more unpredictable due to climate change. In fact studies based on dendrochronology, or tree rings dating, confirm that drought affected by global warming goes back to 1900.
                Droughts affect food production and human society, so they are considered a disaster, of natural, supernatural or human cause (which itself could be supernatural causes, malediction, sin, ...). It is among the earliest documented climatic events, present in the Epic of Gilgamesh and tied to the Biblical story of Joseph's arrival in and the later Exodus from Ancient Egypt.
              </span>
            </div>
            <br></br>
            <br></br>
        </div>
    )};

export default Water;