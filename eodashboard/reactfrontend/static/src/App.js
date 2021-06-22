import React, {Component} from 'react';
import './App.css';
import Navbar from './Navbar';
import Covid from './Covid';

class App extends Component{
    componentDidMount() {
        const script = document.createElement("script");
        script.src = "https://js.arcgis.com/4.19/";
        script.async = true;
        document.head.appendChild(script);
        const link = document.createElement("link");
        link.href= "https://js.arcgis.com/4.19/esri/themes/dark/main.css";
        link.rel = "stylesheet";
        document.head.appendChild(link);
      }
      render(){
            return(
                <div className="App">
                    <Navbar/>
                <div className="App_page">
                    <Covid/>
                </div>
        </div>
        );
      }
}
export default App;