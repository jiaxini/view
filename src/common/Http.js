import axios from 'axios'
import Vue from 'vue'
Vue.prototype.$http = axios


axios.defaults.timeout = 5000                 
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';      
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'   
// axios.defaults.baseURL = 'http://127.0.0.1:36800';   

//POST传参序列化(添加请求拦截器)
axios.interceptors.request.use((config) => {
    if(config.method  === 'post'){
        config.data = JSON.stringify(config.data)
    }
    return config;
},(error) =>{
    console.log('错误的传参')
    return Promise.reject(error)
})

//返回状态判断(添加响应拦截器)
// 这里是 api 请求， 而非 restful 请求
axios.interceptors.response.use(res => {
    if(res.status === 200){
        return Promise.resolve(res)
    }else{
        return Promise.reject(res)
    }
}, error => {
    // if (error.response.status) {            
    //     switch (error.response.status) {                
    //         // 401: 未登录
    //         // 未登录则跳转登录页面，并携带当前页面的路径
    //         // 在登录成功后返回当前页面，这一步需要在登录页操作。                
    //         case 401:                    
    //             router.replace({                        
    //                 path: '/login',                        
    //                 query: { 
    //                     redirect: router.currentRoute.fullPath 
    //                 }
    //             });
    //             break;
    //         // 403 token过期
    //         // 登录过期对用户进行提示
    //         // 清除本地token和清空vuex中token对象
    //         // 跳转登录页面                
    //         case 403:
    //              Toast({
    //                 message: '登录过期，请重新登录',
    //                 duration: 1000,
    //                 forbidClick: true
    //             });
    //             // 清除token
    //             localStorage.removeItem('token');
    //             store.commit('loginSuccess', null);
    //             // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面 
    //             setTimeout(() => {                        
    //                 router.replace({                            
    //                     path: '/login',                            
    //                     query: { 
    //                         redirect: router.currentRoute.fullPath 
    //                     }                        
    //                 });                    
    //             }, 1000);                    
    //             break; 
    //         // 404请求不存在
    //         case 404:
    //             Toast({
    //                 message: '网络请求不存在',
    //                 duration: 1500,
    //                 forbidClick: true
    //             });
    //             break;
    //         // 其他错误，直接抛出错误提示
    //         default:
    //             Toast({
    //                 message: error.response.data.message,
    //                 duration: 1500,
    //                 forbidClick: true
    //             });
    //     }
    // }
    console.error('network error!')
    return Promise.reject(error)
});

//返回一个Promise(发送post请求)
export function P(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res);
            }, err => {
                reject(err);
            })
            .catch((error) => {
                reject(error)
            })
    })
}
//返回一个Promise(发送get请求)
export function G(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {params})
            .then(res => {
                resolve(res)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}