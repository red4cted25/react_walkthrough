import {useState, useEffect} from 'react'

// By default useEffect runs afer every re-render

const UseEffectBasics = () => {
    const [value, setValue] = useState(0)

    useEffect(() => {
        console.log('Called useEffect')
        if (value > 0) {
            document.title = `New Message (${value})`
        }
    })

    console.log("rendering component")

  return (
    <div>
        <h1>{value}</h1>
        <button className="btn" onClick={() => {setValue(value+1)}}>Click Me</button>
    </div>
  );
}

export default UseEffectBasics;