

let indiaDate = new Date(0)
// console.log(indiaDate); 
//1970-01-01T00:00:00.000Z 

let indiaDatStr = new Date() + ''
// console.log(indiaDatStr);           
// Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)      

let indiaDateIso = new Date().toISOString()
let indiaDateIso2 = new Date()
// console.log(indiaDateIso);
// console.log(indiaDateIso2);
// 2023-10-06T01:59:25.914Z    //UTC?GMT?ISO => TimeZone

let fromInputDate = new Date('1970-01-01T00:00:40.000Z')
// console.log(fromInputDate);     //same as input => 1970-01-01T00:00:40.000Z

let fromInputDateToStr = new Date('1970-01-01T00:05:40.000Z').toString()
// console.log(fromInputDateToStr);   // convert local and add Time
//Thu Jan 01 1970 00:05:40 GMT+0000 (Greenwich Mean Time)
// Thu Jan 01 1970 05:35:40 GMT+0530 (India Standard Time)



let fromInputDateToIsoStr = new Date('1970-01-01T00:00:40.000Z').toUTCString()
// console.log(fromInputDateToIsoStr);
// 1970-01-01T00:00:40.000Z isoString conver in UTC timezone



// let addGMT = new Date().toISOString()  
// console.log(addGMT); 
//Thu Jan 01 1970 00:00:00 GMT+0530 (India Standard Time)

let dateStr = '2023-10-06T07:47:22.273Z'    //ist
let timestamp = new Date(dateStr).getTime()
console.log(new Date(dateStr));
let utcDate = new Date(timestamp + 5.5 * 60 * 60 * 1000)    //GMT
console.log(utcDate);

let day = utcDate.getUTCDay()

console.log(day);

let prevMonday = new Date(utcDate)
if (day !== 0)
    prevMonday.setDate(utcDate.getUTCDate() - day + 1)

// // ---------------converting UTC to IST 
let timestamp2 = new Date(prevMonday).getTime()
let res = new Date(timestamp2 - 5.5 * 60 * 60 * 1000)
console.log(res);
// return from(str)


// // console.log(day);


