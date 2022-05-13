//Console 
// NAME=Nicolas WEB=whatevs.com node environment.js
// For outside variables use CAPS!

let first_name = process.env.NAME || "No name";
let my_web = process.env.WEB || "No web";

console.log("Hi " + first_name);
console.log("My web is " + my_web);


