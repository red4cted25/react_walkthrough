import {useState, useEffect} from 'react'

const ShowHide = () => {
    const [show, setShow] = useState(false)

    
  return (
    <>
    <button className="btn" onClick={() => setShow(!show)}>Show/Hide</button>
    {show && <Item />}
    </>
  )
}

const Item = () => {
    const [size, setSize] = useState(window.innerWidth)
    const checkSIze = () => {
        setSize(window.innerWidth)
    }
    
    useEffect(() => {
        window.addEventListener('resize', checkSIze)
        return () => window.removeEventListener('resize', checkSIze)
    }, [])
    return (
        <div>
            <h1>Window Size:</h1>
            <h2>{size} PX</h2>
        </div>
    )
}

export default ShowHide