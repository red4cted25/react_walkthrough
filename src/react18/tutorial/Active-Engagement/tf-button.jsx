import {useState} from 'react'

const TrueFalseButton = () => {
    const [value, setValue] = useState('False')
    const [number, setNumber] = useState(0)

    const updateValue = (value) => {
        setValue(value === 'True' ? 'False' : 'True')
    }

  return (
    <>
        <section style={{margin: '4rem 0'}}>
            <h2>True/False</h2>
            <h1>{value}</h1>
            <h3>Button Pressed {number} Times</h3>
            <button className="btn" style={{backgroundColor: value === 'True' ? 'green' : 'red'}} onClick={() => {updateValue(value); setNumber(number+1)}} >Change State</button>
        </section>
        
    </>
  )
}

export default TrueFalseButton