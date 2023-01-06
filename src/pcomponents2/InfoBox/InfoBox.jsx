import "./InfoBox.css";

export default function InfoBox({indexForDisplay}){
    const dateFromDay = (xday) => {
        var fromDate = new Date(2023, 0);
        var dayDate = new Date(fromDate.setDate(xday));
        return dayDate.toString();
    };

    return(
        <div className="info-box-container">
            <h1> {dateFromDay(indexForDisplay)} </h1>
        </div>
    )
}


