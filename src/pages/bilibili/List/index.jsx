import React from 'react'
import './index.scss'
import Item from '../Item/'
const List = props =>{
    const {listArr} = props
    return(
        <>
          <div className='list'>
                {
                    listArr.map(valobj=>{
                        return(
                            <Item valobj={valobj} key={valobj.id}/>
                        )
                    })
                }
            </div>
        </>
    )
}
export default List