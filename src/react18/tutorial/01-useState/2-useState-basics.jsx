import {useState} from "react";

// Remember the component name must be uppercase
// Invoke useState inside the function, not outside
// Don't call hooks conditionally

const UseStateBasics = () => {
    
    const [text, setText] = useState("Where the Red Fern Grows");

    // Function to change the text
    const handleClick = () => {
        if(text === "Where the Red Fern Grows") {
            setText("Fahrenheit: 451");
        }else if(text === "Fahrenheit: 451"){
            setText("The Book Thief");
        }else if(text === "The Book Thief"){
            setText("Where the Red Fern Grows");
        }
    }
    return (
        <>
            <h2>{text}</h2>
            <button type='button' className='btn' onClick={handleClick}>Change Title</button>
        </>
    )
}

export default UseStateBasics