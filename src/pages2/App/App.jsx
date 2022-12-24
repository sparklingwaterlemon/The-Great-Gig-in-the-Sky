import "./App.css";
import { useEffect } from "react";

import AboutButton from "../../utilities/AboutButton/AboutButton";
import MoonComponent from "../../pcomponents2/MoonComponent/MoonComponent";
import ConstructionDisplay from "../../utilities/ConstructionDisplay/ConstructionDisplay";

import topImageDayNumber from "../../utilities/DayDateFunction/DayDateFunction";
import MOONIMAGES from "../../assets/MOONIMAGES/0000index";



export default function App(){
    // frameCount = how many image stills we want to render total
    // - passing it down to MoonComponent, but also using in this component for preloadImages()
    const frameCount = 91;

    // on intial load - window will scroll down
    useEffect(()=>{
        window.scroll({
            top: 1099.34, // maxHeight(/totalFrameCount * 30.5 (30 images above)
            left: 0,
            behavior: "smooth",
        })
    },[]);


    // on intial load - preloading the images
    const preloadFrame = (frame) => {
        let preimg = new Image();
        preimg.src = MOONIMAGES[frame].imgRef
    };

    // -- function to preoload images/ cache
    const preloadImages = () => {
        for(let i = 1 ; i <= frameCount ; i++){
            var precheck = topImageDayNumber - i;

            if(precheck > 0){
                console.log(i);
                preloadFrame(topImageDayNumber - i)
                console.log("topImageDayNumber - i", topImageDayNumber - i);
            } else if(precheck <= 0){
                var preTop = topImageDayNumber + 365;
                console.log(i);
                preloadFrame(preTop - i);
                console.log("pretop.minus.i", preTop-i)
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