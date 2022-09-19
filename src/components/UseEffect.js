import React, { useEffect, useState } from "react";

export default function UseEffect() {
    const init={x:null,y:null}

   const [xy,setXY]=useState(init) 
   const [time,setTime]=useState(Date)
  //set xy
useEffect(()=>{
    window.addEventListener('mousedown',mousemoveHandle)
},[])
function mousemoveHandle(e)
{
  if(e.clientX>500)
  {
    alert(`you have clicked the x at${e.clientX}`)
  }

    setXY({
        x:e.clientX,y:e.clientY
    })
}



   useEffect(()=>{
    let handleInput=setInterval(()=>{
            setTime(Date)
    },1000)
    return()=>
{
    clearInterval(handleInput)
    
}
    
   })


  return (
    <div>
        <h2>{`x:${xy.x} y:${xy.y}`}</h2>
        <h2>use Effect Example</h2>
        <h3>Data and time :{time}</h3>
      
    </div>
  )
}
