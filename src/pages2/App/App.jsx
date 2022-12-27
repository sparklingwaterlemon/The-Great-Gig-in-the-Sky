import "./App.css";
import { useEffect } from "react";

// import AboutButton from "../../utilities/AboutButton/AboutButton";
import MoonComponent from "../../pcomponents2/MoonComponent/MoonComponent";
import ConstructionDisplay from "../../utilities/ConstructionDisplay/ConstructionDisplay";


import topImageDayNumber from "../../utilities/DayDateFunction/DayDateFunction";
import MOONIMAGES from "../../assets/MOONIMAGES/0000index";



export default function App(){
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
        for(let i = 1 ; i <= 91 ; i++){ // 91 is the frameCount, can be found in MoonComponent..
            // kept frameCount in MoonComponent for a useEffect (located in MoonComponent) - missing dependency error
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
        <section id="section-m">
            
            <MoonComponent />




            {/* <AboutButton /> */}
            <div className="construction">
                <ConstructionDisplay />
            </div>

        </section>
    )
};