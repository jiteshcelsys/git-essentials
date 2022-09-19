import React,{useRef,useEffect} from "react";
import './App.css'

export default function UseRef() {
       let nameRef=useRef()
       let emailRef=useRef()
       let marriedRef=useRef()
       let submitRef=useRef()
       useEffect(()=>{
        nameRef.current.focus()
        },[])
        function keypressHandle(e)
        {
           if(e.keyCode===13)
           {
            if(e.target.id==="nameInput")
            {
                emailRef.current.focus();
            }
            if(e.target.id==="emailInput")
            {
                marriedRef.current.focus();
            }
            if(e.target.id==="marriedInput")
            {
                submitRef.current.focus()
            }
        }
        }
        function submitButton()
        {
            alert('form is submitted')
        }
  return (
    <div>
        <h1>Use Ref Hooks</h1>
        <div className="form-control">
            <h3> Name</h3>
        <input type="text" placeholder="user" ref={nameRef} onKeyDown={keypressHandle} id="nameInput"/>
        </div >
        <div className="form-control">
            <h3> Email id</h3>
        <input type="text" placeholder="user" ref={emailRef} onKeyDown={keypressHandle} id="emailInput"/>
        </div>
        <div className="form-control">
            <h3> Married</h3>
        <input type="checkbox" placeholder="user"ref={marriedRef} onKeyDown={keypressHandle} id="marriedInput"/>
        </div>
        <input type="submit" ref={submitRef} onKeyDown={keypressHandle} id="submitInput" onClick={submitButton}/>

      
    </div>
  )
}

