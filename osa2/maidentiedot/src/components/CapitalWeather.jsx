import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CapitalWeather = ({capital}) => {
    const api_key = process.env.REACT_APP_API_KEY;
    const url = `http://api.weatherstack.com/current?access_key=${api_key}&query=${capital}&units=m`;
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        axios.get(url).then(res => {
            setWeatherData(res.data);
        })
    },[])

    console.log(weatherData);
    console.log(api_key);
    return(        
        <div>
            <h2>Weather in {capital}</h2>
            {api_key && 'current' in weatherData ?
            <div>
                    <p><b>Temperature: </b> {weatherData.current.temperature}. Feels like {weatherData.current.feelslike}</p>
                    <img src={weatherData.current.weather_icons[0]} alt="Icon describing the weather"></img>
                    <p><b>Wind: </b>{weatherData.current.wind_speed} km/h. Degree: {weatherData.current.wind_degree}. Direction: {weatherData.current.wind_dir}</p>
            </div> :
            <div>
            <p>No API key given, please run app with "REACT_APP_API_KEY=API_KEY_HERE npm start" to get weather info.</p>
            <p>It's also possible that their server is down.</p>
            </div>}
        </div>
    )
}

export default CapitalWeather