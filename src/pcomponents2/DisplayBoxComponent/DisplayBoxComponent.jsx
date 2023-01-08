import "./DisplayBoxComponent.css";
import TestChildTwo from "../TestChildComponents/TestChildTwo/TestChildTwo";
import DateAndMoonPhase from "../DateAndMoonPhase/DateAndMoonPhase";

import { useState } from "react";


export default function DisplayBoxComponent({indexForDate, currMoonPhase}){
    const [testAB, setTestAB] = useState(false);

    return(
        <div className="display-box-container">
            <button className="display-button" onClick={() => setTestAB(!testAB)} />
            {testAB ? <TestChildTwo /> : <DateAndMoonPhase indexForDate={indexForDate} currMoonPhase={currMoonPhase}/>}
        </div>
    )
}


// import "./DateCard.css"
// import 'animate.css'; 
// import { useEffect, useState } from "react";

// export default function DateCard({displayDate, curMoonPhase}){
//     const [ animation, setAnimation] = useState(null);
    
//     useEffect(() => {
//         if(curMoonPhase !== "Full Moon"){
//             setAnimation(null)
//         } else if(curMoonPhase === "Full Moon"){
//             setAnimation("animate__animated animate__tada")
//         }        
//     }, [curMoonPhase])
    

//     return(
//         <div className="date-card-container"> 
//             <span id="display-date">
//                 {displayDate}
//             </span>
//             <span id="display-moon-phase" className={animation}> {curMoonPhase} </span>
//         </div>
//     )
// }