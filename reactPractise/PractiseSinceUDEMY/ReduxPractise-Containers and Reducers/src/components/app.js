import React from 'react';
import { Component } from 'react';

import AnimalsList from '../containers/animal-list';

export default class App extends Component {
  render(){
    return(
      <div>
        <AnimalsList />
      </div>
    );
  }
}
