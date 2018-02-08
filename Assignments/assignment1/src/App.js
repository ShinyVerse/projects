import React, { Component } from 'react';
import UserInput from './components/UserInput';
import UserOutput from './components/UserOutput';

import './App.css';

class App extends Component {
  state = {
    users : [
    {name: 'Mark'},
    {name: 'Belle'}
  ]};

  changeNameHandler = (event) =>{
    this.setState({
      users : [
      {name: event.target.value},
      {name: 'Belle'}
    ]
    })
  }
  render() {

    return (
      <div className="App">
        <UserInput change={this.changeNameHandler} username={this.state.users[0].name}/>
        <UserOutput
          username="Jamie"/>
        <UserOutput
          username={this.state.users[0].name} />
        <UserOutput   />
      </div>
    );
  }
}

export default App;
