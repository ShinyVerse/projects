import React, { Component } from 'react';
import Person from './Person/Person';

class PersonsList extends Component {
  constructor(props) {
    super(props);
    console.log('[PersonsList.js] Inside Constructor', props);

  }

  componentWillMount() {
    console.log('[PersonsList.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[PersonsList.js] Inside componentDidMount()')
  }

  render() {
    console.log('[PersonsList.js] Inside render()');
    return  this.props.persons.map((person, index) => {
        return <Person
          key={person.id}
          name={person.name}
          age={person.age}
          click={() => this.props.clicked(index)}
          changed={(event) => this.props.changed(event, person.id)} />
      });
  }
}



// const PersonsList = (props) =>
//   props.persons.map((person, index) => {
//     return <Person
//       key={person.id}
//       name={person.name}
//       age={person.age}
//       click={() => props.clicked(index)}
//       changed={(event) => props.changed(event, person.id)}
//     />
//   }
// );

export default PersonsList;
