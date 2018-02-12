import React, { Component } from 'react';
import Person from './Person/Person.js';

import './App.css';

class App extends Component {
  state ={
      persons: [
          {id: 'oah21', name: "Laura", age: 28 },
          {id: 'oah2fdf', name: "Cloud", age: 32 },
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
    const style= {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div >
          {this.state.persons.map((person, index) => {
            return <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={() => this.deletePersonHandler(index)}
              changed={(event) => this.nameChangeHandler(event, person.id)}
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
      style.backgroundColor = 'red';
    }
    // let classes = ['red', 'bold'].join(' '); //"red bold"
    let classes = [];
    if (this.state.persons.length <= 2 ){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
      <div className="App">
          <h1>Hi, I'm a react app</h1>
          <p className={classes.join(' ')}>This is really working!</p>
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
