import { useState } from "react";
import { BsSearchHeartFill } from "react-icons/bs";
import Button from "../components/Button";
import {default as Topics} from '../components/Question'

function Test() {
    let sports = "Baseball"
    let src = "https://assets.science.nasa.gov/dynamicimage/assets/science/astro/exo-explore/2024/03/wasp12b.png"
    let w="712", h="450", alt="Wasp 12-B"
    let info = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus cupiditate natus recusandae dolore! Eius in quam repellendus eligendi quaerat odio."
    let triggered = []
    // let content;

    // if(triggered.length <= 0) {
    //     return(<h1>This rendered first haha</h1>)
    // }
    // if(isLoggedIn) {
    //     content = <AdminPanel />
    // }else {
    //     content = <LoginForm />
    // }
    // return(content);
    const [count, setCount] = useState(0);
    const handleClick = () => {
        setCount(count + 1)
    }
    return(
    <>
        <Button count={count} onClick={handleClick}/>
        <Button count={count} onClick={handleClick}/>
        <h1>Nico Diaz</h1>
        <p>Hello, my name is Nico Diaz</p>
        <h3>{sports}</h3>
        <img src={src} alt={alt} width={w} height={h} />
        <button ><BsSearchHeartFill size="500px" style={{backgroundColor: 'rgb(180, 56, 210)', color: 'rgb(255,165,0)'}}/></button>
        <Topics title="Hannibal" info={info} />

        {
            triggered.length > 0 ? <h1>Hello Data</h1> : <h1>I'm triggered</h1>
        }
        {/* {
            isLoggedin ? <AdminPanel /> : <LoginForm />
        } */}
        <Button />
        <Button />
    </>
    )
}

export default Test;