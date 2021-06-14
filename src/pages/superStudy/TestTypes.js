import React from "react"
import PropTypes from "prop-types"

class Child1 extends React.Component{
    onChange(){
        console.log('11')
    }
    render(){
        let { list ,msg ,onChange} = this.props
        return (
            <div>
                <h4>我是child1子组件</h4>
                {
                    list.map(ele=>(
                    <div key={ele}>{ele}</div>
                    ))
                }
                <h4 onClick={()=>onChange()}>{msg}</h4>
            </div>
            
        )
    }
}
//给类组件Child1加props类型校验
Child1.propTypes={
    list:PropTypes.array.isRequired,
    msg:PropTypes.string.isRequired,
    onChange:PropTypes.func,
    gender:PropTypes.oneOf(["男","女"]).isRequired
}

const Child2 =props=>(
    <div>
        <h2>我是child2子组件</h2>
        <h2>{props.age}</h2>
    </div>
)
//给类组件Child1加props类型校验
Child2.propTypes={
    age: PropTypes.number.isRequired
}

export default class TestTypes extends React.Component{
    render(){
        return (
            <>
                <h4>测试propTypes和验证Props数据类型</h4>
                <hr/>
                <Child1
                    list={[1,2,3,4,5]}
                    msg="hello child1"
                    onchang2={()=>console.log("test on change")}
                    gender="男"
                />
                <hr/>
                <Child2 age={1000}/>
            </>
        )
        
    }
}