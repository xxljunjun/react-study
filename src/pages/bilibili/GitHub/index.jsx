import React, { useState,useEffect } from 'react'
import SearchList from '../SearchList/'
import './index.scss'
import axios from 'axios'
const GitHub = props =>{
    let [manResult,setManResult] = useState([])
    let  [keyword,setKeyword] = useState('')
    let [isLoading,setIsLoading] = useState(false)
    let [err,setErr] = useState('')
    let [isFirst,setIsfirst] = useState(true)
    const goToSearch = ()=>{
        console.log('点击了搜索',keyword)
        setIsfirst(false)
        setIsLoading(true)
        axios(`https://api.github.com/search/users?q=${keyword}`).then(res=>{
            console.log("请求成功",res)
            let result = res.data.items
            setManResult(result)
            setIsLoading(false)
        },err=>{
            console.log("请求失败",err)
            setErr(err)
            setIsLoading(false)
        })
    }
    useEffect(()=>{
        // setIsfirst(false)
        return undefined
    },[])
    return(
        <>
           <div className='gitSearch'>
                <div>
                    <h2>Search GitHub Users</h2>
                    <input type='text' placeholder='点击搜索按钮开始搜索' value={keyword} onChange={(e)=>setKeyword(e.target.value)}/><button className='btn' onClick={goToSearch}>搜索</button>
                </div>
           </div>
           <SearchList manResult={manResult} isLoading={isLoading} err={err} isFirst={isFirst}/>
        </>
    )
}
export default GitHub