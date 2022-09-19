import React, { useState } from 'react'
import '../components/Grocery.css'
let grocery = [{ name: 'cabbage', price: 20 },
{ name: 'brinjal', price: 40 },
 { name: 'Potato', price: 30 }]
export default function GroceryList() {
    let [list,setList]= useState(grocery)
    let removeList=(e)=>{
    //    console.log(e.target.parentElement.id);
    //    e.target.parentElement.remove()
    console.dir(e.target.parentElement.id);
    e.target.parentElement.remove()

    }




   
    return (
        <div>
            <h1>GroceryList</h1>
           {list.map((value,index)=>{
            return(
               
                   <ul id={index+1} >
                 
                  <li  >{value.name}</li>
                    <li>{value.price}</li>
                    <button onClick={removeList} >remove</button>
                   </ul>
                    
               
            )
           })}

        </div>
    )
}
