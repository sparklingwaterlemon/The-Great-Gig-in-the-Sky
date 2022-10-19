import "./InfoDisplayComponent.css";
import DateCard from "../DateCard/DateCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import MediaWeatherCard from "../MediaWeatherCard/MediaWeatherCard";
import MediaDateCard from "../MediaDateCard/MediaDateCard";

export default function InfoDisplayComponent({displayDate, weatherData, curMoonPhase}){
    console.log(weatherData)
    return(
        <>
            <div className="info-display-container hide-on-mobile" >
                <DateCard displayDate={displayDate} curMoonPhase={curMoonPhase} />
                <WeatherCard weatherData={weatherData} />
            </div>
            <div className="media-display-container show-on-mobile">
                {weatherData.current ? <MediaDateCard displayDate={displayDate} curMoonPhase={curMoonPhase}/> : <MediaWeatherCard weatherData={weatherData}/>}
            </div>

        </>
    )
}


// 