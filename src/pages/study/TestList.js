import React from 'react'

class TestList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            list:[
                {id:1,name:'xxl',age:21,classBe:2009},
                {id:2,name:'LJJ',age:22,classBe:2007},
                {id:3,name:'ZTF',age:23,classBe:2006},
                {id:4,name:'PDF',age:24,classBe:2004}
            ]
        }
    }
    // 自定义的视图渲染方法
  // 当数组不需要进行二次转化处理时，建议用这种写法
    renderList1(){
        let  { list } = this.state
        return list.map((ele,idx)=>{
            return (
                <div key={idx}>
                    <span>{ele.name}</span>,
                    <span>-----</span>,
                    <span>{ele.age}</span>,
                    <span>-----</span>,
                    <span>{ele.classBe}</span>
                </div>
            )
        })
        
    }
    // 自定义的视图渲染方法
  // 当数组需要进行二次转化处理时，建议用这种写法
    renderList2(){
        let { list } = this.state
        let arr =[]
        list.map((ele,idx)=>{
            // ele.age = ele.age+10
            ele.checked=ele.checked || false 
            arr.push(   
                <div key={ele.id}>
                    <input type="checkbox" checked={ele.checked} onChange={(e)=>this.rowChange(e,idx,ele)}/>,
                    <span>{ele.name}</span>,
                    <span>-----</span>,
                    <span>{ele.age}</span>,
                    <span>-----</span>,
                    <span>{ele.classBe}</span>
                    <button onClick={()=>this.rowClick(ele)}>操作</button>
                </div>
            )
        })
        return arr

    }
    rowChange(e,idx,ele){
        console.log(ele)
        console.log(e.target.checked,idx)
        this.setState(state=>{
            state.list[idx].checked = e.target.checked
            return {
                list:state.list
            }
        })
    }
    rowClick(row){
        console.log('row', row.id, row)
    }
    render(){
        let { list } = this.state
        // 构造一个数组，来承载JSX对象(React元素)
        let arr =[]
        list.map((ele)=>{
            // ele.age = ele.age+10
            arr.push(
                <div key={ele.id}>
                    <span>{ele.name}</span>,
                    <span>-----</span>,
                    <span>{ele.age}</span>,
                    <span>-----</span>,
                    <span>{ele.classBe}</span>
                </div>
            )
        })
        return (
            <div>
                <h4>列表循环测试</h4> 
                <hr/>
                {/* 语法：JSX支持直接渲染由React元素构造成的数组 */}
                {
                    [
                        <div key='1'>111</div>,
                        <div key='2'>222</div>,
                        <div key='3'>333</div>,
                        <div key='4'>444</div>,
                    ]
                }
                <hr/>
                {/* 以下两种写法等价的，区别是一个封装了，另一个未封装 */}
                {this.renderList1()}
                <div>----------</div>
                {
                     list.map((ele,idx)=>(
                        <div key={idx}>
                            <span>{ele.name}</span>,
                            <span>-----</span>,
                            <span>{ele.age}</span>,
                            <span>-----</span>,
                            <span>{ele.classBe}</span>
                        </div>
                     ))
                }
                <hr/>
                { /*以下两种写法也是等价的，区别在于一个放在render中直接处理，另一个封装成渲染方法 */}
                {this.renderList2()}
                <div>----------</div>             
                {arr}                   
            </div>
        )
    }
}
export default TestList