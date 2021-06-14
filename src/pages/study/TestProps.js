import React from "react"

// 在JSX中可以直接嵌套一个由React元素构成的数组
const eleArr =[
    <div key='1'>react元素构成的数组一</div>,
    <div key='2'>react元素构成的数组二</div>,
    <div key='3'>react元素构成的数组三</div>
]





// 类组件：用class关键来定义的组件
// 特点1：它有state
// 特点2：它有生命周期
// 特点3：它有上下文、ref、this 等特性
// 特点4：与函数式组件相比，性能较差
// class TestProps extends React.Component{
//     //构造器是一个生命周期
//     //当React类被实例化变成React元素(JSX)时被调用
//     constructor(props){
//         super(props)
//         this.state={
//             msg:'hello state'
//         }
//         console.log('---->',props)
//         console.log('---->',this)
//     }
//     //render是类组件必须的生命周期
//     // 它表示，在真实DOM将要渲染的视图结构
//     render(){
//         //do something
//         //结构赋值
//         const { msg }=this.state
//         let {title,bol,arr,user,ele} =this.props
//         return (
//             <div>
//                 <h4>我是看看流程通没通------自定义内容</h4>
//                 <h4>{msg}-----我是this.state里面的msg</h4>
//                 <hr/>
//                 <h4>{title}------我的props的title</h4>
//                 <h4>{ele}------我的props的ele-React元素</h4>
//                 <div>
//                     <span>{user.name}</span>
//                     <span>----</span>
//                     <span>{user.age}</span>
//                     ------我的props的user-对象
//                 </div>
//                 {
//                     bol && arr.map((ele,idx)=> <div key={idx}>{ele*1000}</div>)
//                 }
//                 {/* 在JSX中，可以直接渲染一个由React元素构成的数组变量 */}
//                 { eleArr }
//             </div>
//         )
//     }
// }




// 函数式组件：用function关键字或箭头函数定义的组件
// 特点1：没有state，所以被为“无状态组件”
// 特点2：没有生命周期
// 特点3：没有上下文、ref、this 等特性
// 特点4：与类组件相比，性能更高
export default (props)=>{
    let {title,bol,arr,user,ele} =props
    return (
        <div>
            {/* <h4>我是看看流程通没通------自定义内容</h4> */}
            {/* <h4>{msg}-----我是this.state里面的msg</h4> */}
            <hr/>
            <h4>{title}------我的props的title</h4>
            <h4>{ele}------我的props的ele-React元素</h4>
            {
                user && <div>
                <span>{user.name}</span>
                <span>----</span>
                <span>{user.age}</span>
                ------我的props的user-对象
            </div>
            }
            {
                bol && arr.map((ele,idx)=> <div key={idx}>{ele*1000}</div>)
            }
            {/* 在JSX中，可以直接渲染一个由React元素构成的数组变量 */}
            { eleArr }
        </div>
    )
}
// export default TestProps