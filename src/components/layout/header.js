import React from 'react'
import { useHistory, withRouter} from 'react-router-dom'
import img from '@/utils/img'




// 一、使用Hooks写法，来解决React无状态组件中没有路由API的问题
export default props=>{
    const history = useHistory()
    // console.log(history)
    return (
        <div className="qf-header">
            <span>
                <img className="logo" src={img.pika}/>
            </span>
            <h3>小溪流的前端之旅</h3>
        </div>
    )
}

// 二、使用withRouter高阶组件来解决React无状态组件中没有路由API的问题
// export default withRouter(props=>{
//     console.log('---header props', props)
//     return (
//         <div className="qf-header">
//             <h2>小溪流的前端之旅</h2>
//         </div>
//     )
// })


// 三、使用 withRouter高阶组件，解决React类组件中没有路由API的问题
// 有两种写法：装饰器的写法，或者 ES5函数调用的写法
// @withRouter
// class Header extends React.Component{
//     render(){
//         console.log('---header props', this.props)
//         return (
//             <div className="qf-header">
//                 <h2>小溪流的前端之旅</h2>
//             </div>
//         )
//     }
// }
// export default Header
// export default withRouter(Header)