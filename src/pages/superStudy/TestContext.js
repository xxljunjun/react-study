import React from "react"
import ThemeCtx from '@/utils/theme'

//两种方法使用-----------上下文context根组件
//方法一
// export default class TestContext extends React.Component{
//     render(){
//         return (
//             <ThemeCtx.Consumer>
//                 {
//                     (value)=>(
//                         <div style={{color:value.color,background:value.background}}>
//                             <h4>测试上下文</h4>
//                             <h4>我是TestContext子组件的页面</h4>
//                         </div>
//                     )
//                 }
               
//             </ThemeCtx.Consumer>
           
//         )
//     }
// }

//方法二
class TestContext extends React.Component{
    render(){
        console.log('this.context', this.context)
        const theme = this.context
        return (                 
             <div style={{color:theme.color,background:theme.background}}>
                <h4>测试上下文</h4>
                <h4>我是TestContext子组件的页面</h4>
                <hr/>
            </div>
           
        )
    }
}
TestContext.contextType = ThemeCtx
export default TestContext
