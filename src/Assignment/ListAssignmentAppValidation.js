import React from 'react'

function ListAssignmentAppValidation(props) {
    let validation = "Text too long"
    if (props.inputLength <= 5) {
        validation = "Text too Short"
    }
    return (
        <div>
            {
                validation
                // props.inputLength <= 5 ? <p>Text too Short</p> : <p>Text too Long</p>
            }
        </div>
    )
}

export default ListAssignmentAppValidation
