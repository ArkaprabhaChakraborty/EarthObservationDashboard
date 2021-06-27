import React from 'react';
import './Covid.css';
import { WebMaps } from './webmap';

const Covid = () => {

    return(
            <div className="CovidDashboard">
              <span className="labeltext">COVID-19 Live Data</span>
              <WebMaps/>
            </div>
          );
    }
export default Covid;