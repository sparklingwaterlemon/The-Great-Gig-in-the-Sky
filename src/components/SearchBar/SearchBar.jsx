import { useState } from "react";
import "./SearchBar.css";


export default function SearchBar({weatherData, setWeatherData}){
    const [location, setLocation] = useState("");

    const FORECAST_CALL=`http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&aqi=no&alerts=no`


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
    
        setLocation("")
    }

 
    
    return (
        <>
        <div className="search-bar-form-container">
            
            <form onSubmit={handleFormSubmission}>
                <input 
                    type="text" 
                    placeholder="Enter City or Zip Code" 
                    required  
                    value={location} 
                    onChange={handleFormInput}
                    className="search-input"
                />
            </form>

        </div>      


        </>   
    )
}




