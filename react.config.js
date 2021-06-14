// 前端项目都运行在Node.js环境中，这个配置文件是项目运行或打包时执行的
// 它的语法是 CommonJS 模块化语法
const path =require('path');
// 用于把打包后的js/css等资源，自动插入到public/index.html中
const HtmlWebpackPlugin = require('html-webpack-plugin')
// 在每次执行npm run build时，自动帮我们清理掉dist
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
//ESlint-loader已经被抛弃了，Webpack最新的ESLint的使用方式，//ESlint，当代码变化时，先检测代码规范，只有当代码满足规范时，才执行其它的 后置loader的处理
const ESLintPlugin = require('eslint-webpack-plugin');

//nodejs的内置变量process.env,专门用来存储环境变量的
const isDev =process.env.NODE_ENV==='development'
console.log('-------------------------',isDev,process.env.NODE_ENV)
const config ={
    //在这里写生产环境的配置
    mode:"production",
    //入口
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
        publicPath:'',//可以给url添加前缀
    },
    plugins:[
        //用于把打包后的js/css等资源，自动插入到public/index.html中(开发环境下css/js也会插入到index.html中)
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'public/index.html'),
            //<title><%= htmlWebpackPlugin.options.title %></title>更改index的title
            title:'xxl的react首页'
        }),
        new CleanWebpackPlugin(),//清除dist文件夹
    ],
    //loaders
    // 在webpack眼中一切皆模块，每一种模块都需要对应的loaders来加载处理
    module:{
        //Webpack要根据你定义的规则，来编译各种不同后缀的模块
        rules:[
            // node-sass是sass编译器，它的作用是把sass-loader加载进来的scss文件编译成css文件。
            { test: /\.(css|scss)$/, use: ['style-loader', 'css-loader','sass-loader'] },
            // file-loader的作用，是专门用于加载图片资源的。
            { test: /\.(png|svg|jpg|gif)$/, use: ['file-loader'] },
            // babel-loader用于加载.js文件，并交给 @babel/* 编译器
            // 在处理js模块时，为了让编译速度更快，一定要忽略掉 node_modules
            // 要让 babel生效，在项目根目录，还要添加 babel.config.js 配置文件
            {test:/\.(js|jsx)$/,use:["babel-loader"],exclude:/node_modules/},
            {test:/\.less$/,use:[
                {loader:'style-loader'},
                {loader:'css-loader'},
                {loader:'less-loader',options:{
                    lessOptions: { 
                        javascriptEnabled: true,
                        modifyVars: {
                            'primary-color': '#c50000',
                        },
                    },
                }},
            ]}
            
        ]
    },
    resolve:{
        //别名
        alias:{
            //添加@绝对路径
            "@":path.resolve(__dirname,'src')
        },
        //添加可以省略的文件后缀列表
        extensions: ['.js', '.jsx', '.ts', '.json', '.css', '.vue']
    }
}

if(isDev){
    config.mode ='development'
    // 当程序报错时，会显示错误在源码中的位置，否则显示在编译后代码中的位置
    //一个可以让我们精准定位错误的代码的字符devtool
    config.devtool="source-map"
    config.plugins.push(
        //ESlint，当代码变化时，先检测代码规范，只有当代码满足规范时，才执行其它的 后置loader的处理
        new ESLintPlugin({
            exclude: ['node_modules']
        })
    )
    //本地服务
    // 要配合 webpack-dev-server 一起使用
    config.devServer={
        //可以在这里运行项目后打开浏览器，也可以在命令行配置--open打开
        open:true,
        port:8888,
        // host:'10.20.158.146',
        hot:true,//启用本地node服务中的socket长连接来实时通信
        contentBase: './public',//指定本地服务的静态资源目录
        // 当本地项目运行时，发生errors错误，以覆盖层的方式遮住视图
        overlay:{
            errors:true
        },
        //处理跨域
        proxy:{
            "/soso":{
                target:'https://c.y.qq.com',
                changeOrigin:true
            }
        }

    }
}

module.exports =config