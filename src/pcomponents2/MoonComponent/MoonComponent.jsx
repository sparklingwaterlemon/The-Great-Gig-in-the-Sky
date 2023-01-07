import "./MoonComponent.css";
import { useRef, useEffect, useState } from "react";
import MOONIMAGES from "../../assets/MOONIMAGES/0000index";
import topImageDayNumber from "../../utilities/DayDateFunction/DayDateFunction";


export default function MoonComponent({setIndexForDisplay, setInfoMoonPhase}){
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
        var neg = topImageDayNumber - index; // ie. top image day number in january and we scroll to last year.. we will get a negative index value
        let tag = 0;
        if(neg <= 0){
            var top = topImageDayNumber + 365; // if between years
            tag = top - index
        } else if(neg > 0){
            tag = topImageDayNumber - index;
        };
        infoUpdateForInfoBox(tag);
        return MOONIMAGES[tag].imgRef;
    };

    // passing variable to calculate moonphase/ current image date to DisplayBoxComponent -> InfoBox
    const infoUpdateForInfoBox=(tag)=>{
        setIndexForDisplay(tag);
        let postring = MOONIMAGES[tag].position;
        setInfoMoonPhase(postring);
    };


    // // ------ IMAGE RENDERING FUNCTIONS ------
    var holderImage = new Image();
    const [image, setImage] = useState(holderImage);
    const maxScrollHeightRef = useRef(0);

    
    // -- useEffect to set newImage depending on scroll Fraction
    useEffect(() => {
        var html = document.documentElement;
        maxScrollHeightRef.current = html.scrollHeight - html.clientHeight; // total Scroll Distance
        var msh = maxScrollHeightRef.current;
        var scrollFraction = (currentYLocation / msh);
        const frameIndex = Math.floor(scrollFraction * frameCount);

        const updateMoon = new Image();
        updateMoon.src = currentFrame(frameIndex);
        updateMoon.onload = () => setImage(updateMoon);
        
        // // // use to debug/ test incorrect frame rate/ index
        // console.log("************************* ---currentYLocation", currentYLocation);
        // console.log("---maxscrollHeight----", maxScrollHeight);
        // console.log("---scrollFraction----", scrollFraction);
        // console.log("---scrollFraction * framecount----", scrollFraction * frameCount);
        // console.log("---frameIndex---", frameIndex);

        // eslint-disable-next-line
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

    // another prescroll for heroku....
    useEffect(()=>{
            window.scroll({
                top: 0,
                left: 0,
            });
            console.log("MC --- Top Out");
            window.scroll({
                top: maxScrollHeightRef.current,
                left: 0,
            });
            console.log("MC --- Bottom Out");
    },[]);



    return(
        <canvas className="m-canvas" ref={canvasRef}/>
    )
};


//     <button className="reset-button" onClick={resetWeatherData}> Show Moon </button>
//     </>
//   );
// }
