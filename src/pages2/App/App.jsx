import "./App.css";
// import { useEffect } from "react";
import MOONIMAGES from "../../assets/MOONIMAGES/0000index";


import PreloadImages from "../../utilities/PreLoadImages/PreLoadImages";
import MoonComponent from "../../pcomponents2/MoonComponent/MoonComponent";
import BackgroundComponent from "../../pcomponents2/BackgroundComponent/BackgroundComponent";
import ConstructionDisplay from "../../utilities/ConstructionDisplay/ConstructionDisplay";
// import AboutButton from "../../utilities/AboutButton/AboutButton";
import PostScroll from "../../utilities/PostScroll/PostScroll";




export default function App(){
    PreloadImages();
    console.log("App JSX - post preloadImages()")

    return (
        <>
        <section id="section-m">
            <MoonComponent />
            <BackgroundComponent />

            <ConstructionDisplay />
            {/* <AboutButton /> */}
        </section>
        <PostScroll />
        </>
    )
};