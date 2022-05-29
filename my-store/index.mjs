import express from "express"
const app = express();
const port = 3005;

app.get("/", (req, res) => {
  res.send("Hi, I'm a server in express");
})

app.listen(port, () => {
  console.log("My port: " + port);
});
