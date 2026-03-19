import {useEffect, useState} from 'react';

let WeatherReport = ({city}) => {
    let [results, setResults] = useState (); 

    let [units, setUnits] = useState();
    
    useEffect(() => {
        if (city) { getWeatherData(); } 
    }, [city]);

    //Fetch weather data.
    let getWeatherData = async () => {
        try{
            let response = await fetch("https://api.open-meteo.com/v1/forecast?latitude=" + city.latitude + "&longitude=" + city.longitude + "&current=temperature_2m,is_day,precipitation,rain,showers,snowfall,wind_speed_10m,wind_direction_10m,wind_gusts_10m");
            
            let data = await response.json();

            setResults(data.current);

            setUnits(data.current_units);
        
        } catch(error){
            console.log(`An unexpected error has occured while attempting to fetch weather data. ${error}`);
        }
    }
    
    return(
        city && results && units ? 
        <div className="container bg-info text-center rounded p-3 m-3">   
            <h2>{city.name}</h2>
            
            <h3>Current Weather</h3>
            
            <h4>
                Temperature: {results.temperature_2m} {units.temperature_2m} <br/>
                
                Time of Day: {results.is_day ? "Day" : "Night"} <br/>
                
                Precipitation: {results.precipitation} {units.precipitation} <br/>
                
                Rain: {results.rain} {units.rain} <br/>
                
                Showers: {results.showers} {units.showers} <br/>
                
                Snowfall: {results.snowfall} {units.snowfall} <br/>
                
                Wind Speed: {results.wind_speed_10m} {units.wind_speed_10m} <br/>
                
                Wind Direction: {results.wind_direction_10m} {units.wind_direction_10m} <br/>
                
                Wind Gusts: {results.wind_gusts_10m} {units.wind_gusts_10m} 
            </h4>
        </div> : null
    );
}

export default WeatherReport