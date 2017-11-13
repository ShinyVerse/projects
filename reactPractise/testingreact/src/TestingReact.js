import React, { Component } from 'react';
import './TestingReact.css';

class TestingReact extends Component {
  render() {
    return (
      <div className="testContainer">
        <h1>Testing!</h1>
        <button id="clickMe">Click Me!</button>
      </div>
    );
  }
}

export default TestingReact;
