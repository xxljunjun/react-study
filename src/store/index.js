import { makeAutoObservable, makeObservable,observable,action} from 'mobx'

//分modules
import TodoStore from "./modules/todo"
import MusicStore from './modules/music'

class Store {
    constructor(){
        this.todo=new TodoStore
        this.music=new MusicStore
        // makeAutoObservable(this)
        makeObservable(this,{
            msg:observable,
            changMsg:action
        })
    }
    msg="hello"
    changMsg(payload){
        this.msg=payload
    }
}

export default new Store