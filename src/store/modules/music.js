import { makeObservable,action,observable } from 'mobx'
import { fetchQQMusic } from '@/utils/axios/api'

class MusicStore {
    constructor(){
        makeObservable(this,{
            musicArr:observable,
            changeList:action
        })
    }
    musicArr =[]
    changeList(payload){
        //调后端接口
        fetchQQMusic(payload).then(res=>{
            // console.log(res)
            this.musicArr=res.song.list
        })
    }
}
export default MusicStore