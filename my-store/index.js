const express = require("express");
const  {categoriesRoutes} = require("./routes/categoriesRoutes.js");
const  {customerRoutes} = require("./routes/customerRoutes.js");
const app = express();
const port = 3005;

app.get("/", (req, res) => {
  res.send("Hi, I'm a server in express");
});

// app.get("/new-route", (req, res) => {
//   res.send("Hi, I'm a new endpoint");
// });

categoriesRoutes(app);
customerRoutes(app);

app.get("/categories/electronics/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: "product 1",
    price: 1000
  });
});

app.get("/users", (req, res) =>{
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset
    });
  } else {
    res.send("No params");
  }
})

app.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

app.listen(port, () => {
  console.log("My port: " + port);
});
