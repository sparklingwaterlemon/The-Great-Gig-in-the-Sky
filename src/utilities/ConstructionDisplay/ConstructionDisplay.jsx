import "./ConstructionDisplay.css";
// import { useEffect } from "react";

export default function ConstructionDisplay(){
    let text = document.lastModified;

    const scrollDown = () => {
        var h = document.documentElement;
        var msh = h.scrollHeight - h.clientHeight;
        var sft = (msh/ 91) * 30.5; // 91 is the frame count // 30.5 is the 30th frame
        var sft2 = Number(sft.toFixed(2));
        window.scroll({
            top: msh,
            left: 0,
        });
        console.log("button - top out");
        window.scroll({
            top: sft2,
            left: 0,
            behavior: "smooth"
        });
        console.log("button - to today");
    };


    return(

        <div className="construction-container">
            <div className="caution-border">
                <div className="c-signpost">
                    
                    <span className="c-header">UNDER re-CONSTRUCTION</span>
                    <span className="c-update">LAST MODIFIED ON {text}</span>
                    last update: fetched lon and lat coordinates from GeoAPI 
                    <br/> next: use fetched lon and lat data to use OpenWeatherAPI to fetch and render 
                    <br/> weather/astro data in one command chain
                    <br/>
                    <div className="c-links">
                        <a href="https://github.com/sparklingwaterlemon/The-Great-Gig-in-the-Sky" target="_blank" rel="noreferrer">github</a>
                        <button onClick={scrollDown}>Refresh Scroll</button>
                    </div>
                </div>
            </div>
        </div>
    )
}