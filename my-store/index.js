const express = require("express");
const { routerApi } = require("./routes");
const { logErrors, errorHandler, boomErrorHandler } = require("./middlewares/errorHandler");

const app = express();
const port = 3009;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hi, I'm a server in express");
});

routerApi(app);
app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
  console.log("My port: " + port);
});
