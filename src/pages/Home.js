
import React from "react";
import './stylePages/style.css'
import Weather from "../commponents/weatherComponents/weather";





const Home = () => {

  return ( 
   
    <div className='wraper'>
        
        <div className="main-text">
          Погода
        </div>
        <div className="weather-body">
          <Weather/>
          
        </div>
        <h2>Home page!!!!</h2>
    </div>
    
    
 );
}
 
export {Home};