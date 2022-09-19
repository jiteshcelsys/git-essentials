import React from 'react'
function NameEdit(props)
{ let name=props.firstName;
    console.log(name)

    return(
       
        <div>
            <h1>firstName:{name}</h1>
            <br>
            </br>
            <h1>lets learn the :{props.react}-{props.firstName}</h1>
        </div>
    )
}
export default NameEdit