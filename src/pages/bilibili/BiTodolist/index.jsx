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
  return (
    <>
      <div className="todolist">
        <Header add={add}/>
        <List listArr={listArr}/>
        <Bottom />
      </div>
    </>
  );
};
export default BiTodolist;
