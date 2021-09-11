import React, { Component } from "react";
import "./App.css";
import ClassComp from "./Person/ClassComp";
import FuctionComp from "./Person/FuctionComp";
import PersonTemp from './Person/PersonTemp'
import NewPerson from "./Person/NewPerson";
import UserOutput from "./Assignment/UserOutput";
import UserInput from "./Assignment/UserInput";
import ListPerson from "./Person/ListPerson"
class App extends Component {
  state = {
    userName: "Aadil Rana"
  }
  handler =(event)=> {
    this.setState({
      userName: event.target.value
    })
  }
  render() {
    return (
      <div>
        {/* <FuctionComp />
        <ClassComp /> */}
        {/* <NewPerson /> */}
        {/* <UserInput handler = {this.handler} userName={this.state.userName}/>
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName="Asif"/> */}
        <ListPerson/>
        {/* <button onClick={this.handler}>Change</button> */}
      </div>
    );
  }
}

export default App;
