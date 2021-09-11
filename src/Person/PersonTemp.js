import React from 'react'
const PersonTemp = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name} and {props.age} year old</p>
        </div>
    )
}
export default PersonTemp