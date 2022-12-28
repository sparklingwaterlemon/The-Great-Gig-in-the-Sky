import "./TestChildOne.css";
import DayDateFunction from "../../utilities/DayDateFunction/DayDateFunction";

export default function TestChildOne(){

    return(
        <section id="test-child-one">
            <h2>{DayDateFunction.currentDayNumber}</h2>
            {DayDateFunction.topImageDayNumber}
        </section>
    )
}