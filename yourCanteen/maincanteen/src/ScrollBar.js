import React, {Component} from 'react';
import TodayTomorrow from './TodayTomorrow';

import './ScrollBar.css';

class ScrollBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      day: "today"
    };

    this.dateClicker = this.dateClicker.bind(this);
  }

dateClicker() {
return (
  <div>
    <ol>
      <li>today</li>
      <li>tomorrow</li>
    </ol>
  </div>
)
}


render() {
const scrollList = <ol>
  <li><ArrowDay /></li>
  <li></li>
  <li></li>
  <li></li>
  <li></li>
</ol>

  return (
    <div>
      {scrollList}
    </div>
  );
}
}

export default ScrollBar;
