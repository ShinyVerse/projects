import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/SearchBar.js'

const apiKey = 'AIzaSyCHhiRTdRhMxZ4t_1RXis82RPupe-cDkg0';
//create a new component. This component should produce some html.
//some html
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}
//Take this component's generated HTML and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
