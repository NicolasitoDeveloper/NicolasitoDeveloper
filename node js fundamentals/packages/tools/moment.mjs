import momento from "moment";

let now = momento();

// console.log(now);
//Moment<2022-05-26T12:12:15-05:00>

console.log(now.toString());
// Thu May 26 2022 12:31:43 GMT-0500

console.log(now.format("dddd Do MMM YYYY"));
// Thursday 26th May 2022

console.log(now.format("dddd Do " + "of " + "MMM YYYY"));
// Thursday 26th of May 2022


console.log(now.subtract(1, "day").toString());
// Wed May 25 2022 12:31:43 GMT-0500

console.log(now.startOf("day").subtract(1, "day").toString());
// Tue May 24 2022 00:00:00 GMT-0500

console.log(now.subtract(1, "day").toString());
// Mon May 23 2022 00:00:00 GMT-0500

