import React from 'react'

//当两个组件中共用一个变量时，可以使用状态提升父组件中定义变量，通过父子传值来改变
//props的值是瀑布流的
function CildA(props) {
    let { count, onChangCount } = props

    return (
        <div>
            <h4>child a</h4>
            <h4>{count}</h4>
            <button onClick={() => onChangCount(5)}>点击增加</button>
        </div>
    )
}


function CildB(props) {
    let { count, onReduce } = props
    return (
        <div>
            <h4>child b</h4>
            <h4>{count}</h4>
            <button onClick={() => onReduce(10)}>点击减少</button>
        </div>
    )
}




class TestLift extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 100  // 两个子组件需要共享这个状态（数据）
        }
    }
    ChangCount(step) {
        this.setState(state => ({ count: state.count + step }))
    }
    reduce(step) {
        this.setState(state => ({ count: state.count - step }))
    }
    render() {
        let { count } = this.state
        return (
            <div>
                <h4>测试状态提升</h4>
                <hr />
                <CildA count={count} onChangCount={(step) => this.ChangCount(step)} />
                <hr />
                <CildB count={count} onReduce={(step) => this.reduce(step)} />
            </div>
        )
    }
}
export default TestLift