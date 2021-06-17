import React from "react";
import "@/assets/sass/tabBar.scss";
import Box1 from "./components/Box1.js"
import Box2 from "./components/Box2.js"
import Box3 from "./components/Box3.js"
import Box4 from "./components/Box4.js"
export default class TabBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			listArr: [
				{ id: 1, text: "标签栏一", },
				{ id: 2, text: "标签栏二", },
				{ id: 3, text: "标签栏三", },
				{ id: 4, text: "标签栏四", },
			],
			lable: "标签栏二"
		};
	}
	handleLable(val) {
		this.setState({
			lable: val
		})
	}
	render() {
		let { listArr, lable } = this.state
		return (
			<div className="tabBar">
				{
					listArr.map((item, index) => {
						return (
							<span
								key={item.id}
								className={item.text === lable ? 'lable active' : 'lable'}
								onClick={() => this.handleLable(item.text)}
							>
								{item.text}
							</span>
						)
					})
				}
				<div className="aline"></div>
				<div className="box">
					{lable === "标签栏一" && <Box1 />}
					{lable === "标签栏二" && <Box2 />}
					{lable === '标签栏三' && <Box3 />}
					{lable === "标签栏四" && <Box4 />}
				</div>
			</div>
		)
	}
}