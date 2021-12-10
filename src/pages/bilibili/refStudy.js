/*
    react中的ref的三种方式操作dom
        + 通过ref等于字符串的形式
            ==><input ref="input1"/>  //通过this.refs.input1访问dom
        + 通过内联回调函数实现
            ==><input ref={(c) => {this.input1ref = c}}  //会出现第一次获取的是null的dom节点
            ==> <input ref={this.ref1some} />  //缺点：要往组件上添加变量存储dom
                refInput1 = null;
        + 通过React.createRef()实现
            ==>  <input ref={this.textInput1} />  
                 textInput1 = React.createRef();
                 this.textInput1.current  //获取dom要用current
*/
import React from "react";
class RefStudy extends React.Component {
  refInput1 = null;
  refInput2 = null;
  textInput1 = React.createRef();
  textInput2 = React.createRef();
  state = {
    isHot: true,
  };
  altersomething = () => {
    // 方式一ref字符串形式
    // console.log(this.refs);
    // alert(this.refs.input1.value);

    // 方式二内联回调函数实现
    // let { input1ref } = this;
    // console.log(input1ref);
    // alert(input1ref.value);

    //方式2.5
    // alert(this.refInput1.value);

    //方式3
    let { textInput1 } = this;
    console.log("@", textInput1); //current
    alert(textInput1.current.value);
  };
  alertsome = () => {
    // 方式一ref字符串形式
    // console.log(this.refs);
    // alert(this.refs.input2.value);

    // 方式二内联回调函数实现
    // let { input2ref } = this;
    // console.log(input2ref);
    // alert(input2ref.value);

    //方式2.5
    // alert(this.refInput2.value);

    //方式3
    let { textInput2 } = this;
    console.log("@", textInput2); //current
    alert(textInput2.current.value);
  };
  changWeather = () => {
    let { isHot } = this.state;
    this.setState({ isHot: !isHot });
  };
  ref1some = (c) => {
    console.log("ccc", c);
    this.refInput1 = c;
  };
  ref2some = (c) => {
    console.log("ccc", c);
    this.refInput2 = c;
  };
  render() {
    let { isHot } = this.state;
    return (
      <>
        <div className="ref_box">
          {/* 方式1ref字符串形式 */}
          {/* <input ref="input1" />
          <button onClick={this.altersomething}>点我弹出信息</button>
          <br />
          <input ref="input2" onBlur={this.alertsome} />
          <hr /> */}
          {/* 方式2内联回调函数实现 */}
          {/* <input
            ref={(c) => {
              this.input1ref = c;
              console.log("@", c);
            }}
          />
          <button onClick={this.altersomething}>点我弹出信息</button>
          <br />
          <input
            ref={(c) => {
              this.input2ref = c;
            }}
            onBlur={this.alertsome}
          />
        </div> */}
          {/* 方式2.5联回调函数实现 */}
          {/* <input ref={this.ref1some} />
          <button onClick={this.altersomething}>点我弹出信息</button>
          <br />
          <input ref={this.ref2some} onBlur={this.alertsome} />
        </div> */}
          {/* 方式3通过React.createRef() */}
          <input ref={this.textInput1} />
          <button onClick={this.altersomething}>点我弹出信息</button>
          <br />
          <input ref={this.textInput2} onBlur={this.alertsome} />
        </div>
        <hr />
        <div>今天天气很{isHot ? "炎热" : "寒冷"}</div>
        <button onClick={this.changWeather}>点我改变天气</button>
      </>
    );
  }
}
export default RefStudy;
