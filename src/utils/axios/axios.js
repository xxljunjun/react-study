import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://10.20.158.146:8888',
    timeout: 7000,
    headers: {}
});

//请求拦截
instance.interceptors.request.use(function (config) {
    //加token
    return config;
}, function (error) {
    return Promise.reject(error);
})

//请求响应
instance.interceptors.response.use(function (response) {
    //数据过滤
    console.log("response",response)
    let res  = null
    if(response.status===200){
        if( response.data &&  response.data.code===0 ){
            res = response.data.data
        }    
    }
    return res;
}, function (error) {

    return Promise.reject(error);
});

export default instance