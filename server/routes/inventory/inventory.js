const express = require('express');
const router = express.Router();
// const uniqid = require('uniqid')
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

router.delete('/:id/inventory/:itemId', (req, res) => {
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
module.exports = router