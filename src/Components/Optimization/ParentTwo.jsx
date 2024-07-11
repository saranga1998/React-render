import React,{useState} from 'react'
import {MemoizedChildTwo} from './ChildTwo';

function ParentTwo() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('Saranga')


    console.log("Parent two render");
  return (
    <div>
      <button onClick={()=>setCount((c)=>c+1)}>Count-{count}</button>
      <button onClick={()=>setName('BatMan')}>Change name</button>
      <MemoizedChildTwo name={name}/>
    </div>
  )
}

export default ParentTwo
