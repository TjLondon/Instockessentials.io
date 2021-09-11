const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");



const getWarehouses = () => {
  const warehouses = fs.readFileSync("./data/warehouses.json");
  return JSON.parse(warehouses);
};

router.get("/", (req, res) => {
  try {
    const warehouses = getWarehouses();
    return res.status(200).json(warehouses);
  } catch (error) {
    return res.status(500).send({ error: "Information cannot be found." });
  }
});

module.exports = router;
