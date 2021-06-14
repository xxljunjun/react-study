# 一、Context上下文
+ react进行状态管理的方式redux和Mobx,已经集成了context上下文。
+ 什么是Context上下文
```
    //官方解释： Context 提供了一个无需为每层组件手动添加 props，就能在组件树间进行数据传递的方法。
    //自己理解：在根组件中注入数据，然后所有的组件树种的组件节点都可以访问
```
+ 1、在utils文件夹中theme.js创建一个用于主题色的上下文Context
```
import React from 'react'
const ThemeCtx = React.createContext()
export default ThemeCtx
```
+ 2、在根组件用<ThemeCtx.Provider>包裹起来
```
//语法：<ThemeCtx.Provider></ThemeCtx.Provider>包裹起来，并传值
class App extends React.Component{
    render(){
        return (
            <ThemeCtx.Provider value={{color,background}}>
                <div>
                    <TestContext/>
                </div>
            </ThemeCtx.Provider>
        )
    }
}
```
+ 3、在任意子组件中
```
//方法一
export default class TestContext extends React.Component{
    render(){
        return (
            <ThemeCtx.Consumer>
                {
                    (value)=>(
                        <div style={{color:value.color,background:value.background}}>
                            <h4>测试上下文</h4>
                            <h4>我是TestContext子组件的页面</h4>
                        </div>
                    )
                }
               
            </ThemeCtx.Consumer>
           
        )
    }
}
```
```
//方法二（用this.context接收参数）
// class TestContext extends React.Component{
//     render(){
//         console.log('this.context', this.context)
//         const theme = this.context
//         return (                 
//              <div style={{color:theme.color,background:theme.background}}>
//                 <h4>测试上下文</h4>
//                 <h4>我是TestContext子组件的页面</h4>
//                 <hr/>
//             </div>
           
//         )
//     }
// }
// TestContext.contextType = ThemeCtx
// export default TestContext

//// 上下文 Context
// 在根组件上注入数据，然后组件树中的所有组件节点都可访问该数据了
// 特点：数据只能单向传递，即从根组件向后代组件传递
// 应用实践：状态管理就是借助了上下文来实现数据传递的
```

# 二、高阶组件Hoc
+ 1、高阶组件的概念
    * 作用：它是React中业务逻辑复用的一种解决方案
    * 高阶组件是基于React组合特性而得来的一种设计模式、软件开发经验
    * 高阶组件，也被称之为高阶函数、纯函数、容器组件
+ 2、基本语法
```
//在工作中utils/Hoc文件夹下存放高阶组件-----WrappedComponent是UI组件
import React from "react"
export default function 高阶函数名(WrappedComponent){
    return class extends React.Component{
        //逻辑处理，调接口等操作
        render(){
            return (
                <div>
                    <WrappedComponent/>
                </div>
            )
        }
    }
}


//在需要 逻辑的地方引入

```
+ 3、如何在当下环境支持ES6的装饰器语法？
```
npm install @babel/plugin-proposal-decorators -S
npm install @babel/plugin-proposal-class-properties -S
npm install babel-eslint -S    //它可以配合 eslint 一起工作

// 配置babel，参考 babel.config.js 文件
module.exports ={
    "plugins":[
        ["@babel/plugin-transform-destructuring"],
        // 下面两个插件的作用是编译装饰器语法
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose" : true }]
    ]
}

// 配置eslint，参考 .eslintrc.json 文件
{
    "parser": "babel-eslint",
}

```
+ 4、在需要调用高阶组件的文件中
```
import { roleHoc,comment,themeHoc} from "@/utils/Hoc/index"
@comment
 class TestHoc extends React.Component{
     render(){
         //这个this.props就是高阶组件中传过来的数据
         console.log(this.props)
     }
 }
```

# 三、静态类型检测和PropsTypes类型检查
```
cnpm install prop-types -S
```
组件名.propTypes={                   //小写
    list:PropTypes.array.isRequired,          //大写
    msg:PropTypes.string.isRequired,
    onChange:PropTypes.func,
    gender:PropTypes.oneOf(["男","女"]).isRequired
}

# 四、Fragments碎片
class TestHoc extends React.Component{
    render(){
        return(
            <React.Fragment>
                <h4>------</h4>
            </React.Fragment>
        )
    }
}
//等同于
class TestHoc extends React.Component{
    render(){
        return(
            <>
                <h4>------</h4>
            </>
        )
    }
}

# 五、Hooks入门
+ 1、什么是Hooks?
    * Hook 是一个特殊的函数，它可以让你“钩入” React 的特性。
    *  Hooks 一套API，用于解决函数式组件中缺少类组件相关特性的问题
    * 无状态组件，它只有一个好处——性能高
    * 天然缺陷：没有this，没有state状态，没有生命周期，没有上下文、没有ref
    * 但是在工作实践中，要在函数式组件中使用类组件的相关特性，该怎么办？
    * 解决方案：使用 Hooks API 来搞定
+ 2、引入的方式
```
import React,{useState,useEffect} from 'react'
//useState:声明一个变量
    语法：const [count,setCount] = useState(0)
    setCount(++count)-------------改变count的值
//useEffect:可以让你在函数组件中执行副作用操作,使用react的生命周期特性
    语法：useEffect(fn,[])
    fn：// 相当于是 componentDidMount()
    fn需要返回一个函数：// 相当于是 componentWillUnmount()
    []:相当于是 componentDidUpdate()，不能省略
```
# 六、react安装路由router
+ 1、安装路由
```
//react的路由有其他团队维护https://reactrouter.com/
npm install react-router-dom -S
//react-router-dom 上面的重要方法：
    NavLink/Link：
    Route：
    Switch：作用：用于把 Route数组组件包裹起来，当Url变化时从上到下进行匹配，匹配成功即终止
            当Route数组被包裹起来，建议给 Route都加上exact属性。
            在生成 Route 数组时，其外层不能包裹任何其实HTML节点，它的直接父组件只能是 Switch
    Redirect：重定向<Redirect from="/*" to="/"/>
    HashRouter/BrowserRouter：两种模式的路由（在根组件中包裹）
    withRouter:高阶组件，解决没有被Route组件包裹的React组件没有路由Api的问题
//编程式路由跳转、路由动态传递


//app.js用HashRouter包裹
import { HashRouter } from "react-router-dom "




    
```
+ 2、解决没有被Route组件包裹的React组件没有路由Api的问题
```
//凡是被 Route 组件直接包裹的React组件中，其props上都路由相关的API

// 在类组件中，只能使用 withRouter 来解决问题。
// 在无状态组件中，可以使用 withRouter，也可以使用 useHistory来解决问题。

// withRouter 是一个高阶组件，让那些没有被Route组件直接包裹的React组件拥有路由API
// useHistory 是ReactRouter提供的Hooks API，帮助我们在无状态组件中使用路由API


```
```
import { useHistory, withRouter} from 'react-router-dom'    //按需引入
// 一、使用Hooks写法，来解决React无状态组件中没有路由API的问题
export default props=>{
    const history = useHistory()
    console.log(history)
    return (
        <div className="qf-header">
            <h2>小溪流的前端之旅</h2>
        </div>
    )
}

// 二、使用withRouter高阶组件来解决React无状态组件中没有路由API的问题
export default withRouter(props=>{
    console.log('---header props', props)
    return (
        <div className="qf-header">
            <h2>小溪流的前端之旅</h2>
        </div>
    )
})

// 三、使用 withRouter高阶组件，解决React类组件中没有路由API的问题
// 有两种写法：装饰器的写法，或者 ES5函数调用的写法
// @withRouter
// class Header extends React.Component{
//     render(){
//         console.log('---header props', this.props)
//         return (
//             <div className="qf-header">
//                 <h2>小溪流的前端之旅</h2>
//             </div>
//         )
//     }
// }
// export default Header
// export default withRouter(Header)
```
# 七、react状态管理rudux,mobs
+ 1、安装状态管理
```
//跨平台开发app
//小程序
//mobs + mobx-react --------------小项目
//rudux + rudux-react-------------大项目

    npm install mobs -S

//在src中新建 store/index.js，代码如下
    import { makeObservable,action,observable } from 'mobx'
    class Store {
    constructor() {
        makeAutoObservable(this,{
            msg:observable,
            changeMsg:action
        })
    }
    msg = 'hello'
    changeMsg(payload) {
        this.msg = payload
    }
    }
    export default new Store()

//在App.js中，代码如下
    import { Provider } from 'mobx-react'
    import store from './store/index.js'

    export default function App() {
    return(
        <Provider store={store}>
        <Layout />
        </Provider>
    )
    }

//在页面组件中代码如下：
    import { inject, observer } from 'mobx-react'
    export default inject('store')(observer(props=>()))

//在页面中，使用 props.store 来访问 共享的数据和action方法。
```
# 八、react安装axios-----http请求工具
+ 1、创建axios.js和api.js
```
//axios.js
    去axios的npm官网copy

//api.js
    export function fetchQQMusic(params){
        return axios({
            url:'/soso/fcgi-bin/client_search_cp',
            method:"GET",
            params
        })
    }
```
+ 2、在react.config.js文件中配置跨域请求服务
```
https://c.y.qq.com/soso/fcgi-bin/client_search_cp

proxy:{
    "/soso":{
        target:'https://c.y.qq.com',
        changeOrigin:true
    }
}
```
# 九、安装ui组件库Ant-Design
+ 1、安装ui组件库
```
    npm install antd -S

//在main.js中引入css文件
    import 'antd/dist/antd.css'
```
+ 2、了解UI组件库的安装less文件引入
```
//在webpack中查找


```
+ 3、改变UI组件库的主题
```
ant-design-----------文档-----------定制主题

//配置引入less文件
import 'antd/dist/antd.less'

//修改颜色
{test:/\.less$/,use:[
    {loader:'style-loader'},
    {loader:'css-loader'},
    {loader:'less-loader',options:{
        lessOptions: { 
            javascriptEnabled: true,
            modifyVars: {
                'primary-color': '#00ff00',
            },
        },
    }},
]}
```

    
