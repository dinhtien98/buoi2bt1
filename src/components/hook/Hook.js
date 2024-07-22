import { useState } from "react";

export default function Hook1(){
    const [number1, setNumber1]=useState("")
    const [number2, setNumber2]=useState("")
    const [res,setRes]=useState("")
    return(
        <>
            <div>
                <input placeholder="nhập vào số thứ 1" value={number1} onChange={(e)=>setNumber1(e.target.value*1)}/><br/>
                <input placeholder="nhập vào số thứ 2" value={number2} onChange={(e)=>setNumber2(e.target.value*1)}/><br/>
                <button onClick={()=>setRes(number1+number2)}>+</button>
                <button onClick={()=>setRes(number1-number2)}>-</button>
                <button onClick={()=>setRes(number1*number2)}>*</button>
                <button onClick={()=>setRes((number1/number2).toFixed(3))}>/</button>
                <h1>kết quả là: {res}</h1>
            </div>
        </>
    )
}