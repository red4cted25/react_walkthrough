// This is an example of why we need to use useState and not variables

import React from 'react'

const ErrorExample = () => {
    let title = 'Where the Red Fern Grows'

    const handleClick = () => {
        title = 'Fahrenheit: 451'
        console.log(title)
    }

    return (
        <>
            <h2>{title}</h2>
            <button type='button' className='btn' onClick={handleClick}>Change Title</button>
        </>
    )
}

export default ErrorExample

/*
This is an error because we are not rendering the site
This will also fail because we do not have a way of preserving the variables between renders

Now that you can see whay you would error and the use case for the useState,
let's learn to make it work
*/