import React from 'react'
import styled from 'styled-components';
// import './NewPerson.css'

const StyleDiv = styled.div`
    padding: 20px;
    margin: 20px auto;
    border: 1px solid #eee;
    box-shadow: 0 2px 2px #ccc;
    width: 60%;
    @media (min-width: 500px) {
        width: 450px;
    }
`;
export default function NewPersonChid(props) {
    return (
        <StyleDiv>
            <p>I am {props.name} and {props.age} year old</p>
            <input type="text" onChange={props.changeHandler} />
        </StyleDiv>
    )
}
