import React from 'react';
import './Covid.css';
import { WebMaps } from './webmap';
import Iframe from 'react-iframe';
const Covid = () => {

    return(
            <div className="CovidDashboard">
              <span className="labeltext">COVID-19 Live Data</span>
              <WebMaps/>
              <br></br>
              <span className="bodytext">Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus.
Most people who fall sick with COVID-19 will experience mild to moderate symptoms and recover without special treatment. The virus that causes COVID-19 is mainly transmitted through droplets generated when an infected person coughs, sneezes, or exhales. These droplets are too heavy to hang in the air, and quickly fall on floors or surfaces.The above mapshows the daily confirmed, active, recovered and deaths cases for every province of every country.</span>
            <br></br>
            <span className="bodytext">The Data for the plots has been taken from John Hopkins University COVID-19 open data source and Global Change
Data Lab</span>
            <br></br>
            <br></br>

            <Iframe url="https://ourworldindata.org/grapher/total-cases-covid-19?tab=chart" width="100%" height="600px" className="Iframe"/>
            <br></br>
            </div>
          );
    }
export default Covid;