import {useState, useEffect} from 'react'

// Clean up functions

import React from 'react'

const UseEffectCleanup = () => {
    const [xSize, setXSize] = useState(window.innerWidth)
    const [ySize, setYSize] = useState(window.innerHeight)

    const checkSize = () => {
        setXSize(window.innerWidth)
        setYSize(window.innerHeight)
    }

    useEffect(() => {
        console.log("Use Effect")
        window.addEventListener('resize', checkSize)
        return () => {
            console.log("Clean Up")
            window.removeEventListener('resize', checkSize)
        }
    })

    console.log("Render Component")

  return (
    <div>
        <h1>Window Size</h1>
        <h2>{xSize} x {ySize} PX</h2>
    </div>
  )
}

export default UseEffectCleanup