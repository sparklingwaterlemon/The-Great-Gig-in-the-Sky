import "./InfoDisplayComponent.css";
import DateCard from "../DateCard/DateCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import MediaDisplayComponent from "../MediaDisplayComponent/MediaDisplayComponent";

export default function InfoDisplayComponent({displayDate, weatherData, curMoonPhase}){
    console.log(weatherData)
    return(
        <>
            <div className="info-display-container hide-on-mobile" >
                <DateCard displayDate={displayDate} curMoonPhase={curMoonPhase} />
                <WeatherCard weatherData={weatherData} />
            </div>
            <div className="media-display-container show-on-mobile">
                {weatherData.current ? <WeatherCard weatherData={weatherData}/> : <MediaDisplayComponent displayDate={displayDate} curMoonPhase={curMoonPhase}/> }
            </div>
        </>
    )
}
