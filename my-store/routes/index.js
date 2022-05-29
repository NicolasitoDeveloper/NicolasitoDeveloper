const productsRouter = require("./productsRoutes");
const categoriesRouter = require("./categoriesRoutes");
const usersRouter = require("./usersRoutes");


function routerApi(app) {
  app.use("/products", productsRouter);
  app.use("/categories", categoriesRouter);
  app.use("/users", usersRouter);
}

module.exports = { routerApi }
