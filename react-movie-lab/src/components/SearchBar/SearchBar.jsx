import { useState } from "react";
import "./SearchBar.css";
// import WeatherDetailPage from "../../pages/WeatherDetail/WeatherDetailPage";




function SearchBar(){
    const [location, setLocation] = useState("");
    const [weatherData, setWeatherData] = useState({});

    const API_KEY="b5011853e4994e7ba28201909221010"
    const FORECAST_CALL=`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&aqi=no&alerts=no`



    function handleFormInput(evt){
        setLocation(evt.target.value)
    }

    async function fetchDataFromAPI(location){
        try{
            await fetch(FORECAST_CALL)
            .then(res => res.json())
            .then(data => {
                setWeatherData(data)
            });
        } catch (error){
            console.log("error", error);
        }
    }

    async function handleFormSubmission(evt){
        evt.preventDefault();

        await fetchDataFromAPI(location);
    
        setLocation("") // clear search form
    }


    // Peeling Giant/Umbrella weatherData Object to access the nested Objects
    const localwd = weatherData.location; // {name, region, country}
    let currentwd = weatherData.current; 
        //  currentObj = {
        //     condition: {
        //         text: "partly cloudy",
        //         icon: "www.cloud.png"
        //     },
        //     feelslike_f: 79.8,
        //     temp_f: 77,
        // }
    

    let forecastwd = weatherData.forecast; 
    // ASTRO DATA ACCESS
    //   ???  Cannot read properties of undefined (reading 'forecastday') ??? //
    //   to accses Astro Data - weatherData.forecast.forecastday
    //      weatherData.forecast.forecastday[0]["astro"]==>{
    //          moon_illumination, moon_phase, moonrise, moonset, sunrise, sunset
    //      }
    //    forecastUmbrella.forecastday[0]["astro"]["sunrise"]

    // 
    //   ???  Cannot read properties of undefined (reading 'forecastday') ??? //
    //   to accses Day Max Data - weatherData.forecast.forerecastday
    //      weatherData.forecast.forecastday[0]["day"]==>{
    //          maxtemp_f, mintemp_f, daily_chance_of_rain, daily_chance_of_snow
    //      }
    //   forecastUmbrella.forecastday[0]["day"]["maxtemp_f"]

    

    


    
    return (
        <>
        <h3>Search Bar </h3>

        <form className="weather-form" onSubmit={handleFormSubmission}>
            <label> Search </label>

            <input 
                type="text" 
                placeholder="City or Zip Code" 
                required  
                value={location} 
                onChange={handleFormInput}
            />

            <button className="weather-button" >
                Search
            </button>

        </form>

        <div>
            <p className="location-info"> {weatherData.location ? `${localwd.name}, ${localwd.region}` : false } </p>
            <p className="weather-icon"> {weatherData.current ? <img src={currentwd.condition.icon} /> : null } </p>
            

        </div>

        


        </>   
    )
}

export default SearchBar


