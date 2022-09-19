import React, { useEffect,useRef } from 'react'

function usePrevious(value) {
    const ref=useRef(null);
    useEffect(()=>
    {
        ref.current=value;
    })
  return ref.current
}

export default usePrevious
