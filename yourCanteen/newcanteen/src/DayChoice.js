import React, {Component} from 'react';

import './DayChoice.css';

class DayChoice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      today: true
    };

    this.handleClick = this.handleClick.bind(this);
}

handleClick(e) {
  if (!e.target.className){

  this.setState(prevState => ({
    today: !prevState.today}));
} else {
  e.preventDefault();
console.log(e.target.className);
}
}

render() {
  const today = this.state.today;

  let link = null;
  let link2 = null
  if (today) {
      link = <a className="selected" onClick={this.handleClick}>Today</a>
      link2 = <a className="" onClick={this.handleClick}>Tomorrow</a>

  } else {
      link = <a className="" onClick={this.handleClick}>Today</a>
      link2 = <a className="selected" onClick={this.handleClick}>Tomorrow</a>
  }

  return (
    <div>
      {link}
      {link2}
    </div>
  );
}
}

export default DayChoice;
