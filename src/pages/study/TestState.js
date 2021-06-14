import React from 'react'

class TestState extends React.Component{
    constructor(props){
        super(props)
        this.state={
            num:1,
            price:100,
            a:1,
            b:2,
            c:3
        }
    }
    changeCount(){
        setTimeout(()=>{
            // setState()是React中专门用于更新VM，触发diff运算，更新视图
            // setState()默认是异步的，但在定时器中却是同步的
            // setState(fn1, [fn2]) fn1必须返回一个新的state，fn2表示更新state完成
            // setState({bol: true})
            console.log("111111111111")

            this.setState(state=>{
                return {num:state.num+1}
            },()=>{
                console.log("done")
            })

            console.log("2222222")
        },0)
    }
    changeAbc(){
        // 当有多个setState()执行时，React会自动将其合并，只执行一次diff运算、一次DOM更新
        // this.setState({a:10})
        // this.setState({a:100})
        // this.setState({a:1000})
        
        // this.setState({a:1000})
        // this.setState({b:2000})
        // this.setState({c:3000})

        //等价于
        this.setState({
            a:1000,
            b:2000,
            c:3000
        })
    }
    render(){
        let {num,price,a,b,c} = this.state
        return (
            <div>
                <h4>测试state</h4>
                <hr/>
                <h4>数量：{num}</h4>
                <h4>单价：{price}</h4>
                <h4>总价：{num*price}</h4>
                <button onClick={()=>this.changeCount()}>点击改变总价count</button>
                <hr/>
                <h4>{a}</h4>
                <h4>{b}</h4>
                <h4>{c}</h4>
                <button onClick={()=>this.changeAbc()}>点击改变数字abc</button>
            </div>
        )
    }
}
export default  TestState