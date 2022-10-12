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



    async function fetchDataFromAPI(){
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
        const weatherData = await fetchDataFromAPI(location);
        setData(weatherData);
        console.log(weatherData)

        setLocation("") // clear search form
    }

    async function fetchDataFromAPI(query) {
        console.log("from weather-api-service, searchWeather", query)
        return sendRequest(`${FORECAST_CALL}`, 'POST', {query});
      }

    async function sendRequest(url, method = 'GET', payload = null) {
        const options = { method };
            if (payload) {
                options.headers = { 'Content-Type': 'application/json' };
                options.body = JSON.stringify(payload);
            }
        const res = await fetch(url, options);
        if (res.ok) return res.json();
        throw new Error('Bad Request');
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
            <h3>{data["location"]["name"]}</h3>

        </form>

        


        </>   
    )
}

export default SearchBar


