import './App.css';
import {useContext, useState, useEffect, useRef } from "react"


function App() {


  // https://stackoverflow.com/questions/1145850/how-to-get-height-of-entire-document-with-javascript
  var html = document.documentElement;
  // <html>
  //   <head>
  //   </head>
  //   <body>
  //   </body>
  // </html>
  var body = document.body;
  // <body>
  //   <main>
  //     <div>
  //     </div>
  //   </main>
  // </body>

  console.log("---body.scrollheight----")
  console.log(body.scrollHeight)
  console.log("---body.offsetheight----")
  console.log(body.offsetHeight)
  console.log("---html.clientHeight----")
  console.log(html.clientHeight)
  console.log("---html.scrollHeight----")
  console.log(html.scrollHeight)
  console.log("---html.offsetHeight----")
  console.log(html.offsetHeight)

  // getting the maximum height -- fix later if i want to add a sticky bottom scroll area
  var height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
  console.log("---------")
  console.log(height)

  const [scrollPosition, setScrollPosition] = useState(0);
  const maxScrollHeight = height;

  // Scroll Fraction with give value between 0 and 1 to use for image
  let scrollFraction = scrollPosition / maxScrollHeight
  // console.log(scrollPosition)
  // console.log(scrollFraction)


  const [image, setImage] = useState(null)
  const canvasRef = useRef(null)

  // return import "./public/image"??
  const currentFrame = function(index){
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
  }

  // 145 still images
  const frameCount = 145;






  const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
  };

  useEffect(() => {
      // passive ?? https://stackoverflow.com/questions/37721782/what-are-passive-event-listeners
      window.addEventListener('scroll', handleScroll, {passive: true});
      // remove memory leak
      return () => {
        window.removeEventListener('scroll', handleScroll);
      }
  }, [scrollPosition]);
  // CHANGE ARRAY TO [IMAGE]??



  // image changer
  useEffect(() => {
      console.log("--------")
      let scrollFraction = scrollPosition / maxScrollHeight
      const frameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount))
      console.log("scrollPosition")
      console.log(scrollPosition)
      console.log("frame Index")
      console.log(frameIndex)

      const airPodImage = new Image();
      airPodImage.src = currentFrame(frameIndex + 1);
      airPodImage.onload = () => setImage(airPodImage); 
  }, [scrollPosition])


  




  useEffect(() => {
    if(image){
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      context.drawImage(image, 0, 0, canvas.width, canvas.height)
    }
  }, [image])


  return (
    <>
    <div className="App">
        <canvas 
          ref={canvasRef}
          width="1158"
          height="770"
          className="scrolling-test"
        />
      </div>

    </>
  );
}

export default App;
