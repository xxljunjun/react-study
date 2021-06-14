//代码分割（类似路由懒加载）
import loadable from '@loadable/component'
import React from 'react'
import {
    MailOutlined,
  } from '@ant-design/icons';

//引入组件（页面）
const JsxStudy = loadable(()=>import("./study/JsxStudy"))
const TestProps = loadable(()=>import('./study/TestProps'))
const EventStudy = loadable(()=>import('./study/EventStudy'))
const TestState = loadable(()=>import('./study/TestState'))
const TestCondition = loadable(()=>import('./study/TestCondition'))
const TestList = loadable(()=>import("./study/TestList"))
const TestForm = loadable(()=>import("./study/TestForm"))
const TestLife = loadable(()=>import("./study/TestLife"))
const TestProps2 = loadable(()=>import("./study/TestProps2"))
const TestLift = loadable(()=>import("./study/TestLift"))
const TestCombine = loadable(()=>import("./study/TestCombine"))
const TestContext = loadable(()=>import('./superStudy/TestContext'))
const TestHoc = loadable(()=>import('./superStudy/TestHoc'))
const TestTypes = loadable(()=>import('./superStudy/TestTypes'))
const TestHooks = loadable(()=>import('./superStudy/TestHooks'))

//音乐组件
const MusicList = loadable(()=>import('./music/MusicList'))
const MusicDetail = loadable(()=>import('./music/MusicDetail'))

//todo
const TodoList =loadable(()=>import('./todo/TodoList'))

//antd
const Antd = loadable(()=>import('./antd/Antd'))


const routes = [
    {
        id:10,
        text:"React学习",
        icon:<MailOutlined/>,
        children:[
            {
                id:1010,
                path:'/',
                text:"jsx简介",
                component:JsxStudy
            },
            {
                id:1011,
                path:'/props',
                text:"props传值",
                component:TestProps
            },
            {
                id:1012,
                path:'/event',
                text:"event事件",
                component:EventStudy
            },
            {
                id:1013,
                path:'/state',
                text:"state用法",
                component:TestState
            },
            {
                id:1014,
                path:'/condition',
                text:"条件渲染",
                component:TestCondition
            },
            {
                id:1015,
                path:'/list',
                text:"数组循环",
                component:TestList
            },
            {
                id:1016,
                path:'/form',
                text:"表单基础",
                component:TestForm
            },
            {
                id:1017,
                path:'/life',
                text:"react生命周期",
                component:TestLife
            },
            {
                id:1018,
                path:'/props2',
                text:"父子组件通信",
                component:TestProps2
            },
            {
                id:1019,
                path:'/lift',
                text:"状态提升",
                component:TestLift
            },
            {
                id:1020,
                path:'/combine',
                text:"组合与继承",
                component:TestCombine
            },
            {
                id:1021,
                path:'/context',
                text:"context上下文",
                component:TestContext
            },
            {
                id:1022,
                path:'/hoc',
                text:"高阶组件",
                component:TestHoc
            },
            {
                id:1023,
                path:'/types',
                text:"propTypes验证",
                component:TestTypes
            },
            {
                id:1024,
                path:'/hooks',
                text:"无状态组件Hooks",
                component:TestHooks
            }
        ]
    },
    {
        id:11,
        text:"音乐列表",
        icon:<MailOutlined/>,
        children:[
            {
                id:1101,
                path:'/music',
                text:"音乐列表",
                component:MusicList,
                children:[{
                    id:11001,
                    path:"/music/detail/:id",
                    component:MusicDetail
                }],
                notExact:true    //模糊匹配度
            }
        ]
    },
    {
        id:12,
        text:"antd用法",
        icon:<MailOutlined/>,
        children:[
            {
                id:1201,
                path:'/antd',
                text:"antd用法",
                component:Antd,
            }
        ]
    },
    {
        id:13,
        text:"todo",
        icon:<MailOutlined/>,
        children:[
            {
                id:1301,
                path:'/todo',
                text:"todolist列表",
                component:TodoList,
            }
        ]
    },
    
]

export default routes