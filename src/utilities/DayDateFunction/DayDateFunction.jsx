// Takes a date and returns what day out of 365
// ie. October 14 is the 287th day of the year. Function will return the num value 287

function dayDateFunction(date){
    return ((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000);
}

// plugging in today's date to get currentDayNumber
let t = new Date();
let currentDayNumber = dayDateFunction(t);


// Top Image is 30 days in the future.. scroll up to see future dates
let future = currentDayNumber + 30;
let topImageDayNumber = 0;
if(future > 365){ // 365 days
    topImageDayNumber = future - 365;
}

export default topImageDayNumber;

