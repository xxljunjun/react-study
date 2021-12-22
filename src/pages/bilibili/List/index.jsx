import React from 'react'
import './index.scss'
import Item from '../Item/'
const List = props =>{
    const {listArr,del} = props
    return(
        <>
          <div className='list'>
                {
                    listArr.map(valobj=>{
                        return(
                            <Item valobj={valobj} key={valobj.id} del={del}/>
                        )
                    })
                }
            </div>
        </>
    )
}
export default List