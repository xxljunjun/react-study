
import React,{useState,useEffect} from 'react'

//ES5写法
// function TestHooks(props){
//     return(
//         <div>
//             <h4>测试Hooks</h4>
//         </div>
//     )
// }



//ES6写法
const TestHooks = props =>{
    //变量
    let [count,setCount] = useState(1000)
    let [list,setList] = useState([{name:"小溪流",id:1}])
    let [msg,setMsg]= useState('hello word')
    let timer =null

    //方法
    let add = ()=>(
        setCount(++count)
    )
    let sub = ()=>(
        setCount(--count)
    )
    let listRender =()=>(
        list.map(ele=>(
            <div key={ele.id}>
                <span>{ele.name}</span>
                <span>-----</span>
                <span>{ele.id}</span>
            </div>
        ))
    )
    
    //使用react的生命周期特性
    //语法：useEffect(fn,[])
    // 第二个参数是为数组，它相当于是 componentDidUpdate()
    useEffect(()=>{
        timer=setTimeout(()=>{
            // 相当于是 componentDidMount()
            let res =[
                {name:"小米",id:1},
                {name:"小兰",id:2},
                {name:"百变",id:3},
                {name:"难受",id:4}
            ]
            setList(res)
        },2000)
        return ()=>{
            // 相当于是 componentWillUnmount()
            clearTimeout(timer)
        }
    },[])

    useEffect(()=>{
        setMsg(msg+"0")
        return undefined
    },[count])
    // 每当 count 发生变化时，这个副作用都会运行一遍



    //渲染
    return (
        <div>
            <h4>测试Hooks</h4>
            <h4>{count}</h4>
            <h4>{msg}</h4>
            <button onClick={()=>add()}>点击按钮增加</button>
            <button onClick={()=>sub()}>点击按钮减少</button>
            <hr/>
            {
               listRender() 
            }
        </div>
    )
}

export default TestHooks