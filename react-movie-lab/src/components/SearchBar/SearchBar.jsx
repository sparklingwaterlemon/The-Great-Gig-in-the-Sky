import { useState } from "react";
import * as weatherAPI from "../../utilities/weather-api-service";




function SearchBar(){

    
    

    const [location, setLocation] = useState("");
    const [data, setData] = useState({});

    const API_KEY="b5011853e4994e7ba28201909221010"
    const FORECAST_CALL=`http://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${location}&aqi=no&alerts=no`



    function handleFormInput(evt){
        setLocation(evt.target.value)
        console.log(evt.target.value)
    }
    
    // move to controllers/api?
    async function searchAPI(location){
        const weather = 
            await fetch(FORECAST_CALL)
            .then((response)=> response.data);
        console.log(weather)
        setData(weather)
        // setData(weather)
        // console.log("----test---")
        // console.log(data)

    }

    // setData(weatherJSONbyLocation)
    // console.log(data)

    async function handleFormSubmission(evt){
        evt.preventDefault();
        console.log("-----");
        console.log(location); // location set in handleFormInput
        
        await searchAPI(location);

        
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

        <div className="container">
            <div className="location">
                <p> Dallas</p>
            </div>
            <div className="temp">
                <h2>60</h2>
            </div>
        </div>


        </>   
    )
}

export default SearchBar