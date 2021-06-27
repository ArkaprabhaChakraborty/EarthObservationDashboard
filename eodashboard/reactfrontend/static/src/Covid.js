import React from 'react';
import './Covid.css';
import { WebMaps } from './webmap';

const Covid = () => {

    return(
            <div className="CovidDashboard">
              <span className="labeltext">COVID-19 Live Data</span>
              <WebMaps/>
              <br></br>
              <span className="bodytext">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.The above mapshows the daily confirmed, active, recovered and deaths cases for every province of every country.</span>
            </div>
          );
    }
export default Covid;