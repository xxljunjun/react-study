import React from 'react'
import { NavLink } from "react-router-dom"
import routes from "@/pages"
import { Menu } from 'antd';

const { SubMenu } = Menu;

//无状态组件,用于生成菜单
export default props=>{
    const createNavLink = ()=>{
        return routes.map(ele=>(
            <SubMenu key={ele.id} icon={ele.icon} title={ele.text}>
                {
                    ele.children && ele.children.map(ele=>(
                        <Menu.Item key={ele.id}>
                            <NavLink 
                                to={ele.path} 
                                exact={!ele.notExact}
                            >
                                {ele.text}
                            </NavLink>
                        </Menu.Item>
                    ))
                }
                
            </SubMenu>
        ))
    }
    return (
        <div className="qf-aside">
            <Menu
                mode="inline"
                theme="dark"
            >
                {createNavLink()}
            </Menu>
        </div>
    )
}
