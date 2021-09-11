import React, { Component } from 'react'
import ListAssignmentAppValidation from './ListAssignmentAppValidation'
import CharComp from './CharComp'

class ListAssignmentApp extends Component {
    state = {
        userInput: ''
    }
    changeHandlder = (event) => {
        this.setState({
            userInput: event.target.value
        })
    }

    deleteCharHandler = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index,1);
        const updateText = text.join('');
        this.setState({
            userInput: updateText
        })
    }

    render() {
        const charList = this.state.userInput.split('').map( (ch,index)=> {
            return <CharComp character={ch} key={index} clicked = {()=>this.deleteCharHandler(index)} />
        })
        return (
            <div>
                <input type="text" value={this.state.userInput} onChange={this.changeHandlder} />
                <p>{this.state.userInput}</p>
                <ListAssignmentAppValidation inputLength={this.state.userInput.length} />
                {charList}
            </div>
        )
    }
}

export default ListAssignmentApp
