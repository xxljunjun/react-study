//为什么可以使用这样的方式引入css文件，因为无法解析，
//要在loades配置规则以.css结尾的文件用哪个模块来编译

/* eslint-disable */
console.log('我是React的入口文件')  // eslint-disable-line
/* eslint-enable */

import '@/assets/css/common.css';
import '@/assets/sass/common.scss';
// import pikaqiu from '@/assets/pikaqiu.jpg';
// import img from '@/utils/img'


import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

//引入Antd的样式表
import 'antd/dist/antd.less'



// render的第一个参数必须是一个 React组件
// 第二个参数是真实的DOM节点,挂载到div#root上面
ReactDOM.render(<App />, document.getElementById('root'))









// document.getElementById('test').style.color = 'blue';
// document.getElementById('pika').src=pikaqiu;
// document.getElementById('ppp').src=img.pika;
// document.getElementById('pika').style.width='200px';