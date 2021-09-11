import React from 'react'
import './NewPerson.css'
export default function NewPersonChid(props) {
    return (
        <div className="person">
            <p>I am {props.name} and {props.age} year old</p>
            <input type="text" onChange={props.changeHandler} />
        </div>
    )
}
