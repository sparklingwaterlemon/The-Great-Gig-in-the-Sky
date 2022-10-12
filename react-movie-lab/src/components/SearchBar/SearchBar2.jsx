import axios from "axios";
import { useState, useEffect } from "react";
import WeatherDetailPage from "../../pages/WeatherDetail/WeatherDetailPage";
// import * as weatherAPI from "../../utilities/weather-api-service";
// USE AXIOS



function SearchBar(){
    const [location, setLocation] = useState("");
    const [data, setData] = useState({});

    const API_KEY="b5011853e4994e7ba28201909221010"
    const FORECAST_CALL=`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&aqi=no&alerts=no`



    function handleFormInput(evt){
        setLocation(evt.target.value)
        console.log(evt.target.value)
    }

    function handleFormSubmission(evt){
        evt.preventDefault();

        fetch(FORECAST_CALL).then(res => res.json()).then(data => setData(data))
        setLocation("") // clear search form
    }
 



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

            <h3> {data["location"]["name"]}</h3>
        </form>

        


        </>   
    )
}

export default SearchBar


