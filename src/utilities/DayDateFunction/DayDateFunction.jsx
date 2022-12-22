// Takes a date and returns what day out of 365
// ie. October 14 is the 287th day of the year. Function will return the num value 287

function dayDateFunction(date){
    return ((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000);
}

let t = new Date();
let currentDayNumber = dayDateFunction(t);

// Want top image of page on load, to be 30 days in the future
let future = currentDayNumber + 30;
let topImageDayNumber = 0; // variable we are going to export

if(future > 365){ // if past 365, new years
    topImageDayNumber = future - 365;
}

export default topImageDayNumber;

