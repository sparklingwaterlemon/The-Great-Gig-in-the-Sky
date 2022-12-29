import topImageDayNumber from "../DayDateFunction/DayDateFunction";
import MOONIMAGES from "../../assets/MOONIMAGES/0000index";

// // IMAGE PRELOAD
// -- (2) preloading the images
const preloadFrame = (frame, frameIterator) => {
    let preimg = new Image();
    preimg.src = MOONIMAGES[frame].imgRef;
    // preimg.onload = function() {
    //     console.log("iterator", frameIterator);
    // };
    // console.log("iterator", frameIterator);
    // console.log("preimg", preimg)

    // --- PRELOAD SCROLL ---
    // scroll down to bottom, scroll back up
    if(frameIterator === 91){
        window.scroll({
            top: 0,
            left: 0,
        });
        console.log("PreScroll --- Top Out")
        window.scroll({
            top: 5000,
            left: 0,
        });
        console.log("PreScroll --- Bottom Out")
    }
};

// -- (1) calling function to preoload images/ cache
export default function PreloadImages(){
    for (let i = 0; i <= 91; i++) { // 91 is the frameCount, can be found in MoonComponent..
        // precheck = 0 will preload wallpaper
        var precheck = topImageDayNumber - i;
        if (precheck >= 0) {
            preloadFrame(topImageDayNumber - i, i);
        } else if (precheck < 0) {
            var preTop = topImageDayNumber + 365;
            preloadFrame(preTop - i, i);
        }
    }
};
