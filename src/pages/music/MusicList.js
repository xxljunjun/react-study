import React from 'react'
import { useState,useEffect } from 'react'
import MusicRow from './MusicRow'
//引入状态管理
import { inject,observer } from 'mobx-react'
import { message, Button, Space } from 'antd';

const MusicList = props=>{
    let { music } = props.store
    let [page,setPage] = useState(1)
    let [text,setText] = useState("")
    let [flage,setFlage] = useState(false)

    const changPage =(flag)=>{
        if(flag==="reduce" && page<2) return  message.warning('亲，这个按钮不能再点了哟')
        setPage(flag==="next" ? ++page :--page)
        console.log("page",page)
    }
    const changeText = (e)=>{
        setText(e.target.value)
    }
    const changmusic = (e)=>{
        if(e.keyCode===13){
            setFlage(!flage)
        }
    }

    useEffect(()=>{
        const str = `ct=24&qqmusic_ver=1298&new_json=1&remoteplace=txt.yqq.song&searchid=61453023483879617&t=0&aggr=1&cr=1&catZhida=1&lossless=0&flag_qc=0&p=1&n=10&w=${text}&g_tk_new_20200303=921856724&g_tk=921856724&loginUin=448914712&hostUin=0&format=json&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq.json&needNewCode=0`
        const params ={}
        str.split("&").map(ele=>{
            let arr = ele.split("=")
            params[arr[0]]=arr[1]
        })
        params.w = decodeURI(params.w)
        params.p=page
        console.log("params",params)

        music.changeList(params)
        return undefined
    },[flage,page])

    return (
        <div>
            <h3>音乐列表</h3>
            <input 
                type="text" value={text} 
                onChange={(e)=>changeText(e)}
                onKeyUp={e=>changmusic(e)}
            />
            <hr/>
            {
                music.musicArr.map(ele=>(
                    <MusicRow key={ele.id} music={ele}/>
                ))
            }
            <button 
            style={{marginRight:30+'px'}}
            onClick={()=>changPage('reduce')}
            >
                上一页
            </button>
            <button onClick={()=>changPage('next')}>下一页</button>
        </div>
    )
}
export default inject("store")(observer(MusicList))