import React from 'react'
import "@/assets/sass/jsxOne.scss";
import img from '@/utils/img'
const fontcolor = {
	color: "red"
}
const str = "表盘管理"
const smartStr = "罗马表盘"
const twoName = <div className="box">最新上传表盘</div>
const allName = <div className="box">全部表盘</div>
const smartImg = <img className="imgs" src={img.pika} />
const item = <div className="items">{smartImg}{smartStr}</div>

export default class jsxtext extends React.Component {
	render() {
		return (
			<div style={fontcolor} className="jsxstudy">
				<div className="title">{str}</div>
				{/* 这是react组件中的注释功能 */}
				{twoName}
				<div className="item-box">
					{item}
					{item}
					{item}
					{item}
				</div>
				{/* 这是react组件中的注释功能 */}
				{allName}
				<div className="item-box">
					{item}
					{item}
					{item}
					{item}
				</div>
				<div className="aline"></div>
				<div className="btnbox">
					<div className="btnAdd btn">加载表盘</div>
					<div className="btnExcel btn">导入表盘信息</div>
				</div>
			</div>
		)
	}
}

//使用样式的五种方式
/*
	一、直接定义一个变量是对象（里面写css）
	再把用style={jsxstudy}写进jsx语法中
	二、import "@/assets/scss/jsxOne.scss";（常用可作用于后代组件）
	三、import moduleCss from "./test.module.scss";（相当于第一种的加强版不会作用于后代组件）
	四、使用styled-components
	五、使用radium
*/

