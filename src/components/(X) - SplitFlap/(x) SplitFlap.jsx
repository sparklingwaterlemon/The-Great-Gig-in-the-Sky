import {useState, useRef} from "react";
// import "./SplitFlap.css"

export default function SplitFlapX(beginStrV, endStrV){

    // beginStr = beginStr.split("");
    // endStr = endStr.split("");
    let beginStr = "test1".split("");
    let endStr = "test2".split("");


    let amountOfFlaps = (beginStr.length >= endStr.length) ? beginStr.length : endStr.length;
    // if start string is great or equal to end string, return start string, else return end string 
    
    // characters
    const char = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 
                    'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 
                    'Y', 'Z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 
                    ' ', '/'];


    // Reference div elements
    const a1Ref = useRef(null);
    const a2Ref = useRef(null);
    const b1Ref = useRef(null);
    const b2Ref = useRef(null);
   
    // creating <div containers> per letter and setting it inside 
    const divContainer = document.querySelector(".center");

    function amountOfBoxes(){
        let amountOfDivs = "";
        for(let i = 0; i < amountOfFlaps; i++){
            amountOfDivs += (`
            <div className="splitflap">
                <div className="top" useRef={a1Ref}> </div>
                <div className="bottom useRef={a2Ref}"> </div>
                <div className="nextHalf useRef={b1Ref}"> </div>
                <div className="nextFull useRef={b2Ref}"> </div>
            </div>
            `)
        }
        divContainer.innerHTML = amountOfDivs
    }
    
    let strCount = [];
    let flag = [];

    for(let i = 0; i < amountOfFlaps; i++){
        if(beginStr.length !== amountOfFlaps){
            for (let j = 0; j < amountOfFlaps - beginStr.length; j++){
                beginStr.push(" ");
            }
        }else if(endStr.length !== amountOfFlaps){
            for (let k = 0; k < amountOfFlaps - endStr.length; k++){
                endStr.push(" ");
            }
        }
    }

    for(let x = 0; x < amountOfFlaps ; x++ ){
        strCount[x] = char.indexOf(beginStr[x]);
        flag[x] = false;
        flag[2] = true;
    }



    let containerName = "testingcc";
    return(
        <>
            <h2> splitflap </h2>
            <div className={`${containerName}-container`} setInnerHTML={amountOfBoxes()} />
        </>
    )
}










// strCount = [], flag = [];

// for (var x = 0; x < amountOfFlaps; x++) {
  
//   if (beginStr.length != amountOfFlaps)
//     {
//       for (var x = 0; x < amountOfFlaps - beginStr.length; x++)
//         {
//           beginStr.push(" ");
//         }
//     }
//   else if (endStr.length != amountOfFlaps)
//     {
//       for (var x = 0; x < amountOfFlaps - endStr.length; x++)
//         {
//           endStr.push(" ");
//         }
//     }
// }
// for (var x = 0; x<amountOfFlaps; x++){
//   strCount[x] = char.indexOf(beginStr[x]);
//   flag[x] = false, flag2 = true;
// }

// // Flip them flaps /////////////////////////////////////////
// setInterval(function() {
//   for (var x = 0; x < amountOfFlaps; x++) {

//     if (b1[x].innerHTML == endStr[x]) dontFlipIt(x);
//     else flipIt(x);

//     if (flag.every(function(e) {
//         return e
//       }) && flag2) flag2 = false, changeDestination();
//   }

// }, speed * 1000);


// ////////////////////////////////////////////////////////////
// // Flap flipping functions /////////////////////////////////
// ////////////////////////////////////////////////////////////
// function flipIt(x) {
//   a1[x].innerHTML = char[(strCount[x] == 0) ? char.length - 1 : strCount[x] - 1];
//   a2[x].innerHTML = char[(strCount[x] == 0) ? char.length - 1 : strCount[x] - 1];
//   b1[x].innerHTML = char[strCount[x]];
//   b2[x].innerHTML = char[strCount[x]];

//   a2[x].classList.remove("flip1");
//   a2[x].offsetWidth = a2[x].offsetWidth;
//   a2[x].classList.add("flip1");
//   b2[x].classList.remove("flip2");
//   b2[x].offsetWidth = b2[x].offsetWidth;
//   b2[x].classList.add("flip2");

//   if (strCount[x] > char.length - 2) strCount[x] = 0;
//   else strCount[x]++;
// }

// function dontFlipIt(x) {
//   flag[x] = true;
//   a2[x].classList.remove("flip2");
//   a2[x].style.backgroundColor = "#3BB6eB";
//   b2[x].style.backgroundColor = "#3BB6eB";
//   a1[x].innerHTML = char[(strCount[x] == 0) ? char.length - 1 : strCount[x] - 1];
//   a2[x].innerHTML = char[(strCount[x] == 0) ? char.length - 1 : strCount[x] - 1];
// }

// function changeDestination() {
//   setTimeout(function() {
//     flag.fill(false);
//     flag2 = true;
    
//     var tempArr = endStr.slice();
//     endStr = beginStr.slice();
//     beginStr = tempArr.slice();
//   }, 3000);
// }