const express = require('express')
const router = express.Router()
// const uniqid = require('uniqid')
const fs = require('fs')
// const { RSA_NO_PADDING } = require('constants')

const inventoryFilePath = "../../data/inventories.json"
const readInventoryData = () => {
    const inventoryData  = fs.readFileSync(inventoryFilePath)
    const parsedInventoryFile = JSON.parse(inventoryData)
    return parsedInventoryFile
}
const parsedInventory = readInventoryData()

//axios get
router.get('/:id/inventory', (_req, res) => {
    try {
        return res.status(200).json(parsedInventory)
    } catch(err) {
        return res.status(500).json({ error: 'item not found' })
    }
})
router.get('/:id/inventory/:itemId', (req, res) => {
    console.log(req.params.id) 
    const filteredInventory = parsedInventory.find((inventory) => inventory.id === req.params.id); 
    if(!filteredInventory) { 
        return res.status(404).send('Inventory cannot be found')
    }
    res.json(filteredInventory)
}) 
module.exports = router