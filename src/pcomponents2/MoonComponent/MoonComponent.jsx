import "./MoonComponent.css";
import { useRef, useEffect, useState } from "react";
import MOONIMAGES from "../../assets/MOONIMAGES/0000index";
import topImageDayNumber from "../../utilities/DayDateFunction/DayDateFunction";


export default function MoonComponent(){
    // // ------ SCROLLING FUNCTIONS ------
    const [currentYLocation, setCurrentYLocation] = useState(null);
    // -- updates scroll location
    const handleScroll = () => {
        let scrollPosition = window.scrollY;
        setCurrentYLocation(scrollPosition);
    };
    // -- useEffect to update scroll location when scroll location changes
    useEffect(()=>{
        window.addEventListener("scroll", handleScroll, {passive: true});
        return () => window.removeEventListener("scroll", handleScroll);
    }, [currentYLocation]);


    // // ------ FRAME CALCULATIONS  ------
    // // ------ FUNCTIONS DETERMINING WHICH IMAGE TO "LOAD" DEPENDING ON SCROLL FRACTION  ------
    const frameCount = 91; 
    // -- function to determine which index to access in MOONIMAGES depending on the argument(which is changed by scroll location)
    const currentFrame = function(index) {
        var neg = topImageDayNumber - index;
        if(neg <= 0){
            var top = topImageDayNumber + 365; // if between years
            return MOONIMAGES[top - index].imgRef 
        } else if(neg > 0){
            return MOONIMAGES[topImageDayNumber - index].imgRef 
        };
        // setChangeDDIndex(index) // for info box
    };


    // // ------ IMAGE RENDERING FUNCTIONS ------
    var holderImage = new Image();
    holderImage.src = MOONIMAGES[0].imgRef;
    const [image, setImage] = useState(holderImage);

    // -- useEffect to set newImage depending on scroll Fraction
    useEffect(() => {
        let html = document.documentElement;
        let maxScrollHeight = html.scrollHeight - html.clientHeight; // total Scroll Distance
        let scrollFraction = (currentYLocation / maxScrollHeight);
        const frameIndex = Math.floor(scrollFraction * frameCount);

        const updateMoon = new Image();
        updateMoon.src = currentFrame(frameIndex);
        updateMoon.onload = () => setImage(updateMoon);
        
        // // use to debug/ test incorrect frame rate/ index
        // console.log("************************* ---currentYLocation", currentYLocation);
        // console.log("---maxscrollHeight----", maxScrollHeight);
        // console.log("---scrollFraction----", scrollFraction);
        // console.log("---scrollFraction * framecount----", scrollFraction * frameCount);
        // console.log("frame Index", frameIndex);
    }, [currentYLocation]);


    // -- useEffect to update to the new image when we declare a new image by setImage
    // -- canvasRef
    const canvasRef = useRef(null);
    useEffect(() => {
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
                
        canvas.width = 400;
        canvas.height = 400;
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
    },[image]);

    return(
        <canvas className="m-canvas" ref={canvasRef}/>
    )
};


//     <button className="reset-button" onClick={resetWeatherData}> Show Moon </button>
//     </>
//   );
// }
