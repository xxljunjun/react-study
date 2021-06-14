import React from 'react'
class TestLife extends React.Component{
    constructor(props){
        super(props)
        console.log("------------,constructor")
        this.state={
            msg:1111
        }
    }
    chang(){
        this.setState(state=>({msg:state.msg+1}))
    }
    render(){
        //渲染视图
        console.log("-------------,render")
        let { msg } = this.state
        return (
            <div>
                <h4>测试生命周期</h4>
                <h4>{msg}</h4>
                <button onClick={()=>this.chang()}>点击改变msg</button>
            </div>
        )
    }
    componentDidMount(){
        //dom加载完成
        //相当于vue的mounted
        console.log("------------,componentDidMount")
    }
    sholdComponentUpdate(){
        console.log("------------,sholdComponentUpdate")
        console.log(this.state)
        return true
        
    }
    componentDidUpdate(){
        console.log("------------,componentDidUpdate")
        //调接口，更新完成
    }
    componentWillUnmount(){
        console.log("------------,componentWillUnmount")
        //相当于vue的beforeDestroy
    }

}
export default TestLife