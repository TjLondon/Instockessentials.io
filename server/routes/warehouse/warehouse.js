const express = require("express");
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");


const warehouseFilePath = "./data/warehouses.json"

const readWarehouseData = () => {
    const warehouseData = fs.readFileSync(warehouseFilePath);
    const parsedWarehouseFile = JSON.parse(warehouseData)
    return parsedWarehouseFile
}

const getWarehouses = () => {
    const warehouses = fs.readFileSync('./data/warehouses.json')
    return JSON.parse(warehouses)
}


router.get('/', (req, res) => {
    try {
        const warehouses = getWarehouses()
        return res.status(200).json(warehouses)
    } catch (error) {
        return res.status(500).send({ error: 'Information cannot be found.'})
    }
})
router.delete('/:id' , (req, res)=> {
    
    const deleteId = req.params.id
    const parsedWarehouse = readWarehouseData();
    const findWarehouse = parsedWarehouse.findIndex((warehouse) => warehouse.id === deleteId);
    if (!findWarehouse) {
        return res.status(404).send('No warehouse associated with that id');

    }
    parsedWarehouse.splice(findWarehouse, 1);
    res.status(200).send("Delete Successful");

})
module.exports = router
