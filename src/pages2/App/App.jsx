import "./App.css";
import { useEffect } from "react";

import AboutButton from "../../utilities/AboutButton/AboutButton";
import MoonComponent from "../../pcomponents2/MoonComponent/MoonComponent";


export default function App(){
    // on intial load - window will scroll down
    useEffect(()=>{
        window.scroll({
            top: 1099.34, // maxHeight/totalFrameCount * 30.5 (30 images above)
            left: 0,
            behavior: "smooth",
        })
    },[]);

    return (
        <section id="section-moon-landing">
            <AboutButton />
            <MoonComponent />
            <h1>Hellooo App2</h1>
            <span className="tb">bottom position -2000px</span>
            <span className="tm">middle position -1000px</span>
        </section>
    )
};