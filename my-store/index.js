const express = require("express");
const { routerApi } = require("./routes");

const app = express();
const port = 3006;

app.get("/", (req, res) => {
  res.send("Hi, I'm a server in express");
});

// app.get("/new-route", (req, res) => {
//   res.send("Hi, I'm a new endpoint");
// });

routerApi(app);

// app.get("/categories/electronics/:id", (req, res) => {
//   const { id } = req.params;
//   res.json({
//     id,
//     name: "product 1",
//     price: 1000
//   });
// });

// //localhost:3005/users?limit=10&offset=200
// // {
// //   "limit": "10",
// //   "offset": "200"
// // }
// app.get("/users", (req, res) =>{
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset
//     });
//   } else {
//     res.send("No params");
//   }
// })

// app.get("/categories/:categoryId/products/:productId", (req, res) => {
//   const { categoryId, productId } = req.params;
//   res.json({
//     categoryId,
//     productId,
//   });
// });

app.listen(port, () => {
  console.log("My port: " + port);
});
