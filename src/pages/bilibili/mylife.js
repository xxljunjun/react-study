/*
    类组件的生命周期
        ==>componentDidMount:dom加载完成,相同于vue组件的mounted
        ==>componentWillUnmount:相当于vue的beforeDestroy
        ==>sholdComponentUpdate:
        ==>componentDidUpdate:
    函数式组件的生命周期
*/
import React, { useState, useEffect } from "react";
const Mylife = (props) => {
  // console.log(props);
  let [name, setName] = useState(`小溪流`);
  let add = () => {
    setName(`小溪流+${1}`);
  };
  //生命周期功能--------第二个参数是为数组，它相当于是 componentDidUpdate()
  useEffect(() => {
    // 相当于是 componentDidMount()
    console.log("componentDidMount111触发了！！！");
    return () => {
      // 相当于是 componentWillUnmount()
      console.log("componentWillUnmount111触发了！！！");
    };
  }, []);

  useEffect(() => {
    return undefined;
  }, []);

  return (
    <>
      <span>{name}</span>
      <button onClick={add}>点我小溪流加一</button>
    </>
  );
};
export default Mylife;

// class TestLife extends React.Component{
//   render(){
//       return
//           <>11</>

//   }
//   componentDidMount(){
//       //dom加载完成
//       //相当于vue的mounted
//       console.log("------------,componentDidMount")
//   }
//   sholdComponentUpdate(){
//       console.log("------------,sholdComponentUpdate")
//       console.log(this.state)
//       return true

//   }
//   componentDidUpdate(){
//       console.log("------------,componentDidUpdate")
//       //调接口，更新完成
//        //相当于vue中的updated
//   }
//   componentWillUnmount(){
//       console.log("------------,componentWillUnmount")
//       //相当于vue的beforeDestroy
//   }

// }
// export default TestLife
