const express = require('express');
const router = express.Router();
// const uniqid = require('uniqid')
const fs = require('fs');
// const { RSA_NO_PADDING } = require('constants')

const inventoryFilePath = "./data/inventories.json"
const putInventoryFilePath = require("../../data/inventories.json")

const readInventoryData = () => {
    const inventoryData = fs.readFileSync(inventoryFilePath)
    const parsedInventoryFile = JSON.parse(inventoryData)
    return parsedInventoryFile
};

//axios get
router.get('/', (_req, res) => {
    try {
        const parsedInventory = readInventoryData();
        return res.status(200).json(parsedInventory)
    } catch (err) {
        return res.status(500).json({ error: 'item not found' })
    }
});
router.get('/:itemId', (req, res) => {
    const parsedInventory = readInventoryData();
    const findInventory = parsedInventory.find((inventory) => inventory.id === req.params.itemId);

    if (!findInventory) {
        return res.status(404).json(findInventory).send('Inventory cannot be found')
    }
    console.log('PARSED INVENTORY:: ', parsedInventory)
    console.log('FIND INVENTORY ::', findInventory)
    console.log('FIND INVENTORY ID ::', inventory.id)
    console.log('PARAMS ID:: ', req.params.itemId)


    res.json(findInventory)
});


router.put('/:itemId/edit', (req, res) => {
    let id = req.params.itemId
    const editInventory = {
        "id": id,
        "warehouseID": req.body.warehouseID,
        "warehouseName": req.body.warehouseName,
        "itemName": req.body.itemName,
        "description": req.body.description,
        "category": req.body.category,
        "status": req.body.status,
        "quantity": Number(req.body.quantity)
    }
    const editInventoryData = putInventoryFilePath.map(inventory => {
        if (inventory.id === id) {
            return inventory = editInventory
        } else {
            return inventory = inventory
        }
    })
    fs.writeFile(`${inventoryFilePath}`, JSON.stringify(editInventoryData), (err) => {
        if (err) {
            console.log(err)
        } else {
            res.status(200).json("Item has been updated")
        }
    })
})


router.delete('/:id/inventory/:itemId', (req, res) => {
    console.log(req.params.itemId);
    const parsedInventory = readInventoryData();
    const filteredInventory = parsedInventory.findIndex((inventory) => inventory.id === req.params.itemId);
    if (!filteredInventory) {
        return res.status(404).send('Inventory cannot be found')
    }
    console.log(filteredInventory);
    parsedInventory.splice(filteredInventory, 1);
    res.status(200).send("Delete Successful");
})
module.exports = router