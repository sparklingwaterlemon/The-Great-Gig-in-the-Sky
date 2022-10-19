import "./MediaWeatherCard.css";
import 'animate.css'; 

export default function MediaWeatherCard({weatherData}){

    let timeTrimed = false;

    if(weatherData.location){
        let dateTrim = weatherData.location.localtime;
        timeTrimed = dateTrim.split(" ")[1];
    }

    return (
        <>
        <div id="m-weater-card-component" className="animate__animated animate__fadeIn">
            <div className="m-weather-data-area"> 
                <div className="m-current-name"> {weatherData.location ? `${weatherData.location.name} ` : false} </div>
                <div className="m-current-time"> {weatherData.location ? `${timeTrimed}`: false } </div>

                
                <div className="m-moonrise-header"> {weatherData.forecast ? "Moonrise:" : false} </div>
                <div className="m-moonrise"> {weatherData.forecast ? `${weatherData.forecast.forecastday["0"].astro.moonrise}` : false} </div>
                <div className="m-moonset-header"> {weatherData.forecast ? "Moonset:" : false} </div>
                <div className="m-moonset"> {weatherData.forecast ? `2${weatherData.forecast.forecastday["0"].astro.moonset}` : false} </div>
                
                <div className="m-current-icon"> {weatherData.current ? 
                    <span>
                        <img src={weatherData.current.condition.icon} height="30px" alt="icon" />
                        <span className="m-current-condition"> {weatherData.current.condition.text} </span>
                    </span> : null } 
                </div>

                <div className="m-current-temp"> {weatherData.current ? 
                    <span> {Math.round(weatherData.current.temp_f)} 
                        <span className="m-degree"> &#8457; </span>
                    </span> : false } 
                </div>
                <div className="m-current-max"> {weatherData.forecast ? 
                    <span>
                        <span className="m-arrows"> &#8593; </span> 
                        {Math.round(weatherData.forecast.forecastday["0"].day.maxtemp_f)} 
                        <span className="m-maxmin-degree"> &#176; </span>
                    </span> : false } 
                </div>
                <div className="m-current-min"> {weatherData.forecast ? 
                    <span>
                        <span className="m-arrows"> &#8595; </span> 
                        {Math.round(weatherData.forecast.forecastday["0"].day.mintemp_f)}
                        <span className="m-maxmin-degree"> &#176; </span>
                    </span> : false } 
                </div> 
            </div>
        </div>
        </>
    )
}
