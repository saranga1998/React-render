import React,{useState,useMemo,useCallback} from 'react'
import { MemoizedChildThree } from './ChildThree';

function ParentThree() {
    const [count,setCount] = useState(0)
    const [name,setName] = useState('Saranga')

    const person ={
        fname: 'Bruce',
        lname: 'Wayne'
    }

    const memoizedPerson =useMemo(()=>person,[])
    const handleClick = () => {}

    const memoizedHandleClick = useCallback(handleClick,[])

    console.log("Parent Three render");
  return (
    <div>
      <button onClick={()=>setCount((c)=>c+1)}>Count-{count}</button>
      <button onClick={()=>setName('BatMan')}>Change name</button>
      <MemoizedChildThree name={name} handleClick={memoizedHandleClick}/>
    </div>
  )
}

export default ParentThree