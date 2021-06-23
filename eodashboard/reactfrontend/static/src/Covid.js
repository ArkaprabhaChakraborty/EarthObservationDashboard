import React from 'react';
import './Covid.css';
import { WebMaps } from './webmap';

const Covid = () => {

    return(
            <div className="CovidDashboard">
                <div className="MapBox">
                  <WebMaps/>
                </div>
            </div>
            );
    }
export default Covid;