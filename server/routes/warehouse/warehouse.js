const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const warehouseFilePath = "./data/warehouses.json"
const putWarehouseFilePath = require("../../data/warehouses.json")

// const readWarehouseData = () => {
//   const warehouseData = fs.readFileSync(warehouseFilePath);
//   const parsedWarehouseFile = JSON.parse(warehouseData)
//   return parsedWarehouseFile
// }

const getWarehouses = () => {
  const warehouses = fs.readFileSync('./data/warehouses.json')
  return JSON.parse(warehouses)
}
// const readWarehouseFile = () => {
//   return parsedWarehouseData;
// };

router.post("/add", (req, res) => {
  if (
    !req.body.warehouse_name ||
    !req.body.street ||
    req.body.city ||
    req.body.country ||
    req.body.contact
  )
    res.status(200).send("request info not complete");
  const addWarehouse = {
    id: uuidv4(),
    name: req.body.warehouse_name,
    address: req.body.street,
    city: req.body.city,
    country: req.body.country,
    contact: {
      name: req.body.contact.name,
      position: req.body.contact.position,
      phone: req.body.contact.phone,
      email: req.body.contact.email
    }
  };

  const newWarehouseData = getWarehouses();
  newWarehouseData.push(addWarehouse);
  fs.writeFileSync(warehouseFilePath, JSON.stringify(newWarehouseData));

  return res.status(201).json(newWarehouseData);
});


// j21dm-14 Put/Patch/Edit a Warehouse--This is used for warehouse details
router.put('/:id', ((req, res) => {
  let { id } = req.params;
  const editWarehouse = {
    "id": id,
    "name": req.body.name,
    "address": req.body.address,
    "city": req.body.city,
    "country": req.body.country,
    "contact": {
      "name": req.body.contact.name,
      "position": req.body.contact.position,
      "phone": req.body.contact.phone,
      "email": req.body.contact.email
    }
  }
  const editWarehouseData = putWarehouseFilePath.map(warehouse => {
    if (warehouse.id === id) {
      return warehouse = editWarehouse
    } else {
      return warehouse = warehouse
    }
  })
  fs.writeFile(`${warehouseFilePath}`, JSON.stringify(editWarehouseData), (err) => {
    if (err) {
      console.log(err)
    } else {
      res.status(200).json('Warehouse has been updated')
    }
  })
}))

router.get('/', (req, res) => {
  try {
    const warehouses = getWarehouses()
    return res.status(200).json(warehouses)
  } catch (error) {
    return res.status(500).send({ error: 'Information cannot be found.' })
  }
})
router.delete('/:id', (req, res) => {

  const deleteId = req.params.id
  const parsedWarehouse = getWarehouses();
  const findWarehouse = parsedWarehouse.findIndex((warehouse) => warehouse.id === deleteId);
  if (!findWarehouse) {
    return res.status(404).send('No warehouse associated with that id');

  }
  parsedWarehouse.splice(findWarehouse, 1);
  res.status(200).send("Delete Successful");

})


module.exports = router
