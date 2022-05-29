const getCustomersCat = (req, res) => {
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

module.exports = { getCustomersCat };
