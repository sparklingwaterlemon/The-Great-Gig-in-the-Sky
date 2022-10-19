import DateCard from "../DateCard/DateCard"

export default function MediaDisplayComponent({displayDate, curMoonPhase}){
    return(
        <DateCard displayDate={displayDate} curMoonPhase={curMoonPhase}/>
    )
}