# 一、jsx 的理解与运用(jsxStudy.js)

emmet 设置快捷输出 java html

- 1、理解什么是 jsx

```JS
// JSX = JavaScript XML 是一种js语法糖,jsxJavaScript 的语法扩展
// React元素 vs. React类(是组件)
// 简单理解：视觉上看起来像是HTML结构的玩意，就是React元素，也叫JSX
// jsx可以是变量、对象、react元素
// JSX是可嵌套的
// JSX中，可以使用表达式，但要使用 {} 包起来
// JSX中，class 这个属性要写成 className
// JSX中，for 这个属性要写成 htmlFor
// JSX中，注释内容也要使用 {} 包起来
// JSX中，默认可以防注入攻击（XSS）
const ele4 = ()=><div>{ele1}</div>
function ele5(){
    return ele4()
}

// 如果不使用JSX语法糖，应该像这样创建React元素
const ele6 =React.createElement(
    'div',
    {classNmae:'jsx',title:'123',id:'box'}
    '我是不使用jsx语法糖，创建React元素的内容'
)

//只要用了jsx，就要引入React包
import React from 'react'
/*
    1、用{}包裹起来的表达式是jsx语法糖
    2、使用class类名时需要用className
    3、使用style时需要style={{key:value}}
    4、字母的大小写区别
        ==>小写字母开头默认为是html标签
        ==>大写字母开头默认为是组件
    5、必须要有根标签
    6、标签必须要闭合
*/

```

- 2、react 组件中的注释功能

```jsx
{
  /* 这是react组件中的注释功能 */
}
```

# 二、类组件和函数式组件的区别(TestProps.js)

- 1、组件有类组件和函数式组件(无状态组件)

```js
// 类组件：用class关键来定义的组件
// 特点1：它有state
// 特点2：它有生命周期
// 特点3：它有上下文、ref、this 等特性
// 特点4：与函数式组件相比，性能较差
class jsxtest extends React.Component {
  render() {
    //do something
    return <div></div>;
  }
}

// 函数式组件：用function关键字或箭头函数定义的组件
// 特点1：没有state，所以被为“无状态组件”
// 特点2：没有生命周期
// 特点3：没有上下文、ref、this 等特性
// 特点4：与类组件相比，性能更高
() => {
  //do something
  return <div></div>;
};

// props是父子之间的纽带
// 它是只读的
// 不要把props赋值给state，反之同理
```

# 三、React 中的 on 绑定事件(EventStudy.js)

- 1、事件绑定都是用 onClick,onMousemove...自定义事件 onAbc 也需要这样写

- 2、绑定事件的第 1 种方法：使用 bind(this)来改变 this 指向

```js
// ES5：使用bind()方式绑定的事件处理器，它的最后一个形参就是事件对象
<button onClick={this.addEvent.bind(this)}>增加</button>
addEvent(){
    console.log('加',this)
    this.setState((state,props)=>({num:state.num+1}))
}

//ES5拿事件对象，最后一个形参e就是事件对象

```

- 3、绑定事件的第 2 种方法：使用箭头函数，它的 this 指向所在类的实例

```js
<button onClick={()=>this.reduceEvent()}>减少</button>
reduceEvent(){
        console.log('减',this)
        this.setState((state,props)=>({num:state.num-1}))
}

// ES6拿事件对象
<button onClick={(e)=>this.reduceEvent(e)}>减少</button>
reduceEvent(e){
        console.log('减',this)
        console.log(e)
        this.setState((state,props)=>({num:state.num-1}))
}
```

# 四、React 中的 setState 方法(TestState.js)

- setState()是 React 中专门用于更新 VM，触发 diff 运算，更新视图

```js
// diff运算的作用：计算出Virtual DOM中真正变化的部分（脏节点），并只针对该部分进行原生DOM操作，而非重新渲染整个页面。
this.setState(fn1,[fn2])  fn1必须返回一个新的state，fn2表示更新state完成
```

- setState()默认是异步的，但在定时器中却是同步的

```js
setTimeout(() => {
  cosole.log("1111");
  this.setState(
    (state) => {
      return { num: state.num + 1 };
    },
    () => {
      cosole.log("done");
    }
  );
  console.log("2222");
});

//上面的打印顺序是1111，don,2222
```

- 当有多个 setState()执行时，React 会自动将其合并，只执行一次 diff 运算、一次 DOM 更新

```js
this.setState({ a: 1000 });
this.setState({ b: 2000 });
this.setState({ c: 3000 });

//等价于
this.setState({
  a: 1000,
  b: 2000,
  c: 3000,
});
```

# 五、react 中的条件渲染(TestCondition.js)

- 只有两个元素需要执行条件渲染，建议使用三元表达式

```js
{
  gender === 1 ? <div>女</div> : <div>男</div>;
}
//思路：点击按钮就只需要通过setState方法改变gender的值，就可以像vue的v-if的效果
```

- 两个以的元素需要执行条件渲染，建议使用 && 来实现(自定义视图渲染方法)

```js
{
  numIdx === 1 && <div>11111</div>;
}
```

```js
 //自定义视图渲染方法,返回值是一个react元素，jsx
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

     { this.renderNumIdx() }
```

- 采用动态 className 的方式控制显示与隐藏

```js
<h4 className={cssDis}>我是采用动态className的方式控制显示与隐藏的</h4>
<button onClick={()=>this.change('cssDis')}>点击显示/隐藏</button>

this.setState(state=>({cssDis:state.cssDis==="active_1"?"active_2":"active_1"}))
```

- 用动态 style 实现条件渲染

```js
//熟练牢记react中style的写法style={{display:styleDis,color}}

<h4 style={{display:styleDis,color,fontSize:font+'px'}}>我是采用style样式的方式控制显示与隐藏的</h4>
<button onClick={()=>this.change('styles')}>点击style-----显示/隐藏</button>

let colorArr =['blue','yellow','black','green','pink','red']
this.setState(state=>({
    styleDis:state.styleDis==="block"?"none":"block",
    color:colorArr[Math.floor(Math.random()*colorArr.length)]
}))
```

# 六、react 中的列表循环（TestList.js）

- 语法：JSX 支持直接渲染由 React 元素构造成的数组,工作中获得的数组一般都是需要经过处理后才能使用的。
- 1、在 JSX 中，可以直接渲染一个由 React 元素构成的数组变量

```js
const eleArr = [
  <div key="1">react元素构成的数组一</div>,
  <div key="2">react元素构成的数组二</div>,
  <div key="3">react元素构成的数组三</div>,
];

class TestProps extends React.Component {
  render() {
    return <div>{eleArr}</div>;
  }
}
```

- 2、通过调用方法来渲染视图

```js

//这个函数的返回值是一个jsx（react元素）
renderList2(){
        let { list } = this.state
        // 构造一个数组，来承载JSX对象(React元素)
        let arr =[]
        list.map((ele,idx)=>{
            // ele.age = ele.age+10
            ele.checked=ele.checked || false
            arr.push(
                <div key={ele.id}>
                    <input type="checkbox" checked={ele.checked} onChange={(e)=>this.rowChange(e,idx,ele)}/>,
                    <span>{ele.name}</span>,
                    <span>-----</span>,
                    <span>{ele.age}</span>,
                    <span>-----</span>,
                    <span>{ele.classBe}</span>
                    <button onClick={()=>this.rowClick(ele)}>操作</button>
                </div>
            )
        })
        return arr
}

//调用方法
{this.renderList2()}

```

# 七、react 中的表单(TestForm.js)

- 1、表单的初始规则

```js
//1、表单，在组件化中，有HTML5表单和类表单两类

//2、有哪些常用的表单？
input(type= "text" "checkbox" "radio" "file" "color" "submit" "password")
textarea,
select/option,

//3、表单：单向绑定
//value/checked & onChange 必须成双成对，一起使用，不然会报错

//4、又可分为受控表单和非受控表单，定义如下
// 受控表单：表单的 value/checked 由 state 完全控制
// 非受控表单：表单的 value/checked 不受 state 控制，与state无关
```

- 有 3 中非受控表单打死也不能用

```js
//1、采用dom直接操作表单获取value属性值，
 name:document.getElementById('name').nodeValue,

//2、采用refs的dom操作方式获取value属性值
<input ref='pass' type="password" /><br/>
pass:this.refs.pass.value

//3、通过onInput事件的事件对象获取value属性值
<input type="text" onInput={(e)=>this.getAge(e)} /><br/>
age = e.target.value
```

- React 中，除文件上传 input(type="file")以外，其它所有表单都要使用受控表单

```js
//e事件对象中的e.target.value和e.target.checked,对应表单中的value和checked

//"radio"表单
//name字段，用于把radio变成一组，并联起来
//value字段，用于给每个单选项加一个唯一值，它不用于控制勾选状态
//checked是用于控制radio的勾选状态的
//onChange和checked是成对的关系，在onChange手动取值*
<span>选择性别：</span>
<input
    name='gender'
    type='radio'
    value='1'
    checked={gender==1}
    onChange={(e)=>this.change(e,'gender')}
/>
<span>男</span>
<input
    name='gender'
    type='radio'
    value='2'
    checked={gender==2}
    onChange={(e)=>this.change(e,'gender')}
/>
<span>女</span>
```

```js
//select表单
<select value={level} onChange={(e) => this.change(e, "level")}>
  {levelArr.map((ele) => {
    <option value={ele.level_en} key={ele.id}>
      {ele.level}
    </option>;
  })}
</select>
```

```js
//"checkbox"表单
//value属性，用于checkbox选项的唯一值
//checked属性，用于checkbox选项的勾选状态
//onChange 用于手动取舍，它与checked属性是成对的
{
  favArr.map((ele) => (
    <span key={ele.id}>
      <input
        value={ele.fav_en}
        type="checkbox"
        checked={ele.checked}
        onChange={(e) => this.change(e, "favCheckedArr")}
      />
      <span>{ele.fav}</span>
    </span>
  ));
}

let favArr = [
  { id: 1, fav: "篮球", fav_en: "A" },
  { id: 2, fav: "跑步", fav_en: "B" },
  { id: 3, fav: "游戏", fav_en: "C" },
  { id: 4, fav: "游泳", fav_en: "D" },
  { id: 5, fav: "吃饭", fav_en: "E" },
];
// checkbox数据的二次处理
//用includes方法判断一个数是否有ele.fav_en，如果有就返回true,没有就返回false
favArr.map((ele, idx, arr) => {
  arr[idx].checked = favCheckedArr.includes(ele.fav_en);
});

//当页面改变时，判断.target.checked的值，true就加入到数组favCheckedArr中，false就从数组中过滤出去删除
this.setState((state) => ({
  favCheckedArr: e.target.checked
    ? [...state.favCheckedArr, e.target.value]
    : state.favCheckedArr.filter((ele) => ele !== e.target.value),
}));
```

# 八、react 中的生命周期（TestLife）

- 分为 3 个阶段装载阶段(3)，更新阶段(2)，卸载阶段(1)
- constructor/render/componentDidMount/
- componentDidUpdate/render-------------shouldComponentUpdate
- componentWillUnmount
- 1、装载阶段：执行顺序为 constructor/render/componentDidMount

```js
// （1）constructor
constructor(props){
    super(props)
    this.state={
        count:1,
        flag:false
    }
    console.log('------------constructor')
}
//构造器
//当React类被实例化变成React元素（jsx）时被调用
//sper必须是第一行代码，声明式变量定义在this.state中
//在构造器中，props和state不能交叉赋值，他两没有任何关系
//在构造器中。不要执行this.setState()
//在构造器中，不要开启异步任务，比如调接口，定时器等

```

```js
// (2)render
render(){
    let { mount } = this.state
    return (
        <div>
            <h4>测试生命周期</h4>
        </div>
    )
}
//render()非常特殊
//它是React类组件中唯一的一个必须的生命周期
//它在装载阶段和更新阶段都会执行
//当state发生变化时，render执行二次渲染，根据diff运算的脏节点来更新界面，不是全部更新
在render()或者自定义的渲染函数中，不能使用this.setState()
```

```js
// (3)componentDidMount
componentDidMount(){
    console.log("-----------componentDidMount")
}
//相当于vue中的Mounted
//它表示DOM初始化已经完成，所有虚拟Dom都已经被渲染成真实的DOM了
//一般在这里，可以调接口，定时器，DOM操作
```

- 2、更新阶段。 执行顺序：shouldComponentUpdate/render/componentDidUpdate

```js
// (1)shouldComponentUpdate
shouldComponentUpdate(nextProps,nextState){
    console.log("-----------shouldComponentUpdate")
    let { flag } = this.state
    return (nextState.flag===flag && nextState.count <=10)
}
//这是一个开关，用于控制是否更新
//询问Reac,我该更新界面吗
//这个生命周期，用于性能优化，我们可以精确地控制某些state变量发生变化时不更新视图
//实际工作中很少用，我们会函数式组件(PureComponent)作为替代解决
```

```
(2)render

```

和装载阶段中的 render 一样

```js
// (3)componentDidUpdate
componentDidUpdate(){
    console.log("----------componentDidUpdate")
}
//相当于Vue中的updated()
//表示DOM已经更新完成
//在该生命周期中，同样不要使用 this.setState()
```

- 3、卸载阶段

```js
// (1)componentWillUnmount
componentWillUnmount(){
    console.log("----------componentWillUnmount")
}
// 相当于Vue中的beforeDistroy()
// 关闭长连接、定时器，清缓存
```

# 九、react 中的父子组件传值(TestProps2)

- 父组件向子组件传值

```js
//父传子，使用自定义属性props（可以做任何类型的数据，包括React元素、方法处理器）

//父组件
class father extends React.Component{
    state = {
        count:0
    }
    render(){
        let { count } = this.state
        return (
            <children count={count}/>
        )
    }
}

//子组件
function Children(props) {
    return (
        let { count } = props
    )
}
//props的类型检测
import PropTypes from "prop-types";
Children.propTypes={
    name: PropTypes.string.isRequired,
    age: PropTypes.number,
}
Children.defaultProps={
    name: "小溪流",
    age: 12,
}

```

- 子组件向父组件传值

```js
//子传父，使用自定义事件（在React中，约定俗成，自定义事件写成 onAaaBbb 这样）

import React from "react";
//父组件
class father extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  fuchange() {
    console.log("父组件中的事件被触发了");
  }
  render() {
    let { count } = this.state;
    return (
      <div>
        {/* 父组件向子组件传递了一个参数和事件 */}
        <Children count={count} fuchange={() => this.fuchange()} />
      </div>
    );
  }
}

//子组件
function Children(props) {
  //子组件接收了参数和事件
  let { count, fuchange } = props;
  zichange = () => {
    fuchange();
  };
  return (
    <div>
      <span>{count}</span>,
      <span onClick={this.zichange()}>点击触发父组件的自定义事件</span>
    </div>
  );
}
export default father;
```

# 十、react 中的状态提升(兄弟组件传值)

- 也可通过 localstorage 或 cookie
- 找到这两个兄弟间的共同父组件

```js
// 当兄弟组件之间需要共享一些状态（数据）时
// 我们的做法是把这些需要共享的状态，定义在它们共同的父组件中。
// 这种做法就叫做“状态提升”。
```

# 十、react 中的组合与继承，实现组件复用，使用的是组合思想，不是继承思想

- (1)父组件中，组件中的值可以在子组件中调用{props.children}接收

```js
class TestCombine extends React.Component{
    render(){
        return (
            QfModal>
                   <div>1111111111</div>
                   <div>222222222</div>
                   <div>33333333</div>
                   <div>444444</div>
            </QfModal>
        )
    }
}

{props.children}
```

- (2)定义一个类组件为父组件，就可以在里面组合出许许多多的子组件

```js
// 父组件
class TestCombine extends React.Component{
    render(){
       <QfModal>
            <div>保留的父组件内容</div>
       </QfModal>
    }
}

//子组件
function QfModal(props){
    return (
        <div>
            <span>子组件内容</sapn>
            {props.children}
        </div>
    )
}
```
