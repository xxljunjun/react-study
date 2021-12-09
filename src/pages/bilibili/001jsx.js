import React from "react";
import Myson from "./son.js";
/*
  构造器constructor两个作用
      ==>初始化state
      ==>bind实例方法
      ==>props的用法就是想在构造器里面拿到自身实例
*/
class Onejsx extends React.Component {
  // constructor(props) {
  //   console.log("触发了构造函数");
  //   super(props);
  //   this.state = {
  //     isHot: true,
  //   };
  // }
  state = {
    isHot: true,
    p: {
      school: "嘉应学校",
      some: "生命科学学院",
      name: "xxl",
      age: 12,
    },
  };
  changeName = () => {
    console.log("准备去改父组件的值了！！！");
    // console.log("路由跳转", history);
    // history.back("/music/detail");
    // this.setState({
    //   p: {
    //     school: "嘉应学校",
    //     some: "生命科学学院",
    //     name: "junjun",
    //     age: 12,
    //   },
    // });
  };
  /**
   * @function:触发了1+n次渲染函数
   */
  render() {
    console.log("上下文", this.value);
    // console.log("触发了render函数");
    const { isHot, p } = this.state;
    return (
      <div
        onClick={this.changeWheather}
        className="jsx_box"
        style={{ color: "red" }}
      >
        今天天气很{isHot ? "炎热" : "凉爽"}
        <Myson {...p} changeName={this.changeName}>
          <div>{"我是父组件的值"}</div>
        </Myson>
      </div>
    );
  }
  /**
   * @function:触发了n次渲染函数
   */
  changeWheather = () => {
    // console.log("this指向", this);
    let { isHot } = this.state;
    this.setState({ isHot: !isHot });
  };
}
export default Onejsx;
