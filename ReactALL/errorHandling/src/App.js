import React, { Component } from 'react';
import Person from './Person/Person.js';
import classes from './App.css';

import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import './App.css';

class App extends Component {
  state ={
      persons: [
          {id: 'oah21', name: "Laura", age: 28 },
          {id: 'oah2fdf', name: "Cloud", age: 32 },
          {id: 'oahdfsd2fdf', name: "Bob", age: 2 },
          {id: 'oah2eadf', name: "Mr.Bean", age: 65 }
      ],
      showPersons: false
  };


    nameChangeHandler = (event, id) => {

      const personIndex = this.state.persons.findIndex(p  => {
        return p.id === id;
      });
      const person = {
        ...this.state.persons[personIndex]
      };

      person.name = event.target.value;
      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState({ persons: persons} );
        // this.setState({  persons: [
        //         {name: "Buffy", age: 28 },
        //         {name:  event.target.value, age: 32 },
        //         {name: "Sally", age: 65 }
        //     ]})
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

    let persons = null;
    let btnClass = '';

    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <ErrorBoundary  key={person.id}>
              <Person
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}
            />
            </ErrorBoundary>
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
      btnClass = classes.Red;
    }
    // let classes = ['red', 'bold'].join(' '); //"red bold"
    let assignedClasses = [];
    if (this.state.persons.length <= 2 ){
      assignedClasses.push(classes.red);
    }
    if (this.state.persons.length <= 1){
      assignedClasses.push(classes.bold);
    }

    return (
      <div className={classes.App}>
          <h1>Hi, I'm a react app</h1>
          <p className={assignedClasses.join(' ')}>This is really working!</p>
          <button
            className = {btnClass}
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
