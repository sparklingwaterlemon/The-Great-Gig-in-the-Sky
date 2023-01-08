import topImageDayNumber from "../DayDateFunc/DayDateFunc";
import MOONIMAGES from "../../assets/MOONIMAGES/0000index";

import { useEffect } from "react";




export default function PreLoadImagesFunc(){
    useEffect(()=>{
        // console.log("PreLoadImagesFunc");
        // -- (2) preloading the images
        const preloadFrame = (frame, frameIterator) => {
            let preimg = new Image();
            preimg.src = MOONIMAGES[frame].imgRef;
            // preimg.onload = function() {
            //     console.log("preimg", preimg);
            // };
        };

        // -- (1) precheck for dates between years
        for(let i = 0; i <= 91; i++){ // 91 is the frameCount, can be found in MoonComponent..
            // precheck = 0 will preload wallpaper, wallpaper set to index 0 of MOONIMAGES array
            var precheck = topImageDayNumber - i; 
            // for example, if today is january 1 and the topImage of page being 30 days from today, the topImage will be for january 31
            // on the 40th iteration of this loop, var precheck = 31 - 40; precheck = -14.
            // will go to the else if statement.
            // preloadFrame( 31(topImageDayNumber) + 365 - 40(current iteration)) === current frame
            if(precheck >= 0){
                preloadFrame(topImageDayNumber - i, i);
            } else if(precheck < 0){
                var preTop = topImageDayNumber + 365;
                preloadFrame(preTop - i, i);
            };
        };
    },[]);
};

