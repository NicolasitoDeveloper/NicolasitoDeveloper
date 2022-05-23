let i = 0;
let interval = setInterval(() => {
    console.log("Hi");
    if (i === 3) {
        clearInterval(interval);
    }
    i++;
}, 1000);

setImmediate (() => {
    console.log ("Hii");
});


console.log(process);
console.log(__dirname);
console.log(__filename);

global.myVariable = "Value";
console.log(myVariable);

//Full documentation nodejs.org/api/