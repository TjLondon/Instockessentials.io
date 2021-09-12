const express = require('express');
const router = express.Router();
// const uniqid = require('uniqid')
const fs = require('fs');
// const { RSA_NO_PADDING } = require('constants')

const inventoryFilePath = "./data/inventories.json"

const readInventoryData = () => {
    const inventoryData  = fs.readFileSync(inventoryFilePath)
    const parsedInventoryFile = JSON.parse(inventoryData, null, 2)
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
    const itemId = req.params.id
    const parsedInventory = readInventoryData();
    const filteredInventory = parsedInventory.filter((inventory) => inventory.id === itemId);

    if(!filteredInventory) { 
        return res.status(404).json(filteredInventory).send('Inventory cannot be found')
    }
    console.log('PARSED INVENTORY:: ', parsedInventory)
    console.log('FIND INVENTORY ID ::', inventory.id)
    console.log('PARAMS ID:: ', req.params.itemId) 
    
    res.json(filteredInventory)
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