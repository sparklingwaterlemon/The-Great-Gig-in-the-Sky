import "./DateAndMoonPhase.css";
import topImageDayNumber from "../../utilities/DayDateFunc/DayDateFunc";

export default function DateAndMoonPhase({indexForDate, currMoonPhase}){  

    // taking the index value, ie. 31 and converting it back to a date = January 31
    const dateFromDay =(index)=>{
        var yyyycusp = topImageDayNumber - 92 + 365 // between years..
        let fromDate = {};
        if (index > yyyycusp) {
            fromDate = new Date(2022, 0);
        } else {
            fromDate = new Date(2023, 0);
        }
        let dayDate = new Date(fromDate.setDate(index));
        return dayDate.toDateString();
    };

    return(
        <div className="info-box-container">
            {dateFromDay(indexForDate)}
            <br/>
            {currMoonPhase}
            
        </div>
    )
}


