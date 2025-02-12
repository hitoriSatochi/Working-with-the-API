import React from "react";
import FormWeather from "./formWather";
import WeatherGet from "./weatherGetting";
import './styleweather.css'






const API_KEY="35ccec54c74eac2f4fd90da4648b4698"



class Weather extends React.Component {

    state = {
        temp: undefined,
        city: undefined,
        country:undefined,
        
        error:undefined


    }
    
    gettingWeather = async (event) =>{
        event.preventDefault();
        let cityWeather =event.target.elements.city.value ;
   
        // console.log(dataWeather);
        if(cityWeather) {
            const api_url = await 
            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityWeather}&appid=${API_KEY}&units=metric`);
            const dataWeather = await api_url.json();
            this.setState({
                temp: dataWeather.main.temp,
                city: dataWeather.name,
                country: dataWeather.sys.country,
                
                error: ""
            });
        }
       
      };

        render(){
            return(
                <div className="weather-body-layer">
                    <div className="weather-container">
                        <p>Получение погоды</p>
                        <FormWeather  weatherMethod={this.gettingWeather} />
                        <WeatherGet
                            temp={this.state.temp}
                            city={this.state.city}
                            country={this.state.country}
                            
                            error={this.state.error}
                        />
                    </div>
                </div>
            );
        } 
}

export default Weather ;