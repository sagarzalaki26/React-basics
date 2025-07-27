import React, { useEffect, useState } from 'react'

function Github() {
    const[data,setdata]=useState([])
    useEffect(()=>{
        fetch("http://api.github.com/users/sagarzalaki26")
        .then(response=>response.json())
        .then(data=>{
            console.log(data);
            setdata(data);
            
        })

    },[])
  return (
    <div className='bg-amber-100 max-w-screen mx-auto text-black '>
        <div className='max-w-7xl mx-auto m-4'>
             <h2 className='p-4 text-2xl'>Github follower:{data.name}</h2>
             <h2 className='p-4 text-2xl'>Github follower:{data.created_at}</h2>
        <h2 className='p-4 text-2xl'>Github follower:{data.followers}</h2>
        </div>

      
    </div>
  )
}

export default Github
