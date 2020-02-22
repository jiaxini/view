import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$http = axios;


axios.defaults.timeout = 5000;                        
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';      
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';      
// axios.defaults.baseURL = 'http://127.0.0.1:36800';   

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = JSON.stringify(config.data);
    }
    return config;
},(error) =>{
    console.log('错误的传参')
    return Promise.reject(error);
});

//返回状态判断(添加响应拦截器)
axios.interceptors.response.use((res) =>{
    if(res.data){
        return Promise.resolve(res);
    }
    return res;
}, (error) => {
    console.log('网络异常')
    return Promise.reject(error);
});

//返回一个Promise(发送post请求)
function P(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(response => {
                resolve(response);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
//返回一个Promise(发送get请求)
export function G(url, param) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params: param})
            .then(response => {
                resolve(response)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}