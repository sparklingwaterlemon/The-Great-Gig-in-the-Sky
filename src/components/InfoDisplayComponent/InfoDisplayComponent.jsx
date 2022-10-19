import "./InfoDisplayComponent.css";
import DateCard from "../DateCard/DateCard";
import WeatherCard from "../WeatherCard/WeatherCard";

export default function InfoDisplayComponent({displayDate, weatherData, curMoonPhase}){

    return(
        <>
            <div className="info-display-container">
                <DateCard displayDate={displayDate} curMoonPhase={curMoonPhase} />
                <WeatherCard weatherData={weatherData} />
            </div>
        </>
    )
}