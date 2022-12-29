import { useEffect, useRef } from "react";

export default function PostScroll(){

    const mshRef = useRef(0);
    const scrollFrameRateRef = useRef(0);
    const scrollCenterFrameRef = useRef(0);


    const intializePostScrollOne = () =>{
        window.scroll({
            top: 0,
            left: 0,
        });
        console.log("PostScrollOne --- Top Out");
        window.scroll({
            top: mshRef.current,
            left: 0,
        });
        console.log("PostScrollOne --- Bottom Out");
        intializePostScrollTwo();
    };

    const intializePostScrollTwo = () =>{
        setTimeout(()=>{
            window.scroll({
                top: 0,
                left: 0,
            });
            console.log("PostScrollTwo--- Top Out");
            window.scroll({
                top: scrollCenterFrameRef.current,
                left: 0,
                behavior: "smooth"
            });
            console.log("PostScrollTwo--- Centered Out");
        }, 3000);
    };

    useEffect(()=>{
        var h = document.documentElement;
        mshRef.current = h.scrollHeight - h.clientHeight;
        scrollFrameRateRef.current = Number((mshRef.current / 91).toFixed(2));
        var sfr = scrollFrameRateRef.current;
        scrollCenterFrameRef.current = sfr * 30.5;
        intializePostScrollOne();
    },[]);
};