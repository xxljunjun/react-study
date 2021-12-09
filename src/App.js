import React from "react";
//引入组件
import { Layout } from "@/components/index";
//hash路由,Browser路由BrowserRouter
import { HashRouter } from "react-router-dom";
//引入context上下文
import ThemeCtx from "@/utils/theme";
//集成状态管理
import { Provider } from "mobx-react";
import store from "./store/index.js";

//类组件
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#ffffff",
      background: "#000000",
    };
  }
  render() {
    let { color, background } = this.state;
    return (
      <HashRouter>
        <ThemeCtx.Provider value={{ color, background }}>
          <Provider store={store}>
            <Layout />
          </Provider>
        </ThemeCtx.Provider>
      </HashRouter>
    );
  }
}

//导出App根组件
export default App;
