import React from 'react'
import './index.scss'
const Bottom = props =>{
    let {delComplate} = props
    const del = ()=>{
        delComplate()
    }
    return(
        <>
           <div className='last'>
                    <div> 
                        <input type="checkbox" />
                        <span className='txt'>已完成0/全部2</span>
                    </div>
                    <button className='btn' onClick={del}>清除已完成任务</button>
                </div>
        </>
    )
}
export default Bottom