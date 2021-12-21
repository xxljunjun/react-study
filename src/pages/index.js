//代码分割（类似路由懒加载）
import loadable from "@loadable/component";
import React from "react";
import { MailOutlined } from "@ant-design/icons";

//引入组件（页面）
const JsxStudy = loadable(() => import("./study/JsxStudy"));
const TestProps = loadable(() => import("./study/TestProps"));
const EventStudy = loadable(() => import("./study/EventStudy"));
const TestState = loadable(() => import("./study/TestState"));
const TestCondition = loadable(() => import("./study/TestCondition"));
const TestList = loadable(() => import("./study/TestList"));
const TestForm = loadable(() => import("./study/TestForm"));
const TestLife = loadable(() => import("./study/TestLife"));
const TestProps2 = loadable(() => import("./study/TestProps2"));
const TestLift = loadable(() => import("./study/TestLift"));
const TestCombine = loadable(() => import("./study/TestCombine"));
const TestContext = loadable(() => import("./superStudy/TestContext"));
const TestHoc = loadable(() => import("./superStudy/TestHoc"));
const TestTypes = loadable(() => import("./superStudy/TestTypes"));
const TestHooks = loadable(() => import("./superStudy/TestHooks"));

//音乐组件
const MusicList = loadable(() => import("./music/MusicList"));
const MusicDetail = loadable(() => import("./music/MusicDetail"));

//todo
const TodoList = loadable(() => import("./todo/TodoList"));

//antd
const Antd = loadable(() => import("./antd/Antd"));

//新的react学习
const jsxOne = loadable(() => import("./newReact/jsxOne"));
const moduleTwo = loadable(() => import("./newReact/moduleTwo"));
const lifethreen = loadable(() => import("./newReact/lifethreen"));
const tabBar = loadable(() => import("./newReact/TabBar"));

//b站学习
const onejsx = loadable(() => import("./bilibili/001jsx"));
const refStudy = loadable(() => import("./bilibili/refStudy"));
const inputComponent = loadable(() => import("./bilibili/inputComponent"));
const mylife = loadable(() => import("./bilibili/mylife"));
const BiTodolist = loadable(() => import("./bilibili/BiTodolist/"));

const routes = [
  {
    id: 10,
    text: "React学习",
    icon: <MailOutlined />,
    children: [
      {
        id: 1010,
        path: "/",
        text: "jsx简介",
        component: JsxStudy,
      },
      {
        id: 1011,
        path: "/props",
        text: "props传值",
        component: TestProps,
      },
      {
        id: 1012,
        path: "/event",
        text: "event事件",
        component: EventStudy,
      },
      {
        id: 1013,
        path: "/state",
        text: "state用法",
        component: TestState,
      },
      {
        id: 1014,
        path: "/condition",
        text: "条件渲染",
        component: TestCondition,
      },
      {
        id: 1015,
        path: "/list",
        text: "数组循环",
        component: TestList,
      },
      {
        id: 1016,
        path: "/form",
        text: "表单基础",
        component: TestForm,
      },
      {
        id: 1017,
        path: "/life",
        text: "react生命周期",
        component: TestLife,
      },
      {
        id: 1018,
        path: "/props2",
        text: "父子组件通信",
        component: TestProps2,
      },
      {
        id: 1019,
        path: "/lift",
        text: "状态提升",
        component: TestLift,
      },
      {
        id: 1020,
        path: "/combine",
        text: "组合与继承",
        component: TestCombine,
      },
      {
        id: 1021,
        path: "/context",
        text: "context上下文",
        component: TestContext,
      },
      {
        id: 1022,
        path: "/hoc",
        text: "高阶组件",
        component: TestHoc,
      },
      {
        id: 1023,
        path: "/types",
        text: "propTypes验证",
        component: TestTypes,
      },
      {
        id: 1024,
        path: "/hooks",
        text: "无状态组件Hooks",
        component: TestHooks,
      },
    ],
  },
  {
    id: 11,
    text: "音乐列表",
    icon: <MailOutlined />,
    children: [
      {
        id: 1101,
        path: "/music",
        text: "音乐列表",
        component: MusicList,
        children: [
          {
            id: 11001,
            path: "/music/detail/:id",
            component: MusicDetail,
          },
        ],
        notExact: true, //模糊匹配度
      },
    ],
  },
  {
    id: 12,
    text: "antd用法",
    icon: <MailOutlined />,
    children: [
      {
        id: 1201,
        path: "/antd",
        text: "antd用法",
        component: Antd,
      },
    ],
  },
  {
    id: 13,
    text: "todo",
    icon: <MailOutlined />,
    children: [
      {
        id: 1301,
        path: "/todo",
        text: "todolist列表",
        component: TodoList,
      },
    ],
  },
  {
    id: 14,
    text: "新的react学习",
    icon: <MailOutlined />,
    children: [
      {
        id: 1401,
        path: "/newreact",
        text: "jsx语法",
        component: jsxOne,
      },
      {
        id: 1402,
        path: "/moduletwo",
        text: "类组件和函数式组件区别",
        component: moduleTwo,
      },
      {
        id: 1403,
        path: "/lifethreen",
        text: "state和生命周期",
        component: lifethreen,
      },
      {
        id: 1404,
        path: "/tabBar",
        text: "tabBar切换",
        component: tabBar,
      },
    ],
  },
  {
    id: 15,
    text: "bilibili网站",
    icon: <MailOutlined />,
    children: [
      {
        id: 1501,
        path: "/001jsx",
        text: "jsx语法",
        component: onejsx,
      },
      {
        id: 1502,
        path: "/refstudy",
        text: "ref语法",
        component: refStudy,
      },
      {
        id: 1503,
        path: "/inputComponent",
        text: "受控组件和非受控组件",
        component: inputComponent,
      },
      {
        id: 1504,
        path: "/mylife",
        text: "生命周期",
        component: mylife,
      },
      {
        id: 1505,
        path: "/todolist",
        text: "react的todolist",
        component: BiTodolist,
      },
    ],
  },
];

export default routes;
