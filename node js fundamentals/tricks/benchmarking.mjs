console.time("whole");
console.time("all");

let sum = 0;

console.time("loop1");

for (let i = 0; i < 1000000000; i++) {
    sum += 1;
}

console.timeEnd("loop1");

let sum2 = 0;

console.time("loop2");

for (let j = 0; j < 10000000; j++) {
    sum += 1;
}

console.timeEnd("loop2");

console.time("async");
console.log("async starts");

async().then(() => {
    console.timeEnd("async")}).then(() => {
        console.timeEnd("whole");
    });

console.timeEnd("all");

function async() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("end async");
            resolve();
        });
    });
}