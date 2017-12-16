
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class FirstChoice extends Component {
  constructor(props) {
  super(props);
  this.state = {hasBeenPressed: false};

  // This binding is necessary to make `this` work in the callback
  this.handleFirstPress = this.handleFirstPress.bind(this);
}

handleFirstPress(){
  console.log("First button pressed");
}

  render(){
  return (
    <div>
      <button className="firstButton" onClick={this.handleFirstPress}>I must pressed first</button>
    </div>
  );
}
}

export default FirstChoice;
