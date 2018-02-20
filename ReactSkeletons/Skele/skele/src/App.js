import React, { Component } from 'react';
import ListItem from './Components/List';
import Functional from './Components/Functional';
import './App.css';


class App extends Component {
  state = {
    list : [
      {id: 1, letter: 'a'},
      {id: 2, letter: 'b'},
      {id: 3, letter: 'c'}
    ]
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">React Skeletons</h1>
        </header>
        <div className="App-intro">
          <h3>Mapping through state and returning JSX:</h3>
          {this.state.list.map( listItem => {
            return (
              <div key={listItem.id}>
                {listItem.letter}
              </div>
            )
          } )}
        </div>
        <h3>Mapping Through list items and making a component out of each:</h3>
        {this.state.list.map( listItem => {
          return (
            <ListItem letter={listItem.letter}/>
          ) })
        }
        <h3>Functional Component:</h3>
        <Functional />
      </div>
    );
  }
}

export default App;
