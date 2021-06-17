import React from "react"
//子组件
function Lang(props) {
	let { value, onChangArr } = props
	function langClick(ele) {
		// console.log(ele)
		onChangArr(ele)
	}
	return (
		props.langArr.map((ele => {
			return (
				<span
					key={ele.id}
					onClick={(e) => langClick(ele, e)}
					className={value === ele.lang ? "on" : ""}
				>
					{ele.lang_zh}
				</span>
			)
		}))

	)
}
export default Lang