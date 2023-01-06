import "./App.css";
// import { useEffect } from "react";


import PreloadImages from "../../utilities/PreLoadImages/PreLoadImages";
import MoonComponent from "../../pcomponents2/MoonComponent/MoonComponent";
import BackgroundComponent from "../../pcomponents2/BackgroundComponent/BackgroundComponent";
import DisplayBoxComponent from "../../pcomponents2/DisplayBoxComponent/DisplayBoxComponent";

import ConstructionDisplay from "../../utilities/ConstructionDisplay/ConstructionDisplay";
// import AboutButton from "../../utilities/AboutButton/AboutButton";
import PostScroll from "../../utilities/PostScroll/PostScroll";




export default function App(){
    PreloadImages();


    return (
        <>
        <section id="section-m">
            <MoonComponent />
            <BackgroundComponent />
            <DisplayBoxComponent />

            <ConstructionDisplay />
            {/* <AboutButton /> */}
        </section>
        
        <PostScroll />
        </>
    )
};