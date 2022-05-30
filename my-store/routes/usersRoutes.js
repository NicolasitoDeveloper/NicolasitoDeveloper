const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get("/", (req,res) =>{
  const {size} = req.query;
  const limit = size || 10;
  const users = [];
  for(let i = 0; i < limit; i++){
    users.push({
      user:faker.internet.userName()
    })
  }
  res.json(users);
});

router.get("/:id", (req,res) => {
  const {id} = req.params;
  res.json({
    id,
    user:faker.internet.userName(),
  })
});

router.post("/", (req, res) => {
  const body = req.body;
  res.json({
    message: "Created",
    data: body
  })
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "Updated",
    data: body,
    id,
  })
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Deleted",
    id,
  })
});
module.exports = router;
