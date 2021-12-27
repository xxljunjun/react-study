import React,{useState} from 'react'
import './index.scss'
/*
    有4种情况：
*/
const SearchList = props =>{
    const {manResult,isLoading,err,isFirst} = props
    const gotogithub = (url)=>{
        console.log('需要跳转的url',url)
        // location.href=url;
        window.open(url);
    }

    // useEffect(()=>{
        
    //     return undefined
    // },[])

    return(
        <>
           
           <div className='large_box'>
                
           {
               isFirst?<div>welcome...</div>
               :isLoading?<div>loading...</div>
               :err?<div>请求出错了!</div>
               :manResult.length ==0?<div>数据接口为空!</div>
               :manResult.map(valobj=>{
                    return(
                        <div className='box' key={valobj.id} onClick={()=>gotogithub(valobj.html_url)}>
                            <img src={valobj.avatar_url} alt='touxiang'></img>
                            <span>{valobj.login}</span>
                        </div>
                    )
               })
           }
           </div>
          
        </>
    )
}
export default SearchList