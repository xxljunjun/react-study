import React from "react"
import TestProps2scss from "@/assets/sass/TestProps2.scss"
import Lang from "@/pages/study/components/Lang.js"
//父组件
class TestProps2 extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            langArr: [
                { id: 1, lang_zh: "汉语", lang: "zh" },
                { id: 2, lang_zh: "法语", lang: "fr" },
                { id: 3, lang_zh: "德语", lang: "dr" },
                { id: 4, lang_zh: "日语", lang: "jap" },
                { id: 5, lang_zh: "韩语", lang: "hr" }
            ],
            lang: "zh"
        }
    }
    //自定义事件，子组件触发
    onChangArr(ele) {
        console.log(ele)
        //在这里已经改变了state里面langArr的lang的值
        this.setState(() => ({ lang: ele.lang }))
    }
    render() {
        let { langArr, lang } = this.state
        //筛选出子组件所点击的行,得到含有一个元素的数组
        const arr = langArr.filter(ele => ele.lang === lang)
        return (
            <div className="qf-main">
                <h4>测试父子组件通信（tabBar切换）</h4>
                <hr></hr>
                <div className="qf-box">
                    <Lang langArr={langArr} value={lang} onChangArr={(e) => this.onChangArr(e)} />
                    <h4>当前你的选择是：<span>{arr[0].lang_zh}</span></h4>
                </div>

            </div>
        )
    }
}

export default TestProps2