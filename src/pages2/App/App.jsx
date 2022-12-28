import "./App.css";
import { useEffect } from "react";

// import AboutButton from "../../utilities/AboutButton/AboutButton";
import MoonComponent from "../../pcomponents2/MoonComponent/MoonComponent";
import ConstructionDisplay from "../../utilities/ConstructionDisplay/ConstructionDisplay";
import PreloadImages from "../../utilities/PreLoadImages/PreLoadImages";


// import topImageDayNumber from "../../utilities/DayDateFunction/DayDateFunction";
// import MOONIMAGES from "../../assets/MOONIMAGES/0000index";

// import TestChildOne from "../../pages/TestChildOne/TestChildOne";

export default function App(){
    PreloadImages();   
    
    useEffect(()=>{
        window.scroll({
            top: 1435,
            left: 0,
            behavior: "smooth",
        });
    },[]);

    return (
        <section id="section-m">
            <div className="m-b-container">
                <img className="m-b-image" src={require("../../assets/space/m8.jpeg")} alt="background"/>
            </div>
            <MoonComponent />

            {/* <TestChildOne /> */}
            <div className="construction">
                <ConstructionDisplay />
            </div>

            {/* <AboutButton /> */}
        </section>
    )
};