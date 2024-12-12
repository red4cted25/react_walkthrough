import {useState} from 'react'

const MultipleInputs = () => {
    const [person, setPerson] = useState({firstName: '', email: '', age: ''})
    const [people, setPeople] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target
        setPerson({...person, [name]: value})
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(person.firstName && person.email && person.age){
            const newPerson = {...person, id: new Date().getTime().toString()}
            setPeople([...people, newPerson])
            setPerson({firstName: '', email: '', age: ''})
        }
    }

  return (
    <>
        <article className="form">
            <form>
                <div className="form-control">
                    <label htmlFor="firstName">Name: </label>
                    <input type="text" name="firstName" id="firstName" value={person.firstName} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email: </label>
                    <input type="email" name="email" id="email" value={person.email} onChange={handleChange} />
                </div>
                <div className="form-control">
                    <label htmlFor="age">Age: </label>
                    <input type="number" name="age" id="age" value={person.age} onChange={handleChange} />
                </div>
                <button type="submit" className='btn' onClick={handleSubmit}>Add Person</button>
            </form>
        </article>
        <article>
            {people.map((person) => {
                const {id, firstName, email, age} = person;
                return (
                    <div key={id} className="item">
                        <h4>{firstName}</h4>
                        <p>{email}</p>
                        <p>{age}</p>
                    </div>
                )
            })}
        </article>
    </>
  )
}

export default MultipleInputs