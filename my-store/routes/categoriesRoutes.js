const {getCategories, getCategoriesElectronics} = require( "../services/categoriesServices.js");

function categoriesRoutes(app) {
  app.get("/categories", getCategories)
  app.get("/categories/electronics", getCategoriesElectronics)
}

module.exports = {categoriesRoutes}
