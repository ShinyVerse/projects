import React, { Component } from 'react';

import './App.css';

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true, newToggle: false};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);

  this.newClick = this.newClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn}));
  }

  newClick() {
    this.setState(prevState =>({
      newToggle: !prevState.newToggle
    }));
  }

  render() {
    return (
      <div>
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>

        <button onClick={this.newClick}>
        {this.state.newToggle ? 'THIS' : 'THAT'}
      </button>
        </div>
    );
  }
}
export default Toggle;
