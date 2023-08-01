import axios from "axios";

const service = axios.create({
    baseURL: 'http://localhost:3000/api',
    timeout: 3000,

})
service.interceptors.request.use(config => {
    return config
}, error => {
    return Promise.reject(error)
})
service.interceptors.response.use(res => {
    return res.data.data
}, error => {
    return Promise.reject(error)
})
export default service