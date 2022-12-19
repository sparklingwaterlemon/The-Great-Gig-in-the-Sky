import "./App2.css";
import { useEffect } from "react";


export default function App2(){

    useEffect(()=>{
        window.scroll({
            top: 700,
            left: 0,
            behavior: "smooth",
        })
    },[]);

    return (
        <section id="section-moon-landing">
            <h1>Hellooo App2</h1>
            <span className="tb">bottom position -2000px</span>
            <span className="tm">middle position -1000px</span>
        </section>
    )
};