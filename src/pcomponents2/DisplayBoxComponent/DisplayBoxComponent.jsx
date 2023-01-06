import "./DisplayBoxComponent.css";
import TestChildTwo from "../../pages/TestChildTwo/TestChildTwo";

import InfoBox from "../InfoBox/InfoBox";

import { useState } from "react";


export default function DisplayBoxComponent({indexForDisplay}){
    const [testAB, setTestAB] = useState(false);
   

    return(

        <div className="display-box-container">
            <button className="display-button" onClick={() => setTestAB(!testAB)} />
            {testAB ? <TestChildTwo /> : <InfoBox indexForDisplay={indexForDisplay}/>}
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