function anotherOne() {
    breaks();
}

function breaks() {
    return 3 + z;
}

function itBreaksAsync(cb) {
    setTimeout(() => {
        try {
            return z + 3
        } catch (error) {
            console.error("Error - Async function")
            cb(error);
        }
    }, 1000)
}

try {
    // anotherOne();
    itBreaksAsync((error) => {
        console.log(error.message);
    });
} catch (error) {
    console.log("It just broke...");
    console.error(error.message);
    console.log("It's ok, we catched It");
}

console.log("This is located at the end");

//With console.error(error) one can trace the error in orden to find where it happened.

//Async functions need to have try/catch within themselves 