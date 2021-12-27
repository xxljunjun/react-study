/*
    类组件的生命周期
        ==>componentDidMount:dom加载完成,相同于vue组件的mounted
        ==>componentWillUnmount:相当于vue的beforeDestroy
        ==>sholdComponentUpdate:
        ==>componentDidUpdate:
    函数式组件的生命周期
*/
// import React, { useState, useEffect } from "react";
// const Mylife = (props) => {
//   // console.log(props);
//   let [name, setName] = useState(`小溪流`);
//   let add = () => {
//     setName(`小溪流+${1}`);
//   };
//   //生命周期功能--------第二个参数是为数组，它相当于是 componentDidUpdate()
//   useEffect(() => {
//     // 相当于是 componentDidMount()
//     console.log("componentDidMount111触发了！！！");
//     return () => {
//       // 相当于是 componentWillUnmount()
//       console.log("componentWillUnmount111触发了！！！");
//     };
//   }, []);

//   useEffect(() => {
//     return undefined;
//   }, []);

//   return (
//     <>
//       <span>{name}</span>
//       <button onClick={add}>点我小溪流加一</button>
//     </>
//   );
// };
// export default Mylife;




/*
  + 初始化阶段：由ReactDOM.render()触发---初次渲染
      ==>constructor
      ==>componentWillMount
      ==>render
      ==>componentDidMount
  + 更新阶段：由组件内部this.setState()或父组件的render触发
      ==>sholdComponentUpdate
      ==>componentWillUpdate
      ==>render
      ==>componentDidUpdate
  + 卸载阶段：由ReactDOM.unmountComponentAtNode()触发
      ==>componentWillUnmount
*/
import React from "react";
class TestLife extends React.Component{
  constructor(props){
    console.log('TestLife---,constructor')
    super(props)
    this.state= {
      count:0,
    }
  }
  add = ()=>{
    let {count} = this.state
    this.setState({count:++count})
  }
  force = ()=>{
    this.forceUpdate()
  }
  render(){
    console.log('TestLife---,render')
    let {count} = this.state
      return(
          <>
            <div>这是一个数字:{count}</div>
            <button onClick={this.add}>点我增加nums</button>
            <button onClick={this.force}>点我强制更新</button>
            <Son count={count}></Son>
          </>
      )
  }
  componentWillMount(){
    //dom挂载前
    console.log("TestLife---,componentWillMount")
  }
  componentDidMount(){
    //dom挂载后
    console.log("TestLife---,componentDidMount")
  }
  shouldComponentUpdate(){
    //询问是否更新
    console.log("TestLife---,sholdComponentUpdate")
    return true
  }
  componentWillUpdate(){
    //dom更新前
    console.log("TestLife---,componentWillUpdate")
  }
  componentDidUpdate(){
    //dom更新后
    console.log("TestLife---,componentDidUpdate")
  }
  componentWillUnmount(){
    //组件卸载前
    console.log("TestLife---,componentWillUnmount")
  }

}
export default TestLife

class Son extends React.Component{
  constructor(props){
    console.log('son---,constructor')
    super(props)
  }
  componentWillReceiveProps(props){
    console.log('son---',"componentWillReceiveProps",props)
  }
  render(){
    console.log('son---,render')
    let {count} = this.props
    return(
      <div>son{count}</div>
    )
  }
  componentWillMount(){
    //dom挂载前
    console.log("son---,componentWillMount")
  }
  componentDidMount(){
    //dom挂载后
    console.log("son---,componentDidMount")
  }
  shouldComponentUpdate(){
    //询问是否更新
    console.log("son---,sholdComponentUpdate")
    return true
  }
  componentWillUpdate(){
    //dom更新前
    console.log("son---,componentWillUpdate")
  }
  componentDidUpdate(){
    //dom更新后
    console.log("son---,componentDidUpdate")
  }
  componentWillUnmount(){
    //组件卸载前
    console.log("son---,componentWillUnmount")
  }
}


/*
  最新的react中的生命周期中
    
*/
