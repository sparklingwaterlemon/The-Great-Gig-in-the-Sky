import "./App.css";
import { useState } from "react";

import PreloadImagesFunc from "../../utilities/PreLoadImagesFunc/PreLoadImagesFunc";
import MoonComponent from "../../pcomponents2/MoonComponent/MoonComponent";
import BackgroundComponent from "../../pcomponents2/BackgroundComponent/BackgroundComponent";
import DisplayBoxComponent from "../../pcomponents2/DisplayBoxComponent/DisplayBoxComponent";
// import ConstructionDisplay from "../../utilities/ConstructionDisplay/ConstructionDisplay";
// import AboutButton from "../../utilities/AboutButton/AboutButton";
import SettingScrollFunc from "../../utilities/SettingScrollFunc/SettingScrollFunc";
import SpikingScrollFunc from "../../utilities/SpikingScrollFunc/SpikingScrollFunc";




export default function App(){

    // setting in MoonComponent, passing down to InfoBox thru DisplayBoxComponent
    const [indexForDisplay, setIndexForDisplay] = useState();
    const [infoMoonPhase, setInfoMoonPhase] = useState("na");


    return (
        <>
        <PreloadImagesFunc />
            <section id="section-m">
                <MoonComponent setIndexForDisplay={setIndexForDisplay} setInfoMoonPhase={setInfoMoonPhase}/>
                <BackgroundComponent />
                <DisplayBoxComponent indexForDisplay={indexForDisplay} infoMoonPhase={infoMoonPhase}/>
                {/* <ConstructionDisplay /> */}
                {/* <AboutButton /> */}
                <SettingScrollFunc />
            </section>
        <SpikingScrollFunc />
        </>
    )
};