import "./SearchBarCSS.css";
import { useState, useEffect } from "react";

export default function SearchBarComponent(){
    const [zipcode, setZipcode] = useState("");
    const [geoData, setGeoData] = useState({});

    const COORDINATES=`http://api.openweathermap.org/geo/1.0/zip?zip=${zipcode}&appid=${process.env.REACT_APP_OWM}`


    const test2 = () =>{
        console.log("test2");
    }

    useEffect(()=>{
        test2();
    },[geoData]);

    const fetchCoordinatesByZip = async(zip) => {
        try{
            await fetch(COORDINATES)
            .then(res => res.json())
            .then(data => setGeoData(data))
        } catch(error){
            console.log("error fetching data", error);
        };
    };

    const handleFormInput = (evt) =>{
        console.log(evt.target.value);
        setZipcode(evt.target.value);
    };

    const handleFormSubmit = (evt) =>{
        evt.preventDefault();
        fetchCoordinatesByZip(zipcode);
        setZipcode("");
    };

    return(
        <div className="search-container">
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="enter zip only" 
                    value={zipcode} 
                    onChange={handleFormInput} required />
            </form>
        </div>
    )
};