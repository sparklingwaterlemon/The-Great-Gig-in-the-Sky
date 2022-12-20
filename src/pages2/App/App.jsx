import "./App.css";
import { useEffect } from "react";


import MoonComponent from "../../pcomponents2/MoonComponent/MoonComponent";


export default function App(){
    // window to scroll to location
    useEffect(()=>{
        window.scroll({
            top: 700,
            left: 0,
            behavior: "smooth",
        })
    },[]);

    return (
        <section id="section-moon-landing">
            <MoonComponent />
            <h1>Hellooo App2</h1>
            <span className="tb">bottom position -2000px</span>
            <span className="tm">middle position -1000px</span>
        </section>
    )
};