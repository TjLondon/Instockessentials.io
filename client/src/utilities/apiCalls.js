import axios from 'axios'

const instockUrl = 'http://localhost:8080'

const instockCalls = axios.create({
    baseURL: instockUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})
const instockRequests = {
    getAllWarehouses: () => instockCalls.get(`/warehouses`),
    getAddInventory:() => instockCalls.get('/inventory'),
    getSingleWarehouse: (id) => instockCalls.get(`/warehouses/${id}`),
    getAllInventories: (id) => instockCalls.get(`/ ${id} / inventory`),
    DeleteWarehouse: (id) => instockCalls.delete(`/ warehouses / ${id}`),
    postNewInventoryItem: ()=> instockCalls.post('/inventory')
}


export default instockRequests