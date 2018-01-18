import React from 'react';
import { Component } from 'react';

import AnimalsList from '../containers/animal-list';
import AnimalDetail from '../containers/animal-detail';

export default class App extends Component {
  render(){
    return(
      <div>
        <AnimalsList />
        <AnimalDetail />
      </div>
    );
  }
}
