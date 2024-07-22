import React, { useRef, useState } from 'react'
import "./hook1.css"

export default function Hook1() {
    const [flag,setFlag]=useState(true)
    const sidebarRef=useRef()
  return (
    <>
        <div className={flag?"hook1 active":"hook1"}>
            <h1>Hook 1</h1>
            <p>Flag: {flag?"true":"false"}</p>
        </div>
        <div className='meo' ref={sidebarRef}>

        </div>
        <button onClick={()=>{
            setFlag(!flag)
            sidebarRef.current.classList.toggle("active")
            }}>change flag</button>
    </>
    
  )
}
