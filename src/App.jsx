import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseState from './Components/UseState/UseState'
import UseReduser from './Components/UseReduser/UseReduser'
import ObjectUseState from './Components/Immutable State/ObjectUseState'
import ArrayUseState from './Components/Immutable State/ArrayUseState'
import ParentTwo from './Components/Optimization/ParentTwo'

function App() {
  

  return (
    <>
      {/* <UseState/> */}
      {/* <UseReduser/> */}
      {/* <ObjectUseState/> */}
      {/* <ArrayUseState/> */}
      <ParentTwo/>
    </>
  )
}

export default App
