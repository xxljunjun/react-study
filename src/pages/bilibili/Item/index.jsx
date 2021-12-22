import React,{useState} from 'react'
import './index.scss'
const Item = props =>{
    let [status,setStatus] = useState(false)
    const {valobj,del} = props
    const handler = (val)=>{
        setStatus(val)
    }
    const toDelete = ()=>{
        console.log(valobj)
        del(valobj.id)
    }
    return(
        <>
         <div className='item' onMouseEnter={()=>handler(true)} onMouseLeave={()=>handler(false)}>
              <div className='left'>
                  <input type="checkbox" defaultChecked={valobj.check}/><span className='eat'>{valobj.name}</span>
              </div>
              <button className='btn' style={{display:status?'block':'none'}} onClick={toDelete}>删除</button>
          </div>
        </>
    )
}
export default Item