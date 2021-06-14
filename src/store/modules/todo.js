import { makeAutoObservable,makeObservable,observable,computed,action } from 'mobx'

class TodoStore {
    constructor(){
        // makeAutoObservable(this)
        makeObservable(this,{
            list:observable,
            addList:action,
            delList:action,
            total:computed
        })
    }
    list = []
    addList(payload){
        this.list.push({id:Date.now(),task:payload})
    }
    delList(payload){
        this.list= this.list.filter(ele=>(ele.id!=payload))
        console.log(11)
    }
    get total(){
        return this.list.length
    }
}
export default TodoStore