// import { toHaveAccessibleDescription } from "@testing-library/jest-dom/dist/matchers";
import { useState } from "react";
import "./SearchBarComponent.css";

//         <div className="search-bar-form-container">       
//             <form onSubmit={handleFormSubmission}>
//                 <input 
//                     type="text" 
//                     placeholder="Enter City or Zip Code" 
//                     required  
//                     value={location} 
//                     onChange={handleFormInput}
//                     className="search-input"
//                 />
//             </form>
//         </div>      

//     async function handleFormSubmission(evt){
//         evt.preventDefault();

//         await fetchDataFromAPI(location);
    
//         setLocation("")
//     }



export default function SearchBarComponent(){
    const [searchLocation, setSearchLocation] = useState("");

    const handleInputForm=(evt)=>{
        setSearchLocation(evt.target.value);
    };
    console.log(searchLocation);
    
    
    const handleFormSubmit = async (evt) =>{
        evt.preventDefault();
    } 



    return (
        <>
        <div className="search-bar-container">
            <form className="search-form" onSubmit={handleFormSubmit}>
                <input
                    type="text" placeholder="Enter City or Zip Code"
                    onChange={handleInputForm} />
                <button type="submit"> Submit </button>
            </form>

            

        </div>      
        </>
    )
}

//     const [location, setLocation] = useState("");

//     const FORECAST_CALL=`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&aqi=no&alerts=no`
//     // const FORECAST_CALL=`https://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_API_KEY}&q=${location}&aqi=no&alerts=no'

//     function handleFormInput(evt){
//         setLocation(evt.target.value)
//     }

//     async function fetchDataFromAPI(location){
//         try{
//             await fetch(FORECAST_CALL)
//             .then(res => res.json())
//             .then(data => {
//                 setWeatherData(data)
//             });
//         } catch (error){
//             console.log("error", error);
//         }
//     }

//     async function handleFormSubmission(evt){
//         evt.preventDefault();

//         await fetchDataFromAPI(location);
    
//         setLocation("")
//     }

 
    
//     return (
//         <>
//         <div className="search-bar-form-container">
            
//             <form onSubmit={handleFormSubmission}>
//                 <input 
//                     type="text" 
//                     placeholder="Enter City or Zip Code" 
//                     required  
//                     value={location} 
//                     onChange={handleFormInput}
//                     className="search-input"
//                 />
//             </form>

//         </div>      


//         </>   
//     )
// }




