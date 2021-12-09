import React from "react";

//引入高阶组件
import { roleHoc, comment, themeHoc } from "@/utils/Hoc/index";
@comment
@roleHoc
@themeHoc
class TestHoc extends React.Component {
  render() {
    console.log("由高阶组件传递过来的值", this.props);
    let { userinfo, list } = this.props;
    return (
      <div>
        <h4>测试高阶组件</h4>
        {list.map((ele) => (
          <div key={ele.id}>
            <span>{ele.id}</span>
            <span>{ele.content}</span>
            <span>{ele.user}</span>
            {userinfo.role == 1 && [
              <span key="1">------</span>,
              <span key="2">删除</span>,
            ]}
          </div>
        ))}
      </div>
    );
  }
}
export default TestHoc;

//另一种写法
//export default comment(TestHoc)
