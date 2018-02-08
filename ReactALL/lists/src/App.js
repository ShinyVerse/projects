import React, { Component } from 'react';
import Person from './Person/Person.js';

import './App.css';

class App extends Component {
  state ={
      persons: [
          {name: "Laura", age: 28 },
          {name: "Cloud", age: 32 },
          {name: "Mr.Bean", age: 65 }
      ],
      showPersons: false
  };


    nameChangeHandler = (event, index) => {
        this.setState({  persons: [
                {name: "Buffy", age: 28 },
                {name:  event.target.value, age: 32 },
                {name: "Sally", age: 65 }
            ]})
    };

    deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex, 1);
      this.setState({
          persons: persons
      });
    }

    togglePersonsHandler = () => {
      // const doesShow = this.state.showPersons;
      this.setState({showPersons: !this.state.showPersons});
    }

  render() {
    const style= {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.name}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={this.nameChangeHandler}
            />
          })}
        {/* <Person
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
            /> */}

        </div>
      );
    }

    return (
      <div className="App">
          <h1>Hi, I'm a react app</h1>
          <button
            style={style}
            onClick={this.togglePersonsHandler}>Toggle</button>
          {/* { this.state.showPersons ? */}
            {/* Can put persons in here
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
                      />*/}
            {/* : null} */}
            {persons}
      </div>
    );
  }
}

export default App;
