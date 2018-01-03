import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let json = this.props.objarr;
  console.log(Object.keys(json));
  Object.keys(json).map(function(key, index) {
     console.log(json[key]);
  });
  return(
    <div>
  
    </div>
  )
  }

  render() {

    return (
      <div><button onClick = {this.handleClick}>Press</button></div>

    )
  }
}

export default App;
