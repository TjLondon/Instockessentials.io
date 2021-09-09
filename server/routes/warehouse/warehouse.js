const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const warehouseDataPath = "./data/warehouses.json";
const readWarehouseData = fs.readFileSync(warehouseDataPath);
const parsedWarehouseData = JSON.parse(readWarehouseData);

const readWarehouseFile = () => {
    return parsedWarehouseData;
  };

router.post("/add", (req, res) => {
    console.log(req.body);
    const  addWarehouse = {
        id: uuidv4(),
        name: req.body.warehouse_name,
        address: req.body.street,
        city: req.body.city,
        country: req.body.country,
        contact: req.body.contact,
};

const newWarehouseData = readWarehouseFile();
newWarehouseData.push(addWarehouse);
fs.writeFileSync(warehouseDataPath, JSON.stringify(newWarehouseData));

return res.status(201).json(newWarehouseData);
}
);

module.exports = router;