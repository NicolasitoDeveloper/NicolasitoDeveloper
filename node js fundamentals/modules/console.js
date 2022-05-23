console.log("Something");
console.info();
console.error();
console.warn();

var table = [
    {
        a: 1,
        b: "Z"
    },
    {
        a: 2,
        b: "Another"
    }
]
console.log(table);

console.table(table);

console.group("Conversation");
console.log("Hi");
console.group("Bla");
console.log("Blablabla");
console.log("Blablabla");
console.log("Blablabla");
console.groupEnd("Bla");
console.log("Goodbye");
console.groupEnd("Conversation")

console.log("Another thing");

function function1() {
    console.group("Function 1");
    console.log("From function 1")
    function2();
    console.log("Back to function 1")
    console.groupEnd("Function 1");
}

function function2() {
    console.group("Function 2");
    console.log("From function 2")
    console.groupEnd("Function 2");
}

function1();

console.count("Times");
console.count("Times");
console.count("Times");
console.countReset("Times");
console.count("Times");

 
//----------------------------

// console.log: receive anything and shows it in console.
// console.info: equivalent to .log but only used to inform.
// console.error: equivalent to .log but only used for errors.
// console.warn: equivalent to .log but only used to warn.
// console.table: shows a table from an object.
// console.count: starts a counter.
// console.countReset: restart the counter.
// console.time: start a stopwatch in ms.
// console.timeEnd: stop a stopwatch.
// console.group: allows to group using indentation.
// console.groupEnd: stop the grouping.
// console.clear: cleans the console.