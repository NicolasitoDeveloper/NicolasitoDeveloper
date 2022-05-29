const getCategories = (req, res) => {
  res.json({
    category_1: "electronics",
    category_2: "clothing",
    category_3: "jewelry",
    category_4: "food",
    category_5: "house cleaning",
    category_6: "alcohol",
    category_7: "pets",
  });
}

const getCategoriesElectronics = (req, res) => {
  res.json({
    electronics_1: "laptops",
    electronics_2: "tvs",
    electronics_3: "washing machines",
    electronics_4: "dishwashers",
    electronics_5: "cellphones",
    electronics_6: "video game consoles",
    electronics_7: "accesories",
  });
}

module.exports = {getCategories, getCategoriesElectronics};
