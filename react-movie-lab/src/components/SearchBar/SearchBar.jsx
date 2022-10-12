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

    // ASTRO DATA ACCESS
    //   ???  Cannot read properties of undefined (reading 'forecastday') ??? //
    //   to accses Astro Data - weatherData.forecast.forecastday
    //      weatherData.forecast.forecastday[0]["astro"]==>{
    //          moon_illumination, moon_phase, moonrise, moonset, sunrise, sunset
    //      }
    //    weatherData.forecast.forecastday["0"].astro.sunrise

    // 
    //   ???  Cannot read properties of undefined (reading 'forecastday') ??? //
    //   to accses Day Max Data - weatherData.forecast.forerecastday
    //      weatherData.forecast.forecastday[0]["day"]==>{
    //          maxtemp_f, mintemp_f, daily_chance_of_rain, daily_chance_of_snow
    //      }
    //   weatherData.forecast.forecastday["0"].day.maxtemp_f


    


    
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
            
            <p className="weather-text"> {weatherData.current ? currentwd.condition.text : null } </p>
            <p className="weather-icon"> {weatherData.current ? <img src={currentwd.condition.icon} /> : null } </p>

            
            <p className="temp_f"> {weatherData.current ? `temp_f -- ${currentwd.temp_f}` : null } </p>
            <p className="feelslike_f"> {weatherData.current ? `feelslike_f -- ${currentwd.feelslike_f}` : null } </p>

            <p className="maxtemp_f"> {weatherData.forecast ? `maxtemp_f -- ${weatherData.forecast.forecastday["0"].day.maxtemp_f}` : null } </p>
            <p className="mintemp_f"> {weatherData.forecast ? `mintemp_f -- ${weatherData.forecast.forecastday["0"].day.mintemp_f}` : null } </p>
            <p className="daily_chance_of_rain"> {weatherData.forecast ? `daily_chance_of_rain -- ${weatherData.forecast.forecastday["0"].day.daily_chance_of_rain}` : null } </p>
            <p className="daily_chance_of_snow"> {weatherData.forecast ? `daily_chance_of_snow -- ${weatherData.forecast.forecastday["0"].day.daily_chance_of_snow}` : null } </p>


            <p className="moonrise"> {weatherData.forecast ? `moonrise -- ${weatherData.forecast.forecastday["0"].astro.moonrise}` : null } </p>
            <p className="moonset"> {weatherData.forecast ? `moonset -- ${weatherData.forecast.forecastday["0"].astro.moonset}` : null } </p>
            <p className="moon_phase"> {weatherData.forecast ? `moon_phase -- ${weatherData.forecast.forecastday["0"].astro.moon_phase}` : null } </p>
            <p className="moon_illumination"> {weatherData.forecast ? `moon_illumination -- ${weatherData.forecast.forecastday["0"].astro.moon_illumination}` : null } </p>
            <p className="sunrise"> {weatherData.forecast ? `sunrise -- ${weatherData.forecast.forecastday["0"].astro.sunrise}` : null } </p>
            <p className="sunset"> {weatherData.forecast ? `sunset -- ${weatherData.forecast.forecastday["0"].astro.sunset}` : null } </p>
            

            

        </div>

        


        </>   
    )
}

export default SearchBar


