let myDate = new Date();
console.log(myDate.toString()); //Thu Aug 17 2023 21:33:22 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()); //Thu Aug 17 2023
console.log(myDate.toLocaleString()); //8/17/2023, 9:33:24 PM

let myCreatedDate = new Date(2023, 7, 15); // month will start from '0'.
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("2023, 8, 15"); // month will start from '1' if the values is give in string format
console.log(myCreatedDate2.toLocaleString());

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());
