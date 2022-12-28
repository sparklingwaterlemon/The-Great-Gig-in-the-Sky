import "./App.css";
import { useEffect } from "react";

import MoonComponent from "../../pcomponents2/MoonComponent/MoonComponent";
import ConstructionDisplay from "../../utilities/ConstructionDisplay/ConstructionDisplay";
import PreloadImages from "../../utilities/PreLoadImages/PreLoadImages";
// import AboutButton from "../../utilities/AboutButton/AboutButton";



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

            <div className="construction">
                <ConstructionDisplay />
            </div>

            {/* <AboutButton /> */}
        </section>
    )
};