import React,{useState} from 'react'

const initState =['Bruce','Wayen']
function ArrayUseState() {

    const [persons,setPersons] = useState(initState)

     const handleClick = () =>{
         const newPerson = [...persons]
         newPerson.push ('Sajitha')
         newPerson.push ('Saranga')
         setPersons(newPerson)
     }

    console.log("Array Render");
  return (
    <div>
      
      <button onClick={handleClick}>Click</button>
      {
        persons.map(
            (person)=>(
                <div key={person}>{person}</div>
            )
        )
      }
    </div>
  )
}

export default ArrayUseState
