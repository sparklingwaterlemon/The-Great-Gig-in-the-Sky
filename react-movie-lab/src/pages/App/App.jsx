import './App.css';
import {useContext, useState, useEffect, useRef } from "react"


function App() {

  

  
  // SCROLL EFFECT EVENT V.1 ---- CAN BE BETTER
   // SCROLL EFFECT EVENT V.1 ---- CAN BE BETTER
    // SCROLL EFFECT EVENT V.1 ---- CAN BE BETTER
     // SCROLL EFFECT EVENT V.1 ---- CAN BE BETTER
      // SCROLL EFFECT EVENT V.1 ---- CAN BE BETTER

  // const [scrollYposition, setScrollYposition] = useState(0);
  // const maxScrollHeight = 1379;
        

  // useEffect(() => {
  //   const updatePosition = () =>{
  //     setScrollYposition(window.scrollY)
  //   };
  //   window.addEventListener("scroll", updatePosition);

  //   // removeEventListener added to prevent memory leak
  //   return () => {window.removeEventListener("scroll", updatePosition)
  //   console.log(scrollYposition)};
  // }, [scrollYposition])
  // CHANGE TO [ IMAGE] ???? LATER 

        // SCROLL EFFECT EVENT V.1 ---- CAN BE BETTER
      // SCROLL EFFECT EVENT V.1 ---- CAN BE BETTER
    // SCROLL EFFECT EVENT V.1 ---- CAN BE BETTER
  // SCROLL EFFECT EVENT V.1 ---- CAN BE BETTER



  const [scrollPosition, setScrollPosition] = useState(0);
  const maxScrollHeight = 1505;

  const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
  };

  useEffect(() => {
      // passive vs active listener???
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, [scrollPosition]);
  // CHANGE ARRAY TO [IMAGE]??



  

  


  const [image, setImage] = useState(null)
  const canvasRef = useRef(null)


  // return import "./public/image"??
  const currentFrame = function(index){
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
  }

  // 145 still images
  const totalFrameCount = 145;


  useEffect(() => {
    const airPodImage = new Image();
    airPodImage.src = currentFrame(1);
    airPodImage.onload = () => setImage(airPodImage); 
  }, [])

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
