import React, { Component } from 'react'
import NewPersonChid from './NewPersonChid'
class NewPerson extends Component {
    state = {
        person: [
            {name: "Aadil", age: 20},
            {name: "Asif", age: 25}
        ]
    }


    handler = (newName)=> {
        this.setState({
            person: [
                {name: newName, age: 20},
                {name: "Ikram", age: 25}
            ]
        })
    }


    changeHandler = (event)=> {
        this.setState({
            person: [
                {name: "Ikram", age: 20},
                {name: event.target.value, age: 25}
            ]
        })
    }
    
    render() {
        const style = {
            background: "green",
            color: 'white',
            fontSize: "20px",
            padding: "8px 15px",

        }
        return (
            <div className="App">
                <NewPersonChid name={this.state.person[0].name} age={this.state.person[0].age} />
                <NewPersonChid name={this.state.person[1].name} age={this.state.person[1].age} changeHandler={this.changeHandler}  />
                {/* <button onClick= {this.handler.bind(this,"ZAID")}>Change</button> */}
                <button style={style} onClick= {()=> this.handler("ZAID")}>Change</button>
            </div>
        )
    }
}

export default NewPerson
