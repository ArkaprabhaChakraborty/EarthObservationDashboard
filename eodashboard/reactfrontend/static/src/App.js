import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Covid from './Covid';
import Airquality from './airqualitymap';
import {Switch, Route} from 'react-router-dom';
import {BrowserRouter} from "react-router-dom";
import Agro from './Agro';
import Water from './WaterQuality';
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
                        <Agro/>
                    </Route>
                    <Route path="/about">
                        <div>Team members :
                            Aniruddha Basak : B.tech Computer Science and Engineering (Maulana ABul Kalam Azad Univesity of Technology)
                            Arkaprabha Chakraborty: B.tech Comnputer SCience and Engineering (Maulana ABul Kalam Azad Univesity of Technology)
                        </div>
                    </Route>
                    <Route path="/atm">
                        <Water/>
                    </Route>
                </Switch>
            </div>
        </div>
        </BrowserRouter>
        );
}
export default App;