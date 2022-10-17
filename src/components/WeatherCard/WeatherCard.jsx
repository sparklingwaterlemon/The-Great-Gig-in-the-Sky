import "./WeatherCard.css";
import 'animate.css'; 
import {useEffect, useState, useRef} from "react";

export default function WeatherCard({weatherData}) {
    const [wcAnimate, setWCAnimate] = useState(null);
    let dateTrimed = false;
    let timeTrimed = false;

    if(weatherData.location){
        let dateTrim = weatherData.location.localtime;
        dateTrimed = dateTrim.split(" ")[0].slice(5).replace("-", "/");
        timeTrimed = dateTrim.split(" ")[1];
    }

    const wcBox = useRef();
    const astroBox = useRef();

    useEffect(()=>{
        if(weatherData.location){
            astroBox.current.style.outline="2px dotted dodgerblue";
            wcBox.current.style.outline="1px solid dodgerblue";
            setWCAnimate("animate__animated animate__zoomInRight");
        }
    },[weatherData])



    return (
        <>
        <div id="weater-card-component" className={wcAnimate}>
            <div className="weather-data-area" ref={wcBox}> 
                <div className="current-name"> {weatherData.location ? `${weatherData.location.name}` : false} </div>
                <div className="current-datetime"> {weatherData.location ? 
                    <span>{dateTrimed}<span>, &nbsp; </span> {timeTrimed} </span> 
                    : false
                    } 
                </div>

                <div className="current-icon"> {weatherData.current ? 
                    <span>
                        <img src={weatherData.current.condition.icon} height="30px" alt="icon" />
                        <span className="current-condition"> {weatherData.current.condition.text} </span>
                    </span>
                    :
                    null } 
                </div>
                
                <div className="current-max"> {weatherData.forecast ? 
                    <span>
                        <span className="arrows"> &#8593; </span> 
                        {Math.round(weatherData.forecast.forecastday["0"].day.maxtemp_f)} 
                        <span className="maxmin-degree"> &#176; </span>
                    </span> 
                    : false } 
                </div>

                <div className="current-min"> {weatherData.forecast ? 
                    <span>
                        <span className="arrows"> &#8595; </span> 
                        {Math.round(weatherData.forecast.forecastday["0"].day.mintemp_f)}
                        <span className="maxmin-degree"> &#176; </span>
                    </span> 
                    : false } 
                </div>

                <div className="current-temp"> {weatherData.current ? 
                    <span>
                        {Math.round(weatherData.current.temp_f)}
                        <span className="degree"> &#8457; </span>
                    </span>
                    : false }
                </div>

            </div>


            <div className="astro-data-area" ref={astroBox}>
                <div className="moonphase-header all-headers"> {weatherData.forecast ? "Moon Phase" : false} </div>
                    <div className="moonphase all-info"> {weatherData.forecast ? `${weatherData.forecast.forecastday["0"].astro.moon_phase}` : false} </div>


                <div className="moonillumination-header all-headers"> {weatherData.forecast ? "Moon Illumination" : false} </div>
                    <div className="moonillumination all-info"> {weatherData.forecast ? `${weatherData.forecast.forecastday["0"].astro.moon_illumination} %` : false} </div>
                    
                <div className="moonrise-header all-headers"> {weatherData.forecast ? "Moonrise" : false} </div>
                    <div className="moonrise  all-info"> {weatherData.forecast ? `${weatherData.forecast.forecastday["0"].astro.moonrise}` : false} </div>
                <div className="moonset-header all-headers"> {weatherData.forecast ? "Moonset" : false} </div>
                    <div className="moonset all-info"> {weatherData.forecast ? `${weatherData.forecast.forecastday["0"].astro.moonset}` : false} </div>

                <div className="sunrise-header all-headers"> {weatherData.forecast ? "Sunrise" : false} </div>
                    <div className="sunrise all-info"> {weatherData.forecast ? `${weatherData.forecast.forecastday["0"].astro.sunrise}` : false} </div>
                <div className="sunset-header all-headers"> {weatherData.forecast ? "Sunset" : false} </div>
                    <div className="sunset all-info"> {weatherData.forecast ? `${weatherData.forecast.forecastday["0"].astro.sunset}` : false} </div>

                <div className="rain"> {weatherData.forecast ? 
                    <span>
                        <span className="rainsnow-icon"> &#9730; </span>
                        &nbsp; {weatherData.forecast.forecastday["0"].day.daily_chance_of_rain}
                        <span className="percent-sign"> % </span>
                    </span> 
                    : 
                    null} 
                </div>
                <div className="snow"> {weatherData.forecast ? 
                    <span> 
                        <span className="rainsnow-icon"> &#10052; </span>
                        &nbsp; {weatherData.forecast.forecastday["0"].day.daily_chance_of_snow}
                        <span className="percent-sign"> % </span>
                        </span>
                    : 
                    null} 
                </div>
            
                
            </div>
        </div>
        </>
    )
};