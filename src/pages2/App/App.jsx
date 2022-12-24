import "./App.css";
import { useEffect } from "react";

import AboutButton from "../../utilities/AboutButton/AboutButton";
import MoonComponent from "../../pcomponents2/MoonComponent/MoonComponent";
import ConstructionDisplay from "../../utilities/ConstructionDisplay/ConstructionDisplay";
import TestChildTwo from "../../pages/TestChildTwo/TestChildTwo";

import topImageDayNumber from "../../utilities/DayDateFunction/DayDateFunction";
import MOONIMAGES from "../../assets/MOONIMAGES/0000index";



export default function App(){
    // frameCount = how many image stills we want to render total
    // - passing it down to MoonComponent, but also using in this component for preloadImages()
    const frameCount = 91;

    // // INITIAL WINDOW SCROLL DOWN ON LOAD
    useEffect(()=>{
        window.scroll({
            top: 1099.34, // maxHeight/totalFrameCount * 30.5 // rendering 91 images - 30 images on top are future (see utilites/DayDateFunction)
            left: 0,
            behavior: "smooth",
        })
    },[]);

    // // IMAGE PRELOAD
    // -- (2) preloading the images
    const preloadFrame = (frame) => {
        let preimg = new Image();
        preimg.src = MOONIMAGES[frame].imgRef
        preimg.onload = function() {
            console.log("preimg.onload good")
        };
    }
    // -- (1) calling function to preoload images/ cache
    const preloadImages = () => {
        for(let i = 1 ; i <= frameCount ; i++){
            var precheck = topImageDayNumber - i;
            if(precheck > 0){
                preloadFrame(topImageDayNumber - i)
            } else if(precheck <= 0){
                var preTop = topImageDayNumber + 365;
                preloadFrame(preTop - i)
            }
        }
    };
    preloadImages();
    

    return (
        <section id="section-landing-page">
            <AboutButton />
            <MoonComponent frameCount={frameCount}/>

            {/* <div className="construction">
                <ConstructionDisplay />
            </div> */}

        </section>
    )
};