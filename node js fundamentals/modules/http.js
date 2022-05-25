const http = require("http");

http.createServer(router).listen(3000);

function router(req, res) {
    console.log("New petition!");
    console.log(req.url);

    switch (req.url) {
        case "/hi":
            res.write("Hi, what's up");
            res.end();
            break;
        default:
            res.write("Error 404");
            res.end();
            break;

    }
    // Header
    /* res.writeHead(201, { 'Content-Type': 'text/plain' });

    // Respong to the user
    res.write("Hi, I know how to HTTP with NodeJS");

    res.end(); */
}

console.log("Listening to port 3000");
