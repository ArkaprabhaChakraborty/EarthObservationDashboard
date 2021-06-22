import React, {Component}from 'react';
import './Covid.css';

class Covid extends Component {

    render()
    {
      return(
              <div className="CovidDashboard">
                <div className="MapBox">
                  <div id="viewDiv"/>
                </div>
              </div>
            );
    }
  }
export default Covid;