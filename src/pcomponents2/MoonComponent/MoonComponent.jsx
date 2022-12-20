import "./MoonComponent.css";
// import MOONIMAGES from "../../assets/MOONIMAGES/0000index";
// import {useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

import { useRef } from "react";

export default function MoonComponent(){
    const canvasRef = useRef(null);

    return(
        <div className="moon-component">
            <canvas ref={canvasRef}/>
        </div>
    )
};



// function MoonLandingPage({setChangeDDIndex, displayDate, todayStringDate, weatherData, setWeatherData, curMoonPhase}) {
//   // --------- Variables --------->
//   // Scroll Variables
//   var html = document.documentElement; // <html> <head></head> <body></body> </html>
//   var maxScrollHeight = html.scrollHeight - html.clientHeight;

//   // Initializing Intial Image to MOONIMAGES[ with today's index].imgRef
//   let initialImage = new Image();
//   initialImage.src = MOONIMAGES[todayStringDate].imgRef 

//   // useState Variables
//   const [scrollPosition, setScrollPosition] = useState(0); // for Scroll Position
//   const [image, setImage] = useState(initialImage)
  

//   // CanvasRef
//   const canvasRef = useRef(null);
  
//   // Frame Variables
//   const currentFrame = function(index){
//     setChangeDDIndex(index) // goes to App.js
//     return MOONIMAGES[todayStringDate - index].imgRef
//   };
//   // How many frames do we want to display? Total Frame Count
//   const frameCount = 10;



//   // --------- Functions --------->
//   // Handles Scroll Position Change
//   const handleScroll = () => {
//     const position = window.scrollY;
//     setScrollPosition(position);
//   };

//   // useEffect
//   // Sets New Scroll Position
//   useEffect(() => {
//     window.addEventListener('scroll', handleScroll, {passive: true});
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [scrollPosition]);

//   // useEffect
//   // Handles New Image Change - Loads
//   useEffect(() => {
//     let scrollFraction = (scrollPosition / maxScrollHeight); // uses scrollFraction to figure out what part of image you should be on
//     const frameIndex = Math.floor(scrollFraction * frameCount);

//     const moonImage = new Image();
//     moonImage.src = currentFrame(frameIndex);
//     moonImage.onload = () => setImage(moonImage);
       
//     // // use to debug incorrect frame rate/ index
//     // console.log("--------")
//     // console.log("scrollPosition")
//     // console.log(scrollPosition)
//     // console.log("---maxscrollHeight----")
//     // console.log(maxScrollHeight)
//     // console.log("---scrollFraction----")
//     // console.log(scrollFraction)
//     // console.log("---scrollFraction * framecount----")
//     // console.log(scrollFraction * frameCount)
//     // console.log("frame Index")
//     // console.log(frameIndex)  
//   }, [scrollPosition])

  
//   // useEffect
//   // Draws - Renders - New Image
//   useEffect(() => {
//     const canvas = canvasRef.current
//     const context = canvas.getContext('2d')
    
//     context.drawImage(image, 0, 0, canvas.width, canvas.height) // adjusted the size in CSS
//   }, [image])


//   function resetWeatherData(){
//     setWeatherData({});
//     console.log(weatherData);
//   }

//   // --------- return --------->
//   return(
//     <>
//     <div className="canvas-container">
//       <canvas 
//         ref={canvasRef}
//         width="730"
//         height="730"
//         className="scrolling-test"
//       />
//     </div>
//     <SearchBar setWeatherData={setWeatherData} />
//     <InfoDisplayComponent displayDate={displayDate} weatherData={weatherData} curMoonPhase={curMoonPhase}/>
//     <button className="about-button">
//       <Link to="/about" className="about-link"> 
//         <span className="letter-0">&nbsp;</span>
//         <span className="letter-00">&nbsp;</span>
//         <span className="letter-a">&nbsp;A</span>
//         <span className="letter-b">B</span>
//         <span className="letter-o">O</span>
//         <span className="letter-u">U</span>
//         <span className="letter-t">T&nbsp;&nbsp;</span>
//         <span className="letter-99">&nbsp;</span>
//         <span className="letter-9">&nbsp;</span>
//       </Link>
//     </button>

//     <button className="reset-button" onClick={resetWeatherData}> Show Moon </button>
//     </>
//   );
// }

// export default MoonLandingPage;
