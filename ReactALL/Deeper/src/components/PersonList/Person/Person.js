import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
// import WithClass from '../../../hoc/WithClass';
import withClass from '../../../hoc/withClassredone';
import Aux from '../../../hoc/Auxiliary';


class Person extends Component {
  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);

  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()')
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
    if (this.props.position === 0){
        this.anyProperty.focus();
    };

  }
  render(){
    console.log('[Person.js] Inside render()')
    return (
        <Aux>
            <p onClick={this.props.click}>Hi, I am {this.props.name} and I am {this.props.age} years old </p>
            <p>{this.props.children}</p>
            <input
              //calling this in componentDidMount, will focus on all, but as focus can only be on one, it will only show on last one.
              ref={(anyNameInput) => { this.anyProperty = anyNameInput }}
              type="text"
              onChange={this.props.changed}
              value={this.props.name} />
        </Aux>
    );

    // return [
    //   <p onClick={this.props.click}>I'm a person and I am {this.props.name} I am {this.props.age} years old </p>,
    //   <p>{this.props.children}</p>,
    //   <input type="text" onChange={this.props.changed} value={this.props.name} />
    // ]
  }
}

Person.propTypes = {
  click: PropTypes.func ,
  name: PropTypes.string ,
  age: PropTypes.number ,
  changed: PropTypes.func
};

export default withClass(Person, classes.Person);
