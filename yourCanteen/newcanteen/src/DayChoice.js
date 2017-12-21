import React, {Component} from 'react';

import './DayChoice.css';

class DayChoice extends Component {


render() {
  const today = this.props.today;

  let link = null;
  let link2 = null
  if (today) {
      link = <a className="selected" onClick={this.props.handleClick}>Today</a>
      link2 = <a className="" onClick={this.props.handleClick}>Tomorrow</a>

  } else {
      link = <a className="" onClick={this.props.handleClick}>Today</a>
      link2 = <a className="selected" onClick={this.props.handleClick}>Tomorrow</a>
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
