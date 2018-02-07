import React, { Component } from 'react';
import Input from './input/Input.js';


import './App.css';

class App extends Component {


    state ={
        words: [
            {word: "brave" },
            {word: "five"},
            {word: "monsters" }
        ]
    };

changeWord1 = (event) => {
  this.setState({    words: [
        {word: event.target.value },
        {word: "five"},
        {word: "monsters" }
    ]})
};
changeWord2 = (event) => {
  this.setState({    words: [
        {word: "brave" },
        {word: event.target.value},
        {word: "monsters" }
    ]})
};
changeWord3 = (event) => {
  this.setState({    words: [
        {word: "brave" },
        {word: "five"},
        {word: event.target.value }
    ]})
};


    render() {
    return (
      <div className="App">
          <h1>This is how the story begins...</h1>
          <p>There once was a {this.state.words[0].word} girl who although was only {this.state.words[1].word}, took on the world and all its {this.state.words[1].word}.</p>
          <Input changed={this.changeWord1} />
          <Input changed={this.changeWord2} />
          <Input changed={this.changeWord3} />


      </div>
    );
  }
}

export default App;

          {/*<button onClick={() => this.switchNameClick("Buffy")}>Switch Name</button>*/}
          {/*<Person*/}
              {/*name={this.state.persons[0].name}*/}
              {/*age={this.state.persons[0].age}*/}
              {/*click={this.switchNameClick.bind(this, 'Willow')}*/}
          {/*/>*/}
