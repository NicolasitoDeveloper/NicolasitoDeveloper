import { createServer } from "http";

createServer(router).listen(3003);

function router(req, res) {
    console.log("New petition!");
    console.log(req.url);

    switch (req.url) {
        case "/hi":
            let greetings= hi();
            res.write(greetings);
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

console.log("Listening to port 3003");

function hi () {
    return "Hi what's up";
}