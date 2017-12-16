
import ReactDOM from 'react-dom';
import React, { Component } from 'react';

class Choices extends Component {
  constructor(props) {
  super(props);
  this.state = {firstBeenPressed: false,
                secondBeenPressed: false
                  };

  // This binding is necessary to make `this` work in the callback
  this.handleFirstPress = this.handleFirstPress.bind(this);
  this.handleSecondPress = this.handleSecondPress.bind(this);
  this.testSecondPress = this.testSecondPress.bind(this);
}

handleFirstPress(){

  this.setState(prevState => ({
       firstBeenPressed: !prevState.firstBeenPressed
 }));
 console.log(this.state.firstBeenPressed);
 if (this.state.firstBeenPressed){
   this.handleSecondPress();
 }
}

testSecondPress(){

  if (this.state.firstBeenPressed) {
    this.handleSecondPress();
  } else {
    console.log("Denied");
  }

}


handleSecondPress(){
  this.setState(prevState => ({
       secondBeenPressed: !prevState.secondBeenPressed
 }));
 console.log(this);
 console.log(this.state.secondBeenPressed);
  console.log("Change to activated");

}




  render(){
  return (
    <div>
      <button className="firstButton" onClick={this.handleFirstPress}> {this.state.firstBeenPressed? 'Activated' : 'OFF'}</button>
      <button className="secondButton" onClick={this.testSecondPress}>{this.state.secondBeenPressed ? "Activated" : "Denied"}</button>
    </div>
  );
}
}

export default Choices;
