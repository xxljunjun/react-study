import axios from './axios'

//获取QQ音乐
//传参：
export function fetchQQMusic(params){
    return axios({
        url:'/soso/fcgi-bin/client_search_cp',
        method:"GET",
        params
    })
}

export default {
    fetchQQMusic
}



