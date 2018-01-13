import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Anything from './components/Anything.js';


const API_URL =  'http://www.recipepuppy.com/api/';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true,
      recipes: []
    }

  }


  componentDidMount() {
   this.fetchList();

 }

 fetchList() {
   fetch('http://www.recipepuppy.com/api/')
     .then(response => response.json())
     .then(parsedJSON => parsedJSON.results.map(recipe => (
       {
       ingredients: `${recipe.ingredients}`,
       thumbnail: `${recipe.thumbnail}`,
       title: `${recipe.title}`
     }
   )))
   .then(recipes => this.setState({loading: false, recipes: recipes })

   )
     .catch(error => console.log('failed', error))
 }


  render(){

  return (
    <div>
    <Anything recipes = {this.state.recipes} loading={this.state.loading}/>
    </div>
  );
}
}

ReactDOM.render(<App />, document.querySelector('.container'));
