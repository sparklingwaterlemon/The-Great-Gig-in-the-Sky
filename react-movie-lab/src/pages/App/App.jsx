import './App.css';
import {useContext, useState, useEffect, useRef } from "react"


function App() {




  // Handle Scroll Event
  // Handle Scroll Event
  // Handle Scroll Event
  // Handle Scroll Event
  // Handle Scroll Event
  // Handle Scroll Event

  // const [offsetY, setOffsetY]= useState(0);


  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // useEffect(()=>{
  //   window.addEventListener("scroll", handleScroll)
  //   return () => window.removeEventListener("scroll", handleScroll);
  // },[]);

  // Handle Scroll Event
  // Handle Scroll Event
  // Handle Scroll Event
  // Handle Scroll Event
  // Handle Scroll Event
  // Handle Scroll Event

  const [scrollingElement, setScrollingElement] = useState(0);
  // const ScrollContext = createContext({
  //     scrollingElement: null,
  // });

  // const { scrollingElement } = useContext(ScrollContext);
  // const handleScroll = (e) => {
  //   setScrollingElement(e.target)
  //   console.log(e.target)
  //   console.log("-----test")
  // }

  // useEffect(() => {
  //   if (scrollingElement) {
  //     scrollingElement.addEventListener('scroll', handleScroll);
      
  //     setScrollingElement(scrollingElement);
  //   }
  //  })
  // Handle Scroll Event
  // Handle Scroll Event
  // Handle Scroll Event


  const [image, setImage] = useState(null)
  const canvasRef = useRef(null)
  const canvas = canvasRef.current

  const currentFrame = function(index){
    return `https://www.apple.com/105/media/us/airpods-pro/2019/1299e2f5_9206_4470_b28e_08307a42f19b/anim/sequence/large/01-hero-lightpass/${index.toString().padStart(4, '0')}.jpg`
  }



  useEffect(() => {
    const airPodImage = new Image();
    airPodImage.src = currentFrame(1)
    airPodImage.onload = () => setImage(airPodImage)
    console.log("useEffect onload")   
    console.log(airPodImage.height)
  }, [])

  useEffect(() => {
    if(image){
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
