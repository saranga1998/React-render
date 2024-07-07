import React,{useState} from 'react'

const initalState ={
    fname:'Bruse',
    lname:'Wayen'
}



function ObjectUseState() {

    const [person,setPerson] = useState(initalState)

    const changeName = () =>{
        const newPerson = {...person}
        newPerson.fname = 'Sajitha'
        newPerson.lname = 'Saranga'
        setPerson(newPerson)
    }

    console.log("Object UseState Render");
  return (
    <div>
      <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}

export default ObjectUseState
