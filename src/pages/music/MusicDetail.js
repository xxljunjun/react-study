import React ,{ useEffect } from 'react'
import { useParams,useHistory } from 'react-router-dom'

const MusicDetail =props=>{
    let { id } = useParams()
    const history = useHistory()
    const goBack = ()=>{
        history.goBack("/music")
    }

    useEffect(()=>{
        // console.log(id)
    },[])

    return (
        <div>
            <h4>音乐详情</h4>
            <h4>这首歌的音乐id是：{id}</h4>
            <button onClick={goBack}>返回上一页</button>
        </div>
    )
}
export default MusicDetail