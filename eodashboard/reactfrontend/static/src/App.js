import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Covid from './Covid';

const App = () => {
return(
        <div className="App">
            <Navbar/>
            <div className="App_page">
            <Covid/>
            </div>
        </div>
        );
}
export default App;