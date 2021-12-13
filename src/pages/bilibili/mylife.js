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

  useEffect(() => {
    // 相当于是 componentDidMount()
    return () => {
      // 相当于是 componentWillUnmount()
    };
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
//   }
//   componentWillUnmount(){
//       console.log("------------,componentWillUnmount")
//       //相当于vue的beforeDestroy
//   }

// }
// export default TestLife
