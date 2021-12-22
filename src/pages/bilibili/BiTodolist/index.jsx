import React,{useState} from "react";
import Header from "../Header/";
import List from "../List/";
import Bottom from "../Bottom/";
import "./index.scss";

const BiTodolist = (props) => {

  let [listArr,setListArr] = useState([
    {id:1,name:'吃饭',check:false},
    {id:2,name:'睡觉',check:false},
    {id:3,name:'打豆豆',check:true},
  ])
  const add = (obj)=>{
    setListArr([obj,...listArr])
  }
  const del = (id) =>{
    console.log(id)
    let newlistArr = listArr.filter(val=>{
       if(val.id !==id ) return val
    })
    setListArr(newlistArr)
  }

  const delComplate = ()=>{
    let newlistArr = listArr.filter(val=>{
        if(!val.check) return val
    })
    setListArr(newlistArr)
  }
  return (
    <>
      <div className="todolist">
        <Header add={add}/>
        <List listArr={listArr} del={del}/>
        <Bottom delComplate={delComplate}/>
      </div>
    </>
  );
};
export default BiTodolist;
