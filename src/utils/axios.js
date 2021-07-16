import axios from 'axios'

const baseURL = 'http://localhost:8080'
const version = '/api/v1'

// 创建一个axios实例
const instance = axios.create({
    baseURL: baseURL+version,
    timeout: 7000,
    headers: {}
})

// 封装请求拦截器
instance.interceptors.request.use(function (config) {
    // 加token
    return config;
}, function (error) {
    return Promise.reject(error);
})

// 封装响应拦截器
instance.interceptors.response.use(function (response) {
    let res = null
    // 数据过滤
    if(response.data && response.data.err===0) {
        res = response.data.data
    }
    return res
}, function (error) {
    return Promise.reject(error)
})


export default instance