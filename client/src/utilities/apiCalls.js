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
    DeleteWarehouse: (id) => instockCalls.delete(`/warehouses/${id}`)
}


export default instockRequests