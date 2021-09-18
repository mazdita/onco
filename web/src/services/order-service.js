
import http from './base-api-service';

const createOrder= () => http.post('/orders')

const list = () => http.get('/ordes')

const detail = (id) => http.get(`/orders/${id}`)

const ordersService = {
    createOrder,
    list,
    detail
}

export default ordersService;