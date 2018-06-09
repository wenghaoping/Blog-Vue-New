import axios from 'axios';
import qs from 'qs';
import { getToken } from 'utils/auth';
import store from 'store';

const Promise = require('es6-promise').Promise;

// 创建axios实例
const service = axios.create({
    baseURL: process.env.BASE_API, // api的base_url
    timeout: 5000 // 请求超时时间
});

// request拦截器
service.interceptors.request.use((config) => {
    if (store.getters.token) {
        config.headers['X-Token'] = getToken(); // 让每个请求携带自定义token 请根据实际情况自行修改
    }
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    return config;
}, (error) => {
    console.log('错误的传参');
    return Promise.reject(error);
});

// respone拦截器
service.interceptors.response.use((res) => {
    if (res.status !== 200) {
        return Promise.reject(res);
    }
    return res;
}, (error) => {
    console.log(error);
    console.log('网络异常');
    return Promise.reject(error);
});

export default service;
