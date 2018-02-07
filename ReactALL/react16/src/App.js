import React, { Component } from 'react';
import Person from './Person/Person.js';

import './App.css';

class App extends Component {
  state ={
      persons: [
          {name: "Laura", age: 28 },
          {name: "Cloud", age: 32 },
          {name: "Mr.Bean", age: 65 }
      ]
  };

    switchNameClick = (newName) => {
        this.setState({
            persons: [
                {name: newName, age: 28 },
                {name: "Molly", age: 32 },
                {name: "Sally", age: 65 }
            ]
        });
    };

    nameChangeHandler = (event) => {
        this.setState({  persons: [
                {name: "Buffy", age: 28 },
                {name:  event.target.value, age: 32 },
                {name: "Sally", age: 65 }
            ]})
    };

  render() {
    return (
      <div className="App">
          <h1>Hi, I'm a react app</h1>
          <button onClick={() => this.switchNameClick("Buffy")}>Switch Name</button>
          <Person
              name={this.state.persons[0].name}
              age={this.state.persons[0].age}
              click={this.switchNameClick.bind(this, 'Willow')}
          />
          <Person
              name={this.state.persons[1].name}
              age={this.state.persons[1].age}
              changed = {this.nameChangeHandler}
          >Hobbies: Dancing</Person>

          <Person
              name={this.state.persons[2].name}
              age={this.state.persons[2].age}

          />
      </div>
    );
  }
}

export default App;
