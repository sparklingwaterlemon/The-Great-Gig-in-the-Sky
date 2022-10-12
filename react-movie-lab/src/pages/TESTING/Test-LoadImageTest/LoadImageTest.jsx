// import {useState, useEffect, useRef } from "react";
import "./LoadImageTest.css";
import IMAGES from "../airpods-test";



function LoadImageTest() {

    console.log("---require image ----")


    function test1(index){
        let test = IMAGES[index]
        console.log(test)
        
    }

    test1(14)

  
    // const frameCount = 14; 

   
  

    // const image = testImage;

    // const airPodImage = new Image();
    // airPodImage.src = testImage
    // console.log("----airPodImage.src----")
    // console.log(airPodImage.src)

    

    // const canvasRef = useRef(null);
    // useEffect(() => {
    //     if(image){
    //         const canvas = canvasRef.current
    //         const context = canvas.getContext('2d')
    //         context.drawImage(airPodImage, 0, 0, canvas.width, canvas.height) // dimensions
    //     }
    // }, [])

  return (
    <>
    <h1> Load Image Test </h1>
    <div>
      {/* <canvas 
        ref={canvasRef}
        width="1158"
        height="770"
        className="scrolling-test"
      /> */}
    </div>
    </>
  );
}

export default LoadImageTest;



//   // link value changes --->
//   const currentFrame = function(index){
//     return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
//   }; // change to local src/public directory? // return import "./public/image"??






