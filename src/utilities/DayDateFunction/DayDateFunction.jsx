// takes a date and returns day out of 365
// ie. October 14 is the 287th day of the year - returns 287


export default function daysIntoYear(date){
    return ((Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000);
}


// let day = new Date("Oct 14 2022")
// console.log(`${day.toLocaleDateString()} is ${daysIntoYear(day)} days into the year -fadsf;asdjl`);