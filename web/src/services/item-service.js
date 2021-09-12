import http from './base-api-services';

const list = () => http.get('/items')

const detail = (id) => http.get(`/items/${id}`)

const itemsService = {
    list,
    detail
}

export default itemsService;