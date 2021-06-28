import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return(
            <div className="Navbar">
                <Link to="/">
                <div className="navbarleft">
                
                    <img className="header_logo" src="https://images-na.ssl-images-amazon.com/images/I/51f%2Bcp4vEDL._SL1200_.jpg" alt=""/>
                    <span className="header_name">BROTHER EYE</span>
                </div>
                </Link>
                <div className="navbarright">
                    <Link to="/">
                        <div className="headerbutton">
                            COVID-19
                        </div>
                    </Link>
                    <Link to="/agro">
                        <div className="headerbutton">
                            AGRICULTURE
                        </div>
                    </Link>
                    <Link to="/atm">
                        <div className="headerbutton">
                            WATER QUALITY
                        </div>
                    </Link>
                    <Link to="/about">
                        <div className="headerbutton">
                            ABOUT US
                        </div>
                    </Link>
                </div>
            </div>
            );
    }
    export default Navbar;