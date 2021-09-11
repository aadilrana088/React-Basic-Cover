import React from 'react'
import './UserOutput.css'
export default function UserOutput(props) {
    return (
        <div className="userOutput">
            <p>{props.userName}</p>
            <p>Second Paragraph</p>
        </div>
    )
}
