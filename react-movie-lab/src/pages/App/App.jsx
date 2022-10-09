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

  useEffect(() => {
    const catImage = new Image();
    catImage.src = "https://thiscatdoesnotexist.com/"
    catImage.onload = () => setImage(catImage)
    console.log("useEffect onload")   
  }, [])

  useEffect(() => {
    if(image){
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')
      // context.fillStyle = "black"
      // context.fillRect(0,0,1000,10000)
      context.drawImage(image, 0, 0, canvas.width, canvas.height)
    }
  }, [image])


  return (
    <>
    <div className="App">
      <h1> testing </h1>
      
      <div>
        <canvas 
          ref={canvasRef}
          width={512}
          height={512}
          className="scrolling-test"
        />
      </div>

    </div>
    </>
  );
}

export default App;
