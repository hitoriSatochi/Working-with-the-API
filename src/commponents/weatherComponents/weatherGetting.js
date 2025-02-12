import React from "react";

import './styleweather.css'




class WeatherGet extends React.Component {
 

        render(){
            return(
                <div className="weather_getting_body">
                {this.props.city &&
                    <div className="container_infoWeather">    
                        <p>Местоположение: {this.props.city},{this.props.country} </p>
                        <p>Температура: {this.props.temp}</p>
                       
                    </div>
                }
                    
                </div>
            );
        } 
}

export default WeatherGet ;