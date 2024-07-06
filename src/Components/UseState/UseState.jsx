import React,{useState} from 'react'

function UseState() {

    const [count,setCount] = useState(0)
    console.log("Render value");
  return (
    <div>
        <h1>{count}</h1>
      <button onClick={()=>{setCount((c)=>(c+1))}}>Increment</button>
      <button onClick={()=>{setCount(0)}}>Zero</button>
      <button onClick={()=>{setCount(5)}}>Increment 5</button>
    </div>
  )
}

export default UseState
