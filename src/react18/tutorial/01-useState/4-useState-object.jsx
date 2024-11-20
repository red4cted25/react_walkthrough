import {useState} from 'react'

const UseStateObject = () => {
    const [person, setPerson] = useState({
        name: 'John', 
        age: 30, 
        message: "Papa John"
    })
    // const [name, setName] = useState('John')
    // const [age, setAge] = useState(30)
    // const [message, setMessage] = useState('Papa John')

    const changeMessage = () => {
        setPerson({...person, message: 'Pizza Hut'})
    }
  return (
    <>
    <h3>{person.name}</h3>
    <h3>{person.age}</h3>
    <h4>{person.message}</h4>
    <button onClick={changeMessage} className="btn">Change Message</button>
    </>
  )
}

export default UseStateObject