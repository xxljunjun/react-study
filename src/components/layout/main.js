import React from 'react'
import routes from '@/pages/index'
import { 
    Route,
    Switch,
    Redirect
 } from 'react-router-dom'

//无状态组件
  // 生成路由匹配规则，当url和Route.path匹配成功，显示当前配对成功的Route.component
  // 凡是被 Route 组件直接包裹的React组件中，其props上都路由相关的API
export default props=>{
    //返回jsx组件
    const creatRoutes =()=>{
        let res =[]
        //定义一个递归方法来写
        const recursionRoute =arr =>{
            arr.map(ele=>{
                res.push(
                    <Route 
                        key={ele.id} 
                        path={ele.path} 
                        component={ele.component}
                        exact
                    />
                )
                if(ele.children)recursionRoute(ele.children)
            })  
        }
        routes.map(ele=>{
            if(ele.children){
                recursionRoute(ele.children)
            }
        })
        console.log(res)
        return res
        
    }
    
    return (
        <div className="qf-main">
            <Switch>     
                {creatRoutes()}
                <Redirect from='/*' to='/'/>
            </Switch>
        </div>
    )
}