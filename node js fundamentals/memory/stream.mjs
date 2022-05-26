import fs from "fs";
import stream from "stream";
import util from "util";

let data = "";

let readableStream = fs.createReadStream("./input.txt");

readableStream.setEncoding("utf-8");

// readableStream.on("data", ((chunk) => {
//     data += chunk;
//     console.log(chunk);
// }));

// readableStream.on("end", () => {
//     console.log(data);
// });

//Large files.

//--

// process.stdout.write("Hi");
// process.stdout.write("what");
// process.stdout.write("r");
// process.stdout.write("you");
// process.stdout.write("doing");
// process.stdout.write("?");

const Transform = stream.Transform;

function Caps() {
    Transform.call(this)
}

util.inherits(Caps, Transform);

Caps.prototype._transform = function (chunk, codif, cb) {
    var chunkCaps = chunk.toString().toUpperCase();
    this.push(chunkCaps);
    cb();
};

// class Caps {
//     constructor() {
//         Transform.call(this);
//     }
//     _transform(chunk, codif, cb) {
//         var chunkCaps = chunk.toString().toUpperCase();
//         this.push(chunkCaps);
//         cb();
//     }
// }

var caps = new Caps();

readableStream.pipe(caps).pipe(process.stdout);