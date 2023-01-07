import "./InfoBox.css";
import MOONIMAGES from "../../assets/MOONIMAGES/0000index";
import topImageDayNumber from "../../utilities/DayDateFunction/DayDateFunction";

export default function InfoBox({indexForDisplay}){

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
            {MOONIMAGES[indexForDisplay] ? "na" : MOONIMAGES[indexForDisplay].position}
        </div>
    )
}


