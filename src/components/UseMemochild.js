import React, { useEffect, useState } from 'react'
let renderCount=0
function UseMemochild() {
   
    useEffect(()=>{
        renderCount++;

    })
  return (
    <div>
      <h1>UseMemochild:{renderCount}</h1>
    </div>
  )
}

export default UseMemochild
