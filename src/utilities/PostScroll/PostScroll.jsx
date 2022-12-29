import { useEffect, useRef } from "react";

export default function PostScroll(){

    const mshRef = useRef(0);
    const scrollFrameRateRef = useRef(0);
    const scrollCenterFrameRef = useRef(0);


    const intializePostScrollTest = () =>{
        window.scroll({
            top: mshRef.current,
            left: 0,
        });
        console.log("Post Set --- Bottom Out");
        window.scroll({
            top: scrollCenterFrameRef.current,
            left: 0,
        });
        console.log("Post Set --- Centered Out");
    };

    const intializePostScroll = () =>{
        setTimeout(()=>{
            window.scroll({
                top: 0,
                left: 0,
            });
            console.log("PostScroll--- Top Out");
            window.scroll({
                top: scrollCenterFrameRef.current,
                left: 0,
                behavior: "smooth"
            });
            console.log("PostScroll--- Centered Out");
        }, 3000);
    };

    useEffect(()=>{
        var h = document.documentElement;
        mshRef.current = h.scrollHeight - h.clientHeight;
        scrollFrameRateRef.current = Number((mshRef.current / 91).toFixed(2));
        var sfr = scrollFrameRateRef.current;
        scrollCenterFrameRef.current = sfr * 30.5;
        console.log( scrollCenterFrameRef.current );
        intializePostScrollTest();
        intializePostScroll();
    },[]);
};