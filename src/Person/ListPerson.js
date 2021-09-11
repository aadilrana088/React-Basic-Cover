import React, { Component } from "react";
import Person from "./Person";
import '../App.css'
class ListPerson extends Component {
  state = {
    persons: [
      { id: "one", name: "Aadil", age: 30 },
      { id: "two", name: "Shoiab", age: 20 },
      { id: "three", name: "Ikram", age: 40 },
    ],
    showPerson: true,
  };
  nameChangeHandler = (event, id) => {
    const personsIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personsIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personsIndex] = person;

    this.setState({
      persons: persons,
    });
  };
  togglePerson = () => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow,
    });
  };
  deletePerson = (personIndex) => {
    //   const person = this.state.person
    //This is not a good approch, we should create a copy of array and then assign it to setstate method as below
    // const person = this.state.person.slice();   this is an older aproch to create a new copy
    // new one is using spread operator
    const person = [...this.state.persons];
    person.splice(personIndex, 1);
    this.setState({
      persons: person,
    });
  };
  
  render() {
    const style = {
      backgroundColor: 'green',
      color: 'white',
      border: '1px solid #eee',
      padding: '10px',
      margin: '20px'
    }
    let persons = null;
    if (this.state.showPerson) {
      persons = (
        <div>
          {this.state.persons.map((prsn, index) => {
            return (
              <Person
                name={prsn.name}
                age={prsn.age}
                click={() => this.deletePerson(index)}
                key={prsn.id}
                changed={(event) => {
                  this.nameChangeHandler(event, prsn.id);
                }}
              />
            );
          })}
          {/* <Person
            name={this.state.person[0].name}
            age={this.state.person[0].age}
          />
          <Person
            name={this.state.person[1].name}
            age={this.state.person[1].age}
          />
          <Person
            name={this.state.person[2].name}
            age={this.state.person[2].age}
          /> */}
        </div>
      );
      style.backgroundColor = 'red'
    }
    let classes  = ["red","bold"].join(" ")

    let classesArray = [];
    if(this.state.persons.length <=2 ) {
      classesArray.push("red");
    }
    if(this.state.persons.length <=1 ) {
      classesArray.push("bold");
    }

    return (
      <div className="App">
        <button style={style} onClick={this.togglePerson}>Toggle Person</button>
        <p className= {classes}>This will be styling paragraph</p>
        <p className= {classesArray.join(" ")}>This will be conditional styling paragraph</p>
        {persons}
      </div>
    );
  }
}

export default ListPerson;
