import {useState, useEffect, useRef } from "react";
import IMAGES from "../airpods-test";
import MOONIMAGES from "../all-Moon";


function ParallaxEffect() {

  // // Scroll Height / Scroll Length

  // // https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript

  // // if I need this later on
  // var body = document.body;
  // // <body> <main> <div> </div> </main> </body>
  
  // // getting the maximum height -- fix later if i want to add a sticky bottom scroll area
  // var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  // // update - for max scrolling height used scrollheight - clientheight

  // // Console.log to see page dimensions
  // useEffect(() => {
  // console.log("---body.scrollheight----")
  // console.log(body.scrollHeight)
  // console.log("---body.offsetheight----")
  // console.log(body.offsetHeight)
  // console.log("---html.clientHeight----")
  // console.log(html.clientHeight)
  // console.log("---html.scrollHeight----")
  // console.log(html.scrollHeight)
  // console.log("---html.offsetHeight----")
  // console.log(html.offsetHeight)
  // console.log("----max height of page-----")
  // console.log(height)
  // }, [])


  // Variables
  // for Scroll Height
  var html = document.documentElement; // <html> <head></head> <body></body> </html>
  const maxScrollHeight = html.scrollHeight - html.clientHeight;

  const [scrollPosition, setScrollPosition] = useState(0); // for Scroll Position
  const [image, setImage] = useState(null); // for Image
  const canvasRef = useRef(null);

  // link value changes --->
  const currentFrame = function(index){
    return MOONIMAGES[index]
  }; // change to local src/public directory? // return import "./public/image"??

  const frameCount = 366; // total frameCount of airpod image


  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  // useEffect
  // Event Listener Scroll - uses const handleScroll to set current Scroll position
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, {passive: true});
    // Removing Event Listener / prevent memory leak
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]); // [scrollPosition]//run again at scrollPosition? // do I need it an parameter here?
  // passive - https://stackoverflow.com/questions/37721782/what-are-passive-event-listeners


  // useEffect
  // (useState) - Setting new Image
  useEffect(() => {
    let scrollFraction = (scrollPosition / maxScrollHeight); // uses scrollFraction to figure out what part of image you should be on
    const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount))
    

    // to debug incorrect frame index
    console.log("--------")
    console.log("scrollPosition")
    console.log(scrollPosition)
    console.log("---maxscrollHeight----")
    console.log(maxScrollHeight)
    console.log("---scrollFraction----")
    console.log(scrollFraction)
    console.log("---scrollFraction * framecount----")
    console.log(scrollFraction * frameCount)
    console.log("frameCount - 1")
    console.log(frameCount - 1)
    console.log("frame Index")
    console.log(frameIndex)

    const airPodImage = new Image();
    airPodImage.src = currentFrame(frameIndex + 1);
    // console.log(airPodImage.src)
    airPodImage.onload = () => setImage(airPodImage); // setImage useState declared above
  }, [scrollPosition])

  
  // useEffect
  // "canvas - drawImage" "drawing" current useState image onto page
  useEffect(() => {
    if(image){
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      context.drawImage(image, 0, 0, canvas.width, canvas.height) // dimensions
    }
  }, [scrollPosition])





  return (
    <>
    <div>
      <canvas 
        ref={canvasRef}
        width="450"
        height="450"
        className="scrolling-test"
      />
    </div>
    </>
  );
}

export default ParallaxEffect;
