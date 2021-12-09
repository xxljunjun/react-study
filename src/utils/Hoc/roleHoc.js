import React from "react";
/*
    高阶组件
        ==>就是一个函数式组件返回一个类组件
*/
export default function roleHoc(WrappedComponent) {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userinfo: {},
      };
    }
    componentDidMount() {
      //调接口
      this.setState({
        userinfo: {
          role: 1,
          mobile: "13680086357",
          useraname: "小溪流",
        },
      });
    }
    render() {
      let { userinfo } = this.state;
      return (
        <div>
          <WrappedComponent {...this.props} userinfo={userinfo} />
        </div>
      );
    }
  };
}
