import "./App.css";
import { useEffect } from "react";

import AboutButton from "../../utilities/AboutButton/AboutButton";
import MoonComponent from "../../pcomponents2/MoonComponent/MoonComponent";
import ConstructionDisplay from "../../utilities/ConstructionDisplay/ConstructionDisplay";

export default function App(){
    // on intial load - window will scroll down
    useEffect(()=>{
        window.scroll({
            top: 1099.34, // maxHeight(/totalFrameCount * 30.5 (30 images above)
            left: 0,
            behavior: "smooth",
        })
    },[]);

    return (
        <section id="section-landing-page">
            <AboutButton />
            <MoonComponent />
            <div className="construction">
                <ConstructionDisplay />
            </div>
        </section>
    )
};