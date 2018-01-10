import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar.js'
import VideoList from './components/VideoList.js'


const API_KEY = 'AIzaSyCHhiRTdRhMxZ4t_1RXis82RPupe-cDkg0';


//create a new component. This component should produce some html.
//some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
       this.setState({ videos });

    });

  }
  render(){
  return (
    <div>
      <SearchBar />
      <VideoList videos={this.state.videos} />
    </div>
  );
}
}
//Take this component's generated  HTML and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
