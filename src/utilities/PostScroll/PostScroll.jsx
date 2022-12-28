import { useEffect } from "react";

export default function PostScroll(){
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
        console.log("POST SCROLL");
    },[]);
}