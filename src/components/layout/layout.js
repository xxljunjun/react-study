import React from 'react'

import QfMain from './main'
import QfHeader from './header'
import QfAside from './aside'
import "./style.scss"
import { Layout } from 'antd';
const { Header, Sider, Content } = Layout;

export default props=>{
    return (
        <div className="qf-layout">
            {/* 引入Layout布局组件*/}
            <Layout>
                <Sider width='180'>
                    <QfAside/>
                </Sider>
                <Layout>
                    <Header style={{height:80+'px'}}>
                        <QfHeader/>
                    </Header>
                    <Content>
                        <QfMain/>
                    </Content>
                </Layout>
            </Layout>
        </div>
    )
}