import React from 'react'

export default function UserInput(props) {
    const inputStyle = {
        border: '2px solid black',
        padding: "8px"
    }
    return (
        <div>
            <input style={inputStyle} type="text" onChange={props.handler} value={props.userName}/>
        </div>
    )
}
