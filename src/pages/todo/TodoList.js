import React from "react"
import { inject,observer } from 'mobx-react'
import { useState } from 'react'


const Music =props=>{
    // console.log("tolist",props)
    let { todo } = props.store
    let [task,setTask] = useState('')

    const changMsg=()=>{
        props.store.changMsg('nihao')
    }
    const addTask = (e)=>{
        if(e.keyCode===13){
            //清空表单
            setTask('')
            //添加list一条数据
            todo.addList(task)
        }
    }
    const delTask = (e,ele)=>{
        e.preventDefault()
        todo.delList(ele.id)
    }

    return(
        <div>
            <h2>tosolist列表</h2>
            <h4>{props.store.msg}</h4>
            <button onClick={changMsg}>改变msg的值</button>
            <hr/>
            <input 
                type="text" 
                value={task} 
                onChange={e=>setTask(e.target.value)}
                onKeyUp={e=>addTask(e)}
            />
            {
                todo.list.map(ele=>(
                    <div key={ele.id}>
                        <span>{ele.id}</span>
                        <span>-------</span>
                        <span>{ele.task}</span>
                        <span>-------</span>
                        <a href="http://www.baidu.com" onClick={e=>delTask(e,ele)}>删除</a>
                    </div>
                ))
            }
            <h4>总共有 <span>{todo.total}</span> 个任务</h4>
        </div>
    )
}

export default inject('store')(observer(Music))