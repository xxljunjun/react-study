# 一、进入react学习前的准备
+ 一般react开发都是用于后台管理系统的开发
+ 技术栈：
    * Webpack----->打包器(入口，输出，loader，插件)
    * Babel----->javascript语法编辑器，转化成浏览器能兼容的ES5语法
    * ESlint  JSlint----->可组装的JavaScript和JSX检查工具
    * React + React-Router-Dom
    * Sass---------->世界上最成熟、最稳定、最强大的专业级CSS扩展语言！
    * Axios---ajax请求
    * Antd---react的UI组件库
    * Mobx和redux---react的状态管理工具基于flux开发的
    * ES6/TS
    * react的工程化架构都基本不一样

# 二、webpack的安装和使用
+ 作用：是当下前端工程化环境中使用最为广泛的构建工具，它的作用是把比较新的前端技术和文件模块，编译打包成浏览器能够识别、并且能够尽可能兼容主流浏览器的代码（HTML、CSS、ES5），它就是一个打包器。(一切皆模块)
+ 安装webpack
* webpack 是核心库，它提供了很多 API，可以用于编程
* webpack-cli 是命令行工具，它提供了一些很好用的命令行
入口
出口
loader
插件---在GitHub下多如牛毛

```
cnpm install webpack -g
cnpm install webpack-cli -g
cnpm install webpack -D
cnpm install webpack-cli -D

```
webpack --- webpack的核心库里面有api提供编程
webpack-cli --- webpack-cli是命令行工具提供script命令
# 三、项目初始化实现打包功能
+ 创建react-xxl项目文件夹
+ 执行npm init得到package.json文件
+ 创建public静态资源文件夹,在里面创建index.html文件
+ 创建src文件夹，在src文件夹下创建main.js入口文件
+ 创建react.config.js文件,在其中配置文件
```
const path =require('path');

module.exports ={
    //入口，dirname是node.js的变量代表当前目录文件夹
    // entry:path.resolve(__dirname,'./src/main.js'),
    entry:{
        //给路口文件一个名字，叫app(可以使用绝对路径，也能使用相对路径)
        //app:path.resolve(__dirname, './src/main.js'),
        app:'./src/main.js'
    },
    //出口
    output:{
        filename:'[name].[chunkhash].js',//把src下的js文件集合到这里
        path:path.resolve(__dirname,'./dist'),//把文件打包输出到dist文件夹下，只能写绝对路径
        publicpath:'qf',//可以给url添加前缀
    },   
}
```
+ 配置package.json文件
    //webpack-cli提供的命令行
    //webpack打包时默认使用webpack.config.js文件，可以直接使用webpack
    webpack --config react.config.js
```
    "build": "webpack --config react.config.js",
```
# 四、 开启服务器
1/执行npm start能把项目跑起来和有热更新功能
2/打包完自动插入index.html当中
+ 安装开启服务所需的包
```
npm install --save-dev webpack-dev-server //项目安装
npm install webpack-dev-server //全局安装
//webpack-dev-server是使用express来编写用于创建本地node.js本地服务器的包
```
webpack-dev-serve --config react-config.js  //这是旧版本的不可以，坑！
webpack serve --config react.config.js  //命令行
"start": "webpack serve --config react.config.js"
+ 配置react.config.js文件
+ 理解配置文件
```
module.exports ={
    devServer: {
        open:true, 
        port:8888,
        contentBase: './public'//指定本地服务的静态资源目录
    },
    
}
```
# 五、 让public文件夹和src文件夹建立联系
```
npm install --save-dev html-webpack-plugin

```
```
    

    //把打包后的js/css等资源，自动插入到public/index.html中(小功能html中的title)(开发环境下css/js也会插入到index.html中)
    const HtmlWebpackPlugin = require('html-webpack-plugin')
    //index.html也打包到dist文件夹下

    module.exports = {
        plugins:[
            new HtmlWebpackPlugin({
                template: path.resolve(__dirname, 'public/index.html'),
                 //<title><%= htmlWebpackPlugin.options.title %></title>更改index的title
                title: '2009'
            }),
        ]
    }
```
# 六、自动删除dist文件夹下的打包文件
```
npm install clean-webpack-plugin --save-dev

```
```
// 在每次执行npm run build时，自动帮我们清理掉dist(中文文档没有更新)
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports ={
    plugins:[
        new CleanWebpackPlugin()
    ],
}
```

# 七、热更新功能
+ 现在不用配置都可以实现热更新，但是如果层级太多就不能实现热更新，所以需要以下配置
```
这是中文文档（旧，已经被弃用了）
//引入webpack核心库
const webpack = require('webpack');

module.exports ={
    devServer:{
        hot:true  //启用本地node服务中的socket长连接来实时通信
    },
    plugins:{
        //HMR(hot Module Replacement)功能
        new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin()
    }
}
```

```
//英文文档
模块热替换HRM
module.exports ={
    devServer:{
        hot:true  //启用本地node服务中的socket长连接来实时通信
    },
}
```

# 八、使用css-loaders,scss-loader,file-loader

+ 配置css,sass文件,在webpack中一切皆模块,在main.js文件中可以使用import引入sass，css文件
```
//为了从 JavaScript 模块中 import 一个 CSS 文件,需要安装style-loader和css-loader，然后再配置规则
npm install --save-dev style-loader css-loader

//为了从 JavaScript 模块中 import 一个 saSS 文件,需要安装node-sass,sass-loader,style-loader和css-loader

npm install --save-dev style-loader css-loader
npm install node-sass -D
npm install sass-loader -D

//注意node-sass和node.js的版本问题

module.exports ={
    module:{
        //Webpack要根据你定义的规则，来编译各种不同后缀的模块
        rules:[
             // node-sass是sass编译器，它的作用是把sass-loader加载进来的scss文件编译成css文件。
            { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader','sass-loader'] },
        ]
    }
}
```
+ 配置图片img，在js文件中可以用import引入assets里面的图片 
```
npm install --save-dev file-loader      // file-loader的作用，是专门用于加载图片资源的。
//在main.js中引入图片
import pikaqiu from './assets/pikaqiu.jpg'
```
```
// 配置react.config.js文件
module:{
    //Webpack要根据你定义的规则，来编译各种不同后缀的模块
    rules:[
        { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
    ]
}
```

# 九、bable使用bable-loader
//在webpack中的bable-loader中安装使用bable，babel是js的编译器
+ 配置bable，js文件能编译成浏览器兼容的es5代码，是javascript语法编辑器，转化成浏览器能兼容的ES5语法
```
npm install bable-loader -D  //用于加载js文件交给@babel/系列的编译器
npm install @babel/core -D  //babel的核心库
npm install @babel/preset-env -D  //用于编译大多数的ES6语法编译成主流浏览器能识别的ES5代码

```
```
//配置react.config.js文件
module:{
    //Webpack要根据你定义的规则，来编译各种不同后缀的模块
    rules:[
        // babel-loader用于加载.js文件，并交给 @babel/* 编译器
        // 在处理js模块时，为了让编译速度更快，一定要忽略掉 node_modules
        // 要让 babel生效，在项目根目录，还要添加 babel.config.js 配置文件
        {text:/\.(js|jsx)$/,use:['bable-loader'],exclude:/node_modules/}
    ]
}
```

```
//配置babel.config.js文件
//要让 babel生效，在项目根目录，还要添加 babel.config.js 配置文件
module.exports ={
    // preset 是Babel对不同版本的js语法的一种支持编译
    // plugin 是用于某些特殊语法的支持与编译

    // @babel/preset-env作用是把ES6编辑成主流浏览器能够兼容的ES5代码
    'presets':["@babel/preset-env"]
}
```
# 十、ESlint使用ESlint-loader
主要作用检测js语法规范
+ 配置ESlint,当代码变化时，先检测代码规范，只有当代码满足规范时，才执行其它的。它的目标是提供一个插件化的javascript代码检测工具。
```
npm install eslint --save-dev !!!失效了
npm install eslint-webpack-plugin --save-dev

//配置.eslintrc.json文件，有6种文件格式,.js的优先级最高
{
    "parserOptions": {
        "ecmaVersion": 6,
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        //0,1,2
        //off,warn,error
        "semi": 0,//需要添加分号
        "no-console":"off"//打印控制台会失败规则
    }
}

//配置babel.config.js文件
const ESLintPlugin = require('eslint-webpack-plugin');
//ESlint-loader已经被抛弃了，Webpack最新的ESLint的使用方式，
module.exports ={
    plugins：[
        //Webpack最新的ESLint的使用方式
        new ESLintPlugin({
            exclude: ['node_modules']
        })
    ],
    devServer: {
        // 当本地项目运行时，发生errors错误，以覆盖层的方式遮住视图
        overlay:{
            errors:true
        }
    }
}


//两种推荐的ESLint的关闭方式
/* eslint-disable */
console.log('disable eslint')   // eslint-disable-line
/* eslint-enable */
```

# 十一、区别生产环境和开发环境
+ react.config.js，无论是执行npm run build和npm start都是从这个文件开始的。
```
npm install cross-env -D //一个很好用的包，nodejs进程里面添加环境变量,在启动环境中添加NODE_ENV环境变量
//配置package.json文件
"scripts": {
    "build": "cross-env NODE_ENV=production webpack --config react.config.js",
    "start": "cross-env NODE_ENV=development webpack serve --config react.config.js"
  },
```
```
//配置react.config.js
//nodejs的内置变量process.env,专门用来存储环境变量的
const isDev =process.env.NODE_ENV==='development'
const config ={
    // 在这里写 生产环境的配置
}
if(isDev){
    //开发环境
}
module.exports = config
```

# 十、配置@和可以省略文件后缀名
```
//webpack上面的方法
module.exports={
    resolve:{
        alias:{
            //添加@绝对路径
            "@":path.resolve(__dirname,'src')
        },
        //添加可以省略的文件后缀列表
        extensions: ['.js', '.jsx', '.ts', '.json', '.css', '.vue']
    },
    //一个可以让我们精准定位错误的代码的字符devtool！！！
    config.devtool="source-map"
}
```

# 十一、react实现Hello React
+ 安装react包
```
npm install react -S
npm install react-dom -S
npm install @babel/preset-react -D  //需要在babel.config.js中配置
```
+ 在loaders的规则中添加/\.(js|jsx)$/，Webpack要根据你定义的规则，来编译各种不同后缀的模块。
babel会决定交给@babel/preset-react还是@babel/preset-env来编译
```
//在App.js中
import React from 'react'

const ele =<h1>Hello react2009函数式组件</h1>
//类组件
// class App extends React.Component{
//     render(){
//         return ele
//     }
// }

//函数式组件
function App(){
    return ele
}

export default App
```
```
//在main.js中

import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

// render的第一个参数必须是一个 React组件
// 第二个参数是真实的DOM节点
ReactDOM.render(<App />, document.getElementById('root'))
```
