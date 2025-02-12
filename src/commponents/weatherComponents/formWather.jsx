import React from "react";
import './styleweather.css'



class FormWeather extends React.Component {
 

        render(){
            return(
                <form onSubmit={this.props.weatherMethod} className="weather-form">
                    <input type="text" name="city" placeholder="Город"/>
                    <button>Получение погоды</button>
                </form>
            );
        } 
}

export default FormWeather ;