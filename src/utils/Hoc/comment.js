import React from 'react'

export default function comment(WrappedComponent){
    return class extends React.Component{
        constructor(props){
            super(props)
            this.state={
                commentList:[]
            }
        }
        componentDidMount(){
            //假设调接口得到res
            const res =[
                { id: 1, content: '哎呦', user: 'ljj' },
                { id: 2, content: '抠脚', user: 'ztf' },
                { id: 3, content: '吐了', user: 'wjj' },
                { id: 4, content: '你好厉害哟', user: 'linan' },
                { id: 5, content: '别了', user: 'zhishi' }
            ]
            this.setState({commentList:res})
        }
        render(){
            let { commentList } = this.state
            return (
                <div>
                    <WrappedComponent {...this.props} list={commentList}/>
                </div>
            )
        }
    }
}