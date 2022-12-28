import "./App.css";
import { useEffect } from "react";
import MOONIMAGES from "../../assets/MOONIMAGES/0000index";


import MoonComponent from "../../pcomponents2/MoonComponent/MoonComponent";
import ConstructionDisplay from "../../utilities/ConstructionDisplay/ConstructionDisplay";
import PreloadImages from "../../utilities/PreLoadImages/PreLoadImages";
// import AboutButton from "../../utilities/AboutButton/AboutButton";



export default function App(){
    PreloadImages();
     
    function testScrollAGAIN(){
        window.scroll({
            top: 5000,
            left: 0,
        });
        window.scroll({
            top: 0,
            left: 0,
        });
        console.log("tESTING?")
    };
    testScrollAGAIN();

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

    return (
        <section id="section-m">
            <div className="m-b-container">
                <img className="m-b-image" src={MOONIMAGES[0].imgRef} alt="background"/>
            </div>
            <MoonComponent />

            <div className="construction">
                <ConstructionDisplay />
            </div>

            {/* <AboutButton /> */}
        </section>
    )
};