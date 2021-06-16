
import React from "react";
import "@/assets/sass/moduleTwo.scss";
import img from '@/utils/img'
//所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。
//不会尝试更改入参的函数称为纯函数

//类组件
// 特点1：它有state
// 特点2：它有生命周期
// 特点3：它有上下文、ref、this 等特性
// 特点4：与函数式组件相比，性能较差
const obj = {
  avatarUrl: img.pika,
  name: "鸣人"
}
export default class moduleTwo extends React.Component {
  render() {
    return (
      <div className="moduleTwo">
        <div className="title">测试父子组件通信</div>
        <Child name="小溪流的年龄是" age={12} />
        <Comment author={obj} text="书写一些东西" date='2021年10月10日' />
      </div>
    )
  }
}

//函数式组件(无状态组件)
// 特点1：没有state，所以被为“无状态组件”
// 特点2：没有生命周期
// 特点3：没有上下文、ref、this 等特性
// 特点4：与类组件相比，性能更高
// export default () => {
// 	return (
// 		<div>22222222222</div>
// 	)
// }

//props组件传值(组件的嵌套)
function Child(props) {
  return (
    <h1>子组件，{props.name}{props.age}</h1>
  )
}
function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {props.date}
      </div>
    </div>
  );
}
