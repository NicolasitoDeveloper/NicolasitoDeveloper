const { getCustomersCat } = require("../services/customerServices.js");


function customerRoutes(app) {
  app.get("/customer", getCustomersCat)
}

module.exports = { customerRoutes };
