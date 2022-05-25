// const p = require("process");

process.on("beforeExit", () => {
    console.log("Process is about to end");
});

process.on("exit", () => {
    console.log("Process ended");
    setTimeout(() => {
        console.log("Don't show");
    }, 1000);
});

setTimeout(() => {
    console.log("Shows");
}, 1000);

process.on("uncaughtException", (error, origen) => {
    console.error("Holy... we forgot to catch that error");
    console.error(error);
});

// functionError();

console.log("No error, no pop");

// process.on("unhandledRejection");