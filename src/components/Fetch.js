import React, { useEffect, useState } from 'react'
 const intitProfile={login:null,id:null}
export default function Fetch() {
    const [profile,setProfile]=useState(intitProfile)
    async function getProfile()
    {  let url="https://api.github.com/users"
        const response=await fetch(url);
        const json=await response.json();
        console.log(json)
        setProfile(
            {
                login:json[1].login,
                id:json[1].id
               
            }
        )
    }
    useEffect(()=>{
        getProfile();
    },[])
    
  return (
    <div>
        <h1>Fetch</h1>
        <h2>{`Login:${profile.login}`}</h2>
        <h2>{`id:${profile.id}`}</h2>
      
    </div>
  )
}
