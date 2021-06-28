import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Covid from './Covid';
import Airquality from './airqualitymap';
import {Switch, Route} from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";


const App = () => {
return(
    <BrowserRouter>
        <div className="App">
            <Navbar/>
            <div className="App_page">
                
                <Switch>
                    <Route path="/" exact>
                        <Covid/>
                        <Airquality/>
                    </Route>
                    <Route path="/agro" exact>
                        <div>AGROSTUFFS</div>
                    </Route>
                    <Route path="/about">
                        <div>ABOUT US</div>
                    </Route>
                    <Route path="/atm">
                        <div>SOMETHING</div>
                    </Route>
                </Switch>
            </div>
        </div>
        </BrowserRouter>
        );
}
export default App;