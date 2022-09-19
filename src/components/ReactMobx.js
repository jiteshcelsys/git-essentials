import React from 'react'
import {Observer,useObserver} from 'mobx-react-lite';
const ReactMobx=Observer(()=> {
  const store=useObserver(
    {
      count:1,
      addOne()
         {
          store.count++
         },
         subOne()
         {
          store.count--

         }
    }
  )
  function IncreaseFunc()
  {
    store.addOne()
  }
  function DecreaseFunc()
  {
    store.subOne()
  }
  return (
    <div>
      <h1>{store.count}</h1>
      <button onClick={IncreaseFunc}>INCREASE</button>
      <button onClick={DecreaseFunc}>DECREASE</button>
      <h1>ReactMobx</h1>
      
    </div>
  )
})

export default ReactMobx
