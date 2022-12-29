import { useEffect } from "react";

export default function PostScroll(){

    let scrollFrameRate, scrollCenterFrame;

    const intializePostScroll = () =>{
        setTimeout(()=>{
            window.scroll({
                top: 0,
                left: 0,
            });
            console.log("PostScroll--- Top Out");
            window.scroll({
                top: scrollCenterFrame,
                left: 0,
                behavior: "smooth"
            });
            console.log("PostScroll--- Centered Out");
        }, 2200);
    };

    useEffect(()=>{
        var h = document.documentElement;
        var msh = h.scrollHeight - h.clientHeight;
        scrollFrameRate = Number((msh / 91).toFixed(2));
        scrollCenterFrame = scrollFrameRate * 30.5;
        intializePostScroll();
    },[]);
};