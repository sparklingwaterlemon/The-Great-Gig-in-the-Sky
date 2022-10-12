import { useState, useEffect } from "react";
import WeatherDetailPage from "../../pages/WeatherDetail/WeatherDetailPage";
// import * as weatherAPI from "../../utilities/weather-api-service";




function SearchBar(){
    const [location, setLocation] = useState("");
    const [data, setData] = useState({});

    const API_KEY="b5011853e4994e7ba28201909221010"
    const FORECAST_CALL=`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&aqi=no&alerts=no`



    function handleFormInput(evt){
        setLocation(evt.target.value)
        console.log(evt.target.value)
    }



    async function fetchDataFromAPI(location){
        try{
            const weather = 
                await fetch(FORECAST_CALL)
                .then(res => res.json())
                .then(data => {
                    setData(data)
                })
        } catch (error){
            console.log("error", error);
        }
    }


    

    async function handleFormSubmission(evt){
        evt.preventDefault();
        await fetchDataFromAPI(location);
        
    
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

        </form>

        


        </>   
    )
}

export default SearchBar


