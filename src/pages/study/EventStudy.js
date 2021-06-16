import React from 'react'
class EventStudy extends React.Component {
    constructor(props) {
        super(props)
        // state特点：当state发生变化时，视图自动更新
        this.state = {
            num: 0
        }
        // console.log(props)
        // this.xxxx=this.addHandle.bind(this, 1, 2)  也是改变this的方法
    }
    addEvent() {

        //这种方法不行
        // this.state.num++
        // console.log('num',this.state.num)

        //可以但是不推荐
        // let { num } =this.state
        // num++
        // this.setState({num})

        //会执行一个回调函数
        //这个state和props就是上一个状态的当前组件的
        //这个state是this.state,props是this.props这是两个对象
        // this.setState((state,props)=>{
        //     console.log(state)  
        //     console.log(props)
        // })
        // setState() 更新state，触发Diff运算、更新视图，返回一个虚拟dom
        // setState()是React组件中，专门用于更新state的
        this.setState((state, props) => ({ num: state.num + 1 }))
    }
    reduceEvent() {
        // console.log('减',this)
        this.setState((state, props) => ({ num: state.num - 1 }))
    }
    render() {
        let { num } = this.state
        return (
            <div>
                {/*把num这个state变量，通过props传递给子组件*/}
                <Countchild num={num} />
                {/*绑定事件的第1种方法：使用bind(this)来改变this指向*/}
                <button onClick={this.addEvent.bind(this)}>增加</button>
                {/*绑定事件的第2种方法：使用箭头函数，它的this指向所在类的实例*/}
                <button onClick={() => this.reduceEvent()}>减少</button>
            </div>
        )
    }
}
//封装一个子组件，显示效果的UI组件，对应的是容器组件
function Countchild(props) {
    return (
        <h3>{props.num}</h3>
    )
}

export default EventStudy