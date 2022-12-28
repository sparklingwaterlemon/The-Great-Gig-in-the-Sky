import { useState, useEffect } from "react";

export default function PostScroll(){
    const [ ds, setDS] = useState(true);

    useEffect(()=>{
        var h = document.documentElement;
        var msh = h.scrollHeight - h.clientHeight;
        var sft = (msh/ 91) * 30.5; // 91 is the frame count // 30.5 is the 30th frame
        var sft2 = Number(sft.toFixed(2));
        if(ds){
            setTimeout(()=>{
                setDS(false);
                window.scroll({
                    top: 0,
                    left: 0,
                    behavior: "smooth",
                });
                console.log("PostScroll--- Top Out");
                window.scroll({
                    top: sft2,
                    left: 0,
                    behavior: "smooth",
                });
                console.log("PostScroll--- SMOOTH SCROLL");
            }, 250);
        }
        // eslint-disable-next-line
    },[]);
}