import React from 'react'
import './NewPerson.css'
const Person = (props) => {
    return (
        <div className="person">
            {/* <h1>I am {props.name} and I am {props.age} years old.</h1>
            <p>{props.children}</p> */}
            <h1 onClick={props.click}>I am {props.name} and I am {props.age} years old</h1>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Person