import React, { PureComponent } from 'react';
import Person from './Person/Person';

class PersonsList extends PureComponent {
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

  componentWillReceiveProps(nextProps) {
    console.log('UPDATE PersonsList.js Inside componentWillReceiveProps', nextProps);
  }
//A PureComponent automatically checks this.
  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log('[UPDATE PersonsList.js] Inside shouldComponentUpdate()', nextProps, nextState);
  //   return nextProps.persons !== this.props.persons ||
  //   nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
      console.log('[UPDATE PersonsList.js] Inside componentWillUpdate()', nextProps, nextState);
  }

  componentDidUpdate(){
    console.log('[UPDATE PersonsList.js] Inside componentDidUpdate()');
  }
  render() {
    console.log('[PersonsList.js] Inside render()');
    return  this.props.persons.map((person, index) => {
        return <Person
          key={person.id}
          position={index}
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
