import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Covid from './Covid';
import Airquality from './airqualitymap';

const App = () => {
return(
        <div className="App">
            <Navbar/>
            <div className="App_page">
                <Covid/>
                <Airquality/>
            </div>
        </div>
        );
}
export default App;