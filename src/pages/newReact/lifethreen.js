import React from "react";
import "@/assets/sass/lifethreen.scss";
export default class lifethreen extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: "小溪流",
			aage: "18"
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
		this.timerID = setInterval(
			() => this.tick(),
			1000
		);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	tick() {
		this.setState({
			date: new Date()
		});
	}
	reduceClick() {
		// console.log("111", this.props.message)
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
		return (
			<div>
				<h1 className="title">state和生命周期的使用</h1>
				<h2 className="timer">It is {this.state.date.toLocaleTimeString()}.</h2>
				<div className="box">
					<h2 onClick={() => this.reduceClick()} className="reduce">点我减少</h2>
					<h2>{this.state.counter}</h2>
					<h2 onClick={() => this.addClick()} className="add">点我增加</h2>
				</div>
			</div>
		);
	}
}
