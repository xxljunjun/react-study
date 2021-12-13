//非受控组件
// import React from "react";
// class InputComponent extends React.Component {
//   submit = (e) => {
//     console.log(e);
//     e.preventDefault();  //阻止默认事件
//     console.log(this);
//     let { username, password } = this;
//     alert(`需要提交的账号是${username.value}密码是${password.value}`);
//   };
//   render() {
//     return (
//       <>
//         <form action="http://www.baidu.com" method="get">
//           <input type="text" ref={(c) => (this.username = c)} name="username" />
//           <input
//             type="password"
//             ref={(c) => (this.password = c)}
//             name="password"
//           />
//           <button onClick={this.submit}>点我拿到form表单的值</button>
//         </form>
//       </>
//     );
//   }
// }
// export default InputComponent;

//受控组件形式一
// import React from "react";
// class InputComponent extends React.Component {
//   state = {
//     username: "",
//     password: "",
//   };
//   submit = (e) => {
//     console.log(e);
//     e.preventDefault();
//     console.log(this);
//     let { username, password } = this.state;
//     alert(`需要提交的账号是${username}密码是${password}`);
//   };
//   userChange = (e) => {
//     console.log(e.target.value);
//     this.setState({ username: e.target.value });
//   };
//   passChange = (e) => {
//     console.log(e.target.value);
//     this.setState({ password: e.target.value });
//   };
//   render() {
//     return (
//       <>
//         <form action="http://www.baidu.com" method="get">
//           <input type="text" name="username" onChange={this.userChange} />
//           <input type="password" name="password" onChange={this.passChange} />
//           <button onClick={this.submit}>点我拿到form表单的值</button>
//         </form>
//       </>
//     );
//   }
// }
// export default InputComponent;

//受控组件形式二函数柯里化
// import React from "react";
// class InputComponent extends React.Component {
//   state = {
//     username: "",
//     password: "",
//   };
//   submit = (e) => {
//     console.log(e);
//     e.preventDefault();
//     console.log(this);
//     let { username, password } = this.state;
//     alert(`需要提交的账号是${username}密码是${password}`);
//   };
//   userChange = (e) => {
//     console.log(e.target.value);
//     this.setState({ username: e.target.value });
//   };
//   passChange = (e) => {
//     console.log(e.target.value);
//     this.setState({ password: e.target.value });
//   };
//   submitChange = (val) => {
//     //柯里化函数
//     console.log(val);
//     return (e) => {
//       console.log(`${val}的值是${e.target.value}`);
//       this.setState({ [val]: e.target.value });
//     };
//   };
//   render() {
//     return (
//       <>
//         <form action="http://www.baidu.com" method="get">
//           <input
//             type="text"
//             name="username"
//             onChange={this.submitChange("username")}
//           />
//           <input
//             type="password"
//             name="password"
//             onChange={this.submitChange("password")}
//           />
//           <button onClick={this.submit}>点我拿到form表单的值</button>
//         </form>
//       </>
//     );
//   }
// }
// export default InputComponent;

//受控组件形式三
import React from "react";
class InputComponent extends React.Component {
  state = {
    username: "",
    password: "",
  };
  submit = (e) => {
    console.log(e);
    e.preventDefault();
    console.log(this);
    let { username, password } = this.state;
    alert(`需要提交的账号是${username}密码是${password}`);
  };
  submitChange = (val, e) => {
    console.log(`${val}的值是${e.target.value}`);
    this.setState({ [val]: e.target.value });
  };
  render() {
    return (
      <>
        <form action="http://www.baidu.com" method="get">
          <input
            type="text"
            name="username"
            onChange={(e) => this.submitChange("username", e)}
          />
          <input
            type="password"
            name="password"
            onChange={(e) => this.submitChange("password", e)}
          />
          <button onClick={this.submit}>点我拿到form表单的值</button>
        </form>
      </>
    );
  }
}
export default InputComponent;
