import axios from 'axios'

const instockUrl = 'http://localhost:8080'

const instockAxios = axios.create({
    baseURL: instockUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})
console.log(instockAxios)

const instockRequests = {
    getAllWarehouses: () => instockRequests.get(`/warehouses`)
}
const instockResponse = {
    getAllInventories: () => instockResponse.get(`/inventory`)
}


export default instockRequests