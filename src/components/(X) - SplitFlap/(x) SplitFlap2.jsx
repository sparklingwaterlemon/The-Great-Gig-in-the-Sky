// import "./SplitFlap.css";

// export default function SplitFlap2(beginDateX, endDateX){

//     let speed = .2
//     // beginStr = beginStr.split("");
//     // endStr = endStr.split("");
//     let beginStr = "10/12".split("");
//     let endStr = "07/02".split("");


//     let amountOfFlaps = (beginStr.length >= endStr.length) ? beginStr.length : endStr.length;
//     // if start string is great or equal to end string, return start string, else return end string 




//     // Set up more stuff ///////////////////////////////////////
//     let a1 = document.querySelectorAll(".top");
//     let a2 = document.querySelectorAll(".bottom");
//     let b1 = document.querySelectorAll(".nextFull");
//     let b2 = document.querySelectorAll(".nextHalf");

//     for (var x = 0; x < a1.length; x++) {
//     a2[x].style.animationDuration = speed + "s";
//     b2[x].style.animationDuration = speed + "s";
//     }


//     // characters
//     const char = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', ' ', '/'];



//     let strCount = [];
//     let flag = [];
//     let flag2 = []

//     for(let i = 0; i < amountOfFlaps; i++){
//         if(beginStr.length !== amountOfFlaps){
//             for (let j = 0; j < amountOfFlaps - beginStr.length; j++){
//                 beginStr.push(" ");
//             }
//         }else if(endStr.length !== amountOfFlaps){
//             for (let k = 0; k < amountOfFlaps - endStr.length; k++){
//                 endStr.push(" ");
//             }
//         }
//     }

//     for(let x = 0; x < amountOfFlaps ; x++ ){
//         strCount[x] = char.indexOf(beginStr[x]);
//         flag[x] = false;
//         flag2 = true;
//     }




//     // Flip them flaps /////////////////////////////////////////
//     setInterval(function(){
//         for(var x = 0; x < amountOfFlaps; x++){
//             if (b1[x].innerHTML == endStr[x]){
//                 dontFlipIt(x)
//             } else {
//                 flipIt(x);
//             };
//         if(flag && flag2 == false){
//             changeDestination()
//         }
//     }
  
//   }, speed * 1000);
  
  
//   ////////////////////////////////////////////////////////////
//   // Flap flipping functions /////////////////////////////////
//   ////////////////////////////////////////////////////////////
//   function flipIt(x) {a
//     a1[x].innerHTML = char[(strCount[x] == 0) ? char.length - 1 : strCount[x] - 1];
//     a2[x].innerHTML = char[(strCount[x] == 0) ? char.length - 1 : strCount[x] - 1];
//     b1[x].innerHTML = char[strCount[x]];
//     b2[x].innerHTML = char[strCount[x]];
  
//     a2[x].classList.remove("flip1");
//     a2[x].offsetWidth = a2[x].offsetWidth;
//     a2[x].classList.add("flip1");
//     b2[x].classList.remove("flip2");
//     b2[x].offsetWidth = b2[x].offsetWidth;
//     b2[x].classList.add("flip2");
  
//     if (strCount[x] > char.length - 2) strCount[x] = 0;
//     else strCount[x]++;
//   }
  
//   function dontFlipIt(x) {
//     flag[x] = true;
//     a2[x].classList.remove("flip2");
//     a2[x].style.backgroundColor = "#3BB6eB";
//     b2[x].style.backgroundColor = "#3BB6eB";
//     a1[x].innerHTML = char[(strCount[x] == 0) ? char.length - 1 : strCount[x] - 1];
//     a2[x].innerHTML = char[(strCount[x] == 0) ? char.length - 1 : strCount[x] - 1];
//   }
  
//   function changeDestination() {
//     setTimeout(function() {
//       flag.fill(false);
//       flag2 = true;
      
//       var tempArr = endStr.slice();
//       endStr = beginStr.slice();
//       beginStr = tempArr.slice();
//     }, 3000);
//   }
    

















//     return(
//         <div className="center">
//             <div className="splitflap">
//                 <div className="top"></div>
//                 <div className="bottom"></div>
//                 <div className="nextHalf"></div>
//                 <div className="nextFull"></div>            
//             </div>
//             <div className="splitflap">
//                 <div className="top"></div>
//                 <div className="bottom"></div>
//                 <div className="nextHalf"></div>
//                 <div className="nextFull"></div>            
//             </div>
//             <div className="splitflap">
//                 <div className="top"></div>
//                 <div className="bottom"></div>
//                 <div className="nextHalf"></div>
//                 <div className="nextFull"></div>            
//             </div>
//             <div className="splitflap">
//                 <div className="top"></div>
//                 <div className="bottom"></div>
//                 <div className="nextHalf"></div>
//                 <div className="nextFull"></div>            
//             </div>
//             <div className="splitflap">
//                 <div className="top"></div>
//                 <div className="bottom"></div>
//                 <div className="nextHalf"></div>
//                 <div className="nextFull"></div>            
//             </div>
//         </div>
//     )
// }