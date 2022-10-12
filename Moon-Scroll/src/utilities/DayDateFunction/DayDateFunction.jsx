function daysIntoYear(date){
    return (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) - Date.UTC(date.getFullYear(), 0, 0)) / 24 / 60 / 60 / 1000;
}


let day = new Date("October 10 2022")
console.log(`${day.toLocaleDateString()} is ${daysIntoYear(day)} days into the year`);