import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
            <div className="Navbar">
                <div className="navbarleft">
                    <img className="header_logo" src="https://images.eodashboardhackathon.org/images/qd8yVOciXgoktJyIrYBDKpmCtCw=/9/original/" alt=""/>
                </div>
                <div className="navbarright">
                    <div className="headerbutton">
                        COVID-19
                    </div>
                    <div className="headerbutton">
                        SOMETHING
                    </div>
                    <div className="headerbutton">
                        SOMETHING
                    </div>
                    <div className="headerbutton">
                        ABOUT US
                    </div>
                </div>
            </div>
            );
    }
    export default Navbar;