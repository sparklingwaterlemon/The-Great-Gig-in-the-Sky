import "./App.css";
import { useState, useEffect } from "react";

import PreloadImages from "../../utilities/PreLoadImages/PreLoadImages";
import MoonComponent from "../../pcomponents2/MoonComponent/MoonComponent";
import BackgroundComponent from "../../pcomponents2/BackgroundComponent/BackgroundComponent";
import DisplayBoxComponent from "../../pcomponents2/DisplayBoxComponent/DisplayBoxComponent";

// import ConstructionDisplay from "../../utilities/ConstructionDisplay/ConstructionDisplay";
// import AboutButton from "../../utilities/AboutButton/AboutButton";
import PostScroll from "../../utilities/PostScroll/PostScroll";




export default function App(){
    useEffect(()=>{
        PreloadImages();
    },[]);

    const [indexForDisplay, setIndexForDisplay] = useState();
    const [infoMoonPhase, setInfoMoonPhase] = useState("na");

   
 

    return (
        <>
        <section id="section-m">
            <MoonComponent setIndexForDisplay={setIndexForDisplay} setInfoMoonPhase={setInfoMoonPhase}/>
            <BackgroundComponent />
            <DisplayBoxComponent indexForDisplay={indexForDisplay} infoMoonPhase={infoMoonPhase}/>

            {/* <ConstructionDisplay /> */}
            {/* <AboutButton /> */}
        </section>
        
        <PostScroll />
        </>
    )
};