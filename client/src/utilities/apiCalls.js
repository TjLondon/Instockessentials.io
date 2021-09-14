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
    getAllInventories: (id) => instockCalls.get(`/${id}/inventory`),
    getWarehouseInventories: () => instockCalls.get(`/inventory/`),
    getSingleWarehouse: (id) => instockCalls.get(`/warehouses/${id}`),
    DeleteWarehouse: (id) => instockCalls.delete(`/ warehouses / ${id}`),
    getSingleInventories: (itemId) => instockCalls.get(`/inventory/${itemId}`),
}


export default instockRequests