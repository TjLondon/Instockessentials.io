const { randomUUID } = require('crypto');
const express = require('express');
const router = express.Router();
const uniqid = require('uniqid')
const fs = require('fs');
// const { RSA_NO_PADDING } = require('constants')

const inventoryFilePath = "./data/inventories.json"

const readInventoryData = () => {
    const inventoryData  = fs.readFileSync(inventoryFilePath)
    const parsedInventoryFile = JSON.parse(inventoryData)
    return parsedInventoryFile
};

//axios get
router.get('/', (_req, res) => {
    try {
        const parsedInventory = readInventoryData();
        return res.status(200).json(parsedInventory)
    } catch(err) {
        return res.status(500).json({ error: 'item not found' })
    }
});
router.get('/:itemId', (req, res) => {
    const parsedInventory = readInventoryData();
    const findInventory = parsedInventory.find((inventory) => inventory.id === req.params.itemId);

    if(!findInventory) { 
        return res.status(404).json(findInventory).send('Inventory cannot be found')
    }
    console.log('PARSED INVENTORY:: ', parsedInventory)
    console.log('FIND INVENTORY ::', findInventory)
    console.log('FIND INVENTORY ID ::', inventory.id)
    console.log('PARAMS ID:: ', req.params.itemId) 


    res.json(findInventory)
}); 

router.delete('/:itemId', (req, res) => {
    console.log(req.params.itemId);
    const parsedInventory = readInventoryData();
    const filteredInventory = parsedInventory.findIndex((inventory)=> inventory.id === req.params.itemId);
    if (!filteredInventory) {
        return res.status(404).send('Inventory cannot be found')
    }
    console.log(filteredInventory);
    parsedInventory.splice(filteredInventory, 1);
    res.status(200).send("Delete Successful");
})

//create new inventory item
const getWarehouses = () => {
    const warehouses = fs.readFileSync('./data/warehouses.json')
    return JSON.parse(warehouses)
}

const getWarehouseId = (req) => 
    getWarehouses().find(warehouse => warehouse.name === req.body.warehouseName).id
 

const newItem = (req) => ({
    id: uniqid(),
    warehouseID: getWarehouseId(req),
    ...req.body
})

const createNewItem = (req, res) => {
    const inventory = readInventoryData();
    const newInventory = newItem(req)

    inventory.push(newInventory);

    fs.writeFileSync(inventoryFilePath, JSON.stringify(inventory));

    return res.status(201).json(newInventory)
}

router.post('/', (req, res) => {
    if (
    !req.body.warehouseName||
    !req.body.itemName ||
    !req.body.description ||
    !req.body.category ||
    !req.body.status ||
    !req.body.quantity
    ) {return res.status(404).send('All inputs fields must be filled')
    }  if (
        typeof req.body.quantity !==  'number'
    ) {return res.status(404).send('Please enter a valid number') 
    } createNewItem(req, res)
})
module.exports = router