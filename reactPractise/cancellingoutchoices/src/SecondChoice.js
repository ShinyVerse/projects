import FirstChoice from './FirstChoice';
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class SecondChoice extends Component {
  constructor(props) {
  super(props);
  this.state = {hasBeenPressed: false};

  // This binding is necessary to make `this` work in the callback
  this.handleSecondPress = this.handleSecondPress.bind(this);
}

handleSecondPress(){
  console.log( FirstChoice.state.hasBeenPressed ? "SecondbuttonPressed" : "Secondbuttonfailed");
}

render(){
return (
  <div>
    <button className="secondButton" onClick={this.handleSecondPress}>Before I am pressed</button>
  </div>
);
}
}

export default SecondChoice;
