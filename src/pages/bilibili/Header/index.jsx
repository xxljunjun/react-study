import React from 'react'
import './index.scss'
// import nanoid from 'nanoid'
const Header = props =>{
    // console.log(nanoid)
    let {add} = props
    const addList = (e)=>{
        if(e.keyCode == 13){
            if(!e.target.value){
                return
            }
            console.log(e.target.value)
            let obj = {
                id: new Date(),
                name:e.target.value,
                check:false
            }
            add(obj)
            e.target.value = ''
        }

    }
    return(
        <>
          <div className='input_box'>
                    <input type='text' className='tast' placeholder='请输入你的任务名称，按回车健确认' onKeyDown={(e)=>addList(e)}/>
                </div>
        </>
    )
}
export default Header