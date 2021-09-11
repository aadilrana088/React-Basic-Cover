import React, { Component } from "react";
import Person from "./Person";

class ClassComp extends Component {
  state = {
    person: [
      { name: "Aadil", age: 23 },
      { name: "Shoiab", age: 20 },
    ],
  };
  handler = () => {
    this.setState({
      person: [
        { name: "Aadil Rana", age: 24 },
        { name: "Asif", age: 25 },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        {/* <Person name="Aadil" age="20">This is Children</Person> */}
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}
        />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
        />
        <button onClick={this.handler}>Change</button>
      </div>
    );
  }
}

export default ClassComp;
