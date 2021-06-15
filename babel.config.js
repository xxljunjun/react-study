module.exports ={
    //babel是js的编译器
    //preset--------------- es6 jsx ts coffeescript都是不同版本的js用不同的preset
    //两个重要概念preset和plugin
    //preset 是Babel对不同版本的js语法的一种支持编译
    //plugin 是用于某些特殊语法的支持编译,例如@babel/preset-env不支持编译装饰器语法

    //@babel/preset-env作用是把ES6编译成主流浏览器能够兼容的ES5代码
    "presets":["@babel/preset-env","@babel/preset-react"],
    "plugins":[
        ["@babel/plugin-transform-destructuring"],
        // 下面两个插件的作用是编译装饰器语法
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose" : true }]
    ]
}