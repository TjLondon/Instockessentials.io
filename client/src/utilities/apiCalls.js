import axios from 'axios'

const PORT = 8080
const instockUrl = `http://localhost:${8080}`

const instockUrl = axios.create({
    baseURL: instockUrl,
    headers: {
        'Content-Type': 'application/json'
    }
})

const instockRequests = {
    getAllWarehouses: () => instockRequests.getAllWarehouses(`/warehouses`)
}

export default instockRequests