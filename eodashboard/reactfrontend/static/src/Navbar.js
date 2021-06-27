import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return(
            <div className="Navbar">
                <div className="navbarleft">
                    <img className="header_logo" src="https://images-na.ssl-images-amazon.com/images/I/51f%2Bcp4vEDL._SL1200_.jpg" alt=""/>
                    <span className="header_name">BROTHER EYE</span>
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