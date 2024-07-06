import React,{useReducer} from 'react'

const initialState = 0

const reducer = (state,action) => {
    switch(action){
        case 'Increment':
            return state+1
        case 'Decrement':
            return state-1
        case 'Reset':
            return initialState
        default:
            return state
    }
}

function UseReduser() {
    const [count,dispatch] = useReducer(reducer,initialState)
    console.log("Render value")
  return (
    <div>
        <div>{count}</div>
        <button onClick={()=>{dispatch('Increment')}}>Increment</button>
        <button onClick={()=>{dispatch('Decrement')}}>Decrement</button>
        <button onClick={()=>{dispatch('Reset')}}>Reset</button>
    </div>
  )
}

export default UseReduser
