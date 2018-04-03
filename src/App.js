import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput.js';
import UserOutput from './UserOutput/UserOutput.js';

class App extends Component {
  state = {
    username: 'JBearX'
  }
  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value});
  }
  render() {
    return (
      <div className="App">
        <h1>hi</h1>
        <UserInput 
          changed={this.usernameChangedHandler}
          currentName={this.state.username} />
        <UserOutput userName={this.state.username} />
        <UserOutput userName="hi" />
        <UserOutput userName="Isa"/>
      </div>
    );
  }
}

export default App;
