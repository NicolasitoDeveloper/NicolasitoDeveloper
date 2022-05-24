const { exec, spawn } = require ("child_process");
const { stdout, stderr } = require("process");
// const exec = require("child_process").exec;

// exec("node console.js , ls-la" , "ls- la", (error, stdout, stderr) => {
//     if (error) {
//         console.error(error);
//         return false;
//     }

//     console.log(stdout);
// })

let process = spawn("ls", ["-la"]);

console.log(process.pid);
console.log(process.connected);

process.stdout.on("data", (data) => {
    console.log("Is it dead");
    console.log(process.killed);
    console.log(data.toString())
} );

process.on("exit", () => {
    console.log("Process ended");
    console.log(process.killed);
});

//exec allows us to executed a command in our system, it receives a full command "node console.js" and a callback with three
//parameters of its own (error, stdout, stderr)

//spawn, similar to exec but quite more complex, allows us to know the status and data processed in every moment of being executed