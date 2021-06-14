import React from 'react'
import img from '@/utils/img'
// 什么是JSX？
// JSX = JavaScript XML 是一种js语法糖
// 为什么要使用JSX？
// 在React开发中JSX语法是可选的，但是React官方建议使用JSX，JSX代码更加优雅、便于维护。

// JSX 是变量、是对象、React元素
// JSX是可嵌套的
// JSX中，可以使用表达式，但要使用 {} 包起来
// JSX中，class 这个属性要写成 className
// JSX中，for 这个属性要写成 htmlFor
// JSX中，注释内容也要使用 {} 包起来
// JSX中，默认可以防注入攻击（XSS）

// React元素 vs. React类
// 简单理解：视觉上看起来像是HTML结构的玩意，就是React元素，也叫JSX

const bian = 'jsx可以是一个变量'
const ele7 =<div>{bian}</div>

const red = 'he'
const ele1 = <div className={red}>hello 2009</div> //jsx可以是变量
const ele2 = <div>{Math.random()}</div>  //jsx可以是表达式
const ele3 = <div>{ele2}</div>  
const ele4 = ()=><div>{ele1}</div>
function ele5(){
    return ele4()
}

// 如果不使用JSX语法糖，应该像这样创建React元素
const ele6 =React.createElement(
    'div',
    {className:'jsx',title:'123',id:'box'},
    'pooooooooo'
)



//抛出一个类组件，再App.js中引入，最后挂载到根节点上
//  class jsxtext extends React.Component {
//     render() {
//         const bol =Math.random() >0.5
//         return (
//             <div>
//                 {ele1}
//                 {ele2}
//                 {ele3}
//                 {/* 这是react组件中的注释功能 */}
//                 {ele4()}
//                 {ele5()}
//                 <img className="img" src={img.pika} />
//                 {ele6}
//                 {bol ? ele1:ele2}
//                 {ele7}
//             </div>
//         )
//     }
// }
//抛出一个函数式组件(无状态组件)
// 用function关键来定义，也可以用箭头函数来定义
export default ()=>{
    const bol =Math.random() >0.5
    return (
        <div>
            {ele1}
            {ele2}
            {ele3}
            {/* 这是react组件中的注释功能 */}
            {ele4()}
            {ele5()}
            <img className="img" src={img.pika} />
            {ele6}
            {bol ? ele1:ele2}
            {ele7}
        </div>
    )
}
