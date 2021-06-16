import React from "react";
import "@/assets/sass/lifethreen.scss";
export default class lifethreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "小溪流",
			age: "18"
		};
	}
	render() {
		return (
			<div className="lifethreen">
				<Clock message={this.state} />
			</div>
		)
	}
}

//子组件 
class Clock extends React.Component {
	//构造函数是唯一可以给 this.state 赋值的地方：
	constructor(props) {
		super(props);
		this.state = {
			date: new Date(),
			counter: 1,
		};
	}
	componentDidMount() {
		//dom加载完成
		//相当于vue的mounted
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}
	componentWillUnmount() {
		//相当于vue的beforeDestroy
		clearInterval(this.timerID);
	}
	componentDidUpdate() {
		//调接口，更新完成
	}
	tick() {
		this.setState({
			date: new Date()
		});
	}
	reduceClick() {
		this.setState((state, props) => ({
			counter: state.counter - 1
		}))
	}
	addClick() {
		this.setState((state, props) => ({
			counter: state.counter + 1
		}))
	}
	render() {
		//用es6结构赋值的语法可以简化代码
		let { date, counter } = this.state
		let { message } = this.props
		return (
			<div>
				<h1 className="title">state和生命周期的使用</h1>
				<h2 className="timer">It is {date.toLocaleTimeString()}.</h2>
				<div className="box">
					<h2 onClick={() => this.reduceClick()} className="reduce">点我减少</h2>
					<h2>{counter}</h2>
					<h2 onClick={() => this.addClick()} className="add">点我增加</h2>
				</div>
				<div>
					{message.name}
					{message.age}
				</div>
			</div>
		);
	}
}

//生命周期主要分为3个阶段：装载阶段、更新阶段和卸载阶段
//装载阶段constructor,render,componentDidMount
//更新阶段componentDidUpdate,render
//卸载阶段componentWillUnmount

//this.setState可以接受一个对象或者函数
