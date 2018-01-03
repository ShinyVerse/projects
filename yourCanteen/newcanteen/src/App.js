import React, {Component} from 'react';
import Display from './Display';
import DisplayMenu from './DisplayMenu';
import DayChoice from './DayChoice';

import './App.css';

const PRODUCTS = {
  "dishList": [
  {

      "dishType": "LUNCH"

    }, {
      "dishType": "DINNER"
    }, {
      "dishType": "BREAKFAST"
    }


]
}

class App extends Component {
constructor(props) {
  super(props);
  this.state = {
    today: true
  };

  this.handleClick = this.handleClick.bind(this);
}

handleClick(e) {
  if (!e.target.className) {
    this.setState(prevState => ({
      today: !prevState.today
    }));
  } else {
    e.preventDefault();
    console.log(e.target.className);
  }
}
render() {
  return (
    <div className="App">
      <DayChoice handleClick={this.handleClick} today={this.state.today}/>
      <Display products={PRODUCTS}/>

    </div>
  );
}
}

export default App;
