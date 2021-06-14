import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom'

const MusicRow =props =>{
    let { music } = props
    const history = useHistory()
    const goDetail =()=>{
        history.push('/music/detail/'+music.id)
    }
    return(
        <div key={music.id}>
            <span>{music.id}</span>
            <span>------</span>
            <span>{music.name}</span>
            <span>------</span>
            <span>{music.time}</span>
            <span>------</span>
            <button onClick={goDetail}>查看详情</button>
        </div>
    )
}
MusicRow.propTypes={
    music:PropTypes.object.isRequired
}


export default MusicRow
