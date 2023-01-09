import "./LandingPage.css";
import { useState } from "react";

import PreLoadImagesFunc from "../../utilities/PreLoadImagesFunc/PreLoadImagesFunc";
import MoonComponent from "../../pcomponents2/MoonComponent/MoonComponent";
// import BackgroundComponent from "../../pcomponents2/BackgroundComponent/BackgroundComponent";
import DisplayBoxComponent from "../../pcomponents2/DisplayBoxComponent/DisplayBoxComponent";
// import ConstructionDisplay from "../../utilities/ConstructionDisplay/ConstructionDisplay";
// import AboutButton from "../../utilities/AboutButton/AboutButton";
import SettingScrollFunc from "../../utilities/SettingScrollFunc/SettingScrollFunc";
import SpikingScrollFunc from "../../utilities/SpikingScrollFunc/SpikingScrollFunc";




export default function LandingPage(){

    // setting in MoonComponent, passing down to InfoBox thru DisplayBoxComponent
    const [indexForDate, setIndexForDate] = useState();
    const [currMoonPhase, setCurrMoonPhase] = useState("na");


    return (
        <>
        <PreLoadImagesFunc />
            <section id="section-moon">
                {/* <BackgroundComponent /> */}
                    <div className="leftside-moon">
                        <MoonComponent setIndexForDate={setIndexForDate} setCurrMoonPhase={setCurrMoonPhase}/>
                    </div>
                    <div className="rightside-info">
                        <DisplayBoxComponent indexForDate={indexForDate} currMoonPhase={currMoonPhase}/>
                    </div>
                {/* <ConstructionDisplay /> */}
                {/* <AboutButton /> */}
            </section>
        <SettingScrollFunc />
        <SpikingScrollFunc />
        </>
    )
};