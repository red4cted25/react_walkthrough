import {useState} from 'react'

// short-circuit evaluation AKA ternary in returns
const ShortCircuit = () => {
    const [text, setText] = useState('Daniel')
    const [isError, setIsError] = useState(false)
    const firstValue = text || "Hallownest"
    const secondValue = text && "Hallownest"

  return (
    <>
    <h1>{firstValue}</h1>
    <h1>Value: {secondValue}</h1>
    {/* <h1>{text || 'John Doe'}</h1> */}
    <button className="btn" onClick={() => setIsError(!isError)}>Toggle Error</button>
    {isError && <h1>Error...Brain Lost</h1>}
    {isError ? (<p>There is an Error. Please Help</p>) : (<div><h2>There is no Error</h2></div>)}
    <button className="btn" onClick={() => setText("")}>Change ME</button>
    </>
  )
}

export default ShortCircuit