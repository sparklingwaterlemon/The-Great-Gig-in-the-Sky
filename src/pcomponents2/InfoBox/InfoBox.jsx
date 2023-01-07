import "./InfoBox.css";
import topImageDayNumber from "../../utilities/DayDateFunction/DayDateFunction";

export default function InfoBox({indexForDisplay, infoMoonPhase}){  

    const dateFromDay = (xday) => {
        var yyyycusp = topImageDayNumber - 92 + 365 // between years..
        let fromDate = {};
        if (xday > yyyycusp) {
            fromDate = new Date(2022, 0);
        } else {
            fromDate = new Date(2023, 0);
        }
        let dayDate = new Date(fromDate.setDate(xday));
        return dayDate.toDateString();
    };

    return(
        <div className="info-box-container">
            {dateFromDay(indexForDisplay)}
            <br/>
            {infoMoonPhase}
            
        </div>
    )
}


