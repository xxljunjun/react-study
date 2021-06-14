import React from 'react'

class TestCondition extends React.Component{
    constructor(props){
        super(props)
        this.state={
            gender:1,
            numIdx:1,
            cssDis:'active_1',
            styleDis:'block',
            color:'red',
            font:20
        }
    }
    change(key){
        switch (key) {
            case 'gender':
                this.setState(state=>({gender:state.gender===1?state.gender=2:state.gender=1}))
                break;
            case "numIdx":
                this.setState({numIdx:Math.ceil(Math.random()*4)})
                break;
            case "cssDis":
                this.setState(state=>({cssDis:state.cssDis==="active_1"?"active_2":"active_1"}))
            break;
            case "styles":
                let colorArr =['blue','yellow','black','green','pink','red']
                this.setState(state=>({
                    styleDis:state.styleDis==="block"?"none":"block",
                    color:colorArr[Math.floor(Math.random()*colorArr.length)],
                    font:state.font+2
                }))
            break;
            default:
        }
    }
    //自定义视图渲染方法
    renderNumIdx(){
        let { numIdx } = this.state
        let ele =null
        switch(numIdx){
            case 1:
                ele =<div>11111</div>
            break;
            case 2:
                ele =<div>22222</div>
            break;
            case 3:
                ele =<div>33333</div>
            break;
            case 4:
                ele =<div>44444</div>
            break;
            default:
        }
        return (
            <div>
                {ele}
            </div>
        )

    } 
    render(){
        let { gender,numIdx,cssDis ,styleDis,color,font} = this.state
        return (
            <div>
                <h4>测试condition</h4>
                <hr/>
                {/* 只有两个元素需要执行条件渲染时，建议使用三元表达式 */}
                <h4>{gender===1 ?<div>男</div>:<div>女</div>}</h4>
                <button onClick={()=>this.change('gender')}>改变性别</button>
                <hr/>
                {/*  两个以的元素需要执行条件渲染，建议使用 && 来实现*/}
                {numIdx===1 && <div>11111</div>}
                {numIdx===2 && <div>22222</div>}
                {numIdx===3 && <div>33333</div>}
                {numIdx===4 && <div>44444</div>}
                { this.renderNumIdx() }
                <button onClick={()=>this.change('numIdx')}>两个以的元素需要执行条件渲染</button>
                <hr/>
                {/* 采用动态className的方式 */}
                <h4 className={cssDis}>我是采用动态className的方式控制显示与隐藏的</h4>
                <button onClick={()=>this.change('cssDis')}>点击classname显示/隐藏</button><br/>
                {/* 用动态 style 实现条件渲染 */}
                <h4 style={{display:styleDis,color,fontSize:font+'px'}}>我是采用style样式的方式控制显示与隐藏的</h4>
                <button onClick={()=>this.change('styles')}>点击style-----显示/隐藏</button>

            </div>
        )
    }
}
export default TestCondition 