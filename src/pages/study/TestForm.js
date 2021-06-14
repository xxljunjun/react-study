import React from 'react'

let age = ''
class TestForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name: '2009',
            dec:'',
            level:"大学",
            gender:1,
            favCheckedArr:['A','B','E']
        }

    }
    getAge(e){
        // console.log(e.target.value)
        age = e.target.value
    }

    submitUnctrlForm(){
        // ref 是React中也有，它一种快捷访问、操作DOM的方式
        // 尽可能减少 DOM / ref 操作'
        const data ={
            name:document.getElementById('name').nodeValue,
            pass:this.refs.pass.value,
            age 
        }
        console.log('非受控表单提交', data)
    }
    submitCtrlForm(){
        console.log('提交受控表单', this.state)
    }
    change(e,key){
        switch (key) {
            case 'favCheckedArr':
                this.setState(state=>({favCheckedArr:e.target.checked?[...state.favCheckedArr,e.target.value] : state.favCheckedArr.filter(ele=>ele!=e.target.value)}))
                break;
        
            default:
                // console.log(e.target.value,e.target.checked)
                //很有灵性，用动态key去接收参数
                this.setState({[key]:e.target.value})
        }
        
    }
    render(){
        let { name,dec,level,gender,favCheckedArr } = this.state
        let levelArr =[
            { id: 1, level: '高中', level_en: 'a' },
            { id: 2, level: '大专', level_en: 'b' },
            { id: 3, level: '本科', level_en: 'c' },
            { id: 4, level: '硕士', level_en: 'd' },
            { id: 5, level: '博士', level_en: 'e' }
        ]
        let favArr = [
            { id: 1, fav: '篮球', fav_en: 'A' },
            { id: 2, fav: '跑步', fav_en: 'B' },
            { id: 3, fav: '游戏', fav_en: 'C' },
            { id: 4, fav: '游泳', fav_en: 'D' },
            { id: 5, fav: '吃饭', fav_en: 'E' }
          ]
          // checkbox数据的二次处理
          //把在
          favArr.map((ele,idx,arr)=>{
              arr[idx].checked=favCheckedArr.includes(ele.fav_en)
          })
        return (
            <div>
                <h4>表单文件测试</h4>
                <hr/>

                {/*  以下三种非受控表单，不要用 */}
                <h4>非受控表单</h4>
                <input id="name" type="text" /><br/>
                <input ref='pass' type="password" /><br/>
                <input type="text" onInput={(e)=>this.getAge(e)} /><br/>
                <button onClick={()=>this.submitUnctrlForm()}>提交非受控表单</button><br/><br/>

                <hr/>
                <h4>受控表单</h4>
                <span>用户名：</span>
                <input type='text' value={name} onChange={(e)=>this.change(e,"name")}/><br/>
                <span>个人简介：</span>
                <textarea value={dec} onChange={(e)=>this.change(e,'dec')}></textarea><br></br>
                <span>选择学历：</span>
                <select value={level} onChange={(e)=>this.change(e, 'level')}>
                    {  
                        levelArr.map(ele=>{
                            return <option
                              value={ele.level_en}
                              key={ele.id}
                            >
                              {ele.level}
                            </option>
                          })
                    }
                </select>
                
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
                <span>选择你的爱好：</span>
                {
                    favArr.map(ele=>{
                        return <span key={ele.id}>
                            <input 
                                value={ele.fav_en}
                                type="checkbox"
                                checked={ele.checked}
                                onChange={(e)=>this.change(e,'favCheckedArr')}
                            />
                        <span>{ele.fav}</span>
                        </span>
                    })
                }
                <button onClick={()=>this.submitCtrlForm()}>提交受控表单</button>
                
            </div>
        )
    }
}
export default TestForm