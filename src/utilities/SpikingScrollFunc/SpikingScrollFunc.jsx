import { useEffect, useRef } from "react";

export default function SpikingScrollFunc(){
    

    const mshRef = useRef(0); //maxScrollHeight
    const scrollFrameRateRef = useRef(0);
    const scrollCenterFrameRef = useRef(0);

    const intializeSpikeScrollTwo =()=>{
        window.scroll({
            top: mshRef.current,
            left: 0,
        });
        console.log("Spike2 --- Bottom Out");
        window.scroll({
            top: 0,
            left: 0,
        });
        console.log("Spike2 --- Top Out");
        setTimeout(()=>{    
            window.scroll({
                top: scrollCenterFrameRef.current,
                left: 0,
                behavior: "smooth"
            });
            console.log("SetTimeout - Spike2 - Centered Out");
        }, 2600);
    };

    useEffect(()=>{
        console.log("SpikingScrollFunc")

        var h = document.documentElement;
        mshRef.current = h.scrollHeight - h.clientHeight;
        // how many pixels are each frame separated by? at what rate/ distance
        scrollFrameRateRef.current = Number((mshRef.current / 91).toFixed(2));
        var sfr = scrollFrameRateRef.current;
        scrollCenterFrameRef.current = sfr * 30.5;
        

        window.scroll({
            top: mshRef.current,
            left: 0,
        });
        console.log("Spike1 --- Bottom Out");
        window.scroll({
            top: 0,
            left: 0,
        });
        console.log("Spike1 --- Top Out");
        console.log("preintialize spike2");
        intializeSpikeScrollTwo();
    },[]);
};