import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar.js'
import VideoList from './components/VideoList.js'
import VideoDetail from './components/VideoDetail.js'


const API_KEY = 'AIzaSyCHhiRTdRhMxZ4t_1RXis82RPupe-cDkg0';


//create a new component. This component should produce some html.
//some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

     this.videoSearch('overwatch');

  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
       this.setState({
         videos: videos,
         selectedVideo: videos[0]
        });
    });
  }

  render(){
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

  return (
    <div>
      <SearchBar onSearchTermChange= {videoSearch} />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
        onVideoSelect={ selectedVideo => this.setState({selectedVideo}) }
        videos={this.state.videos} />
    </div>
  );
}
}
//Take this component's generated  HTML and put it
//on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
