import "./InfoDisplayComponent.css";
import DateCard from "../DateCard/DateCard";
import WeatherCard from "../WeatherCard/WeatherCard";
import MediaDisplayComponent from "../MediaDisplayComponent/MediaDisplayComponent";

export default function InfoDisplayComponent({displayDate, weatherData, curMoonPhase}){

    return(
        <>
            <div className="info-display-container hide-on-mobile" >
                <DateCard displayDate={displayDate} curMoonPhase={curMoonPhase} />
                <WeatherCard weatherData={weatherData} />
            </div>
            <div className="media-display-container show-on-mobile">
                <MediaDisplayComponent displayDate={displayDate} curMoonPhase={curMoonPhase}/>
            </div>
        </>
    )
}