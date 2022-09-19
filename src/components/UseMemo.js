import React, { useState,useMemo } from "react";
import UseMemochild from "./UseMemochild";
function UseMemo() {
    let [data,setData]=useState(0)
   function UpdateData(){
    setData(data+1)
   }
   let memoChild=useMemo(()=>{
    return <UseMemochild/>
   },[])
  return (
    <div>
        <h1>Increment:{data}</h1>
        <button onClick={UpdateData}>Increment</button>
        <h1>normal render</h1>
       <UseMemochild/>  
       <h3>memo render:{memoChild}</h3>


        

      
    </div>
  )
}

export default UseMemo
