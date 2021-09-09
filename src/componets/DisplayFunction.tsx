
import React from "react";
import CurrentWeather from "./FetchFunction"

type AcceptedProps = {
    
    locationWeather: {
        main: {
            temp: string;
            feels_like: string;
            humidity: string
        },
        weather: {
            description: string
        }
    }
}

const CurrentWeatherDisplay= (props: AcceptedProps) => {
    return (
        <div>
            <h2>Your Location's:</h2>
             <h5>Description</h5>
            <p>{props.locationWeather.weather.description}</p> 
            <h5>Temp</h5>
            <p>{props.locationWeather.main.temp}&deg;F</p>
            <h5>Feels Like</h5>
            <p>{props.locationWeather.main.feels_like}&deg;F</p>
            <h5>Humidity</h5>
            <p>{props.locationWeather.main.humidity}%</p>
        </div>
    )
}

export default CurrentWeatherDisplay;