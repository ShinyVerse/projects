import React, { Component } from 'react';
// import Person from '../components/PersonList/Person/Person';
import classes from './App.css';
import PersonList from '../components/PersonList/PersonsList'
import Cockpit from '../components/Cockpit/Cockpit';

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


    if (this.state.showPersons) {
      persons =
          <PersonList
            persons = {this.state.persons}
            changed={this.nameChangeHandler}
            clicked={this.deletePersonHandler}/>

          

    }
    // let classes = ['red', 'bold'].join(' '); //"red bold"



    return (
      <div className={classes.App}>
          <Cockpit
            showPersons ={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonsHandler}
           />
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
