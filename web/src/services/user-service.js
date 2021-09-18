
import http from './base-api-services';

const login = ({email, password}) => 
    http.post('/users', { email, password })

const logout = () => http.post('/logout')

const getProfile = () => http.get('/profile')

const register = (user) => {
    const data = new FormData()

    data.append('name', user.name)
    data.append('surname', user.surname)
    data.append('email', user.email)
    data.append('password', user.password)
    
    return http.post('/register', user)}

const service = {
    login,
    logout,
    getProfile,
    register
};
export default service;