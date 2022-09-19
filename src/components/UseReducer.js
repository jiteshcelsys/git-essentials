import React,{useReducer} from 'react'
 let initialState={
    count:0
 }
 function redcuerFunction(state=initialState,action)
 {
    switch(action.type)
    {
        case 'INCREASE':
            return{ count:state.count+1}

            case 'DECREASE':
                return {count:state.count-1}
    }
 }
function UseReducer() {
    let[state,dispatch]=useReducer(redcuerFunction,initialState);
    function PlusOperartion()
    {
        dispatch({
            type:"INCREASE"
        })
    }
    function MinusOperation()
    {
       if(state.count>0)
       {
        dispatch(
            {
                type:"DECREASE"
            }
        )
       }
       else{
        alert('count should be greater than 0')
       }
    }
  return (
    <div>

        <h1>{state.count}</h1>
        <button onClick={PlusOperartion}>Plus</button>
        <button onClick={MinusOperation}>Minus</button>
      
    </div>
  )
}

export default UseReducer
