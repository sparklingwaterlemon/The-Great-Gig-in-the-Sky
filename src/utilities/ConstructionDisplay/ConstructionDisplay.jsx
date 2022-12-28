import "./ConstructionDisplay.css";
import { useEffect } from "react";

export default function ConstructionDisplay(){
    let text = document.lastModified;

    useEffect(()=>{
        var h = document.documentElement;
        var msh = h.scrollHeight - h.clientHeight;
        var sft = (msh/ 91) * 30.5; // 91 is the frame count // 30.5 is the 30th frame
        var sft2 = Number(sft.toFixed(2));
        window.scroll({
            top: sft2,
            left: 0,
            behavior: "smooth",
        });
        console.log("RESTINGGG");
    },[]);


    return(
        <div className="c-border">
            <div className="c-container">
                <span className="c-header">UNDER re-CONSTRUCTION</span>
                <span className="c-date">LAST MODIFIED ON <strong>{text}</strong></span>
                feel free to scroll
                - recent update: background image
                <br/>
                <a href="https://github.com/sparklingwaterlemon/The-Great-Gig-in-the-Sky" target="_blank" rel="noreferrer">github</a>
            </div>
        </div>
    )
}