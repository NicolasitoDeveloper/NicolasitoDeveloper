const fs = require("fs");
const { callbackify } = require("util");

function read (route, cb) {
 fs.readFile(route, (err, data) => {
     cb(data.toString());
    // Read
 })
}

function write(route, content, cb) {
    fs.writeFile(route, content, (err) => {
        if (err) {
            console.error("Unable to write", err);
        } else {
            console.log("Successfully written")
        }
    });
}

function eliminate(route, cb) {
    fs.unlink(route, cb);
}

// eliminate(__dirname + "/file1.txt", console.log);
// write(__dirname + "/file2.txt", "New file, again!", console.log);
// read(__dirname + "/file.txt", console.log);

//There are a lof of modules and functionalities, check documentation.
