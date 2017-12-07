

import React, { Component } from 'react';


class TimesTables extends Component {
  constructor(){
    super();
    this.state = {val:0}
    this.currentNum = 0;
    this.update = this.update.bind(this)
    this.updateMinus = this.updateMinus.bind(this)
  }
  update(){
    this.setState({val: this.state.val + 9})
    this.currentNum++;
  }
  updateMinus(){
    this.setState({val: this.state.val - 9})
    this.currentNum--;
  }

  componentWillMount(){
    console.log('componentWillMount');
  }

  render(){
    console.log('render');
    return <div>
            <h1>The 9 times table is the best, so we'll start with that:</h1>
            <button onClick={this.update}>+</button>
            <h2>{this.currentNum} x 9 is</h2>
            <h1>{this.state.val}</h1>
            <button onClick={this.updateMinus}>-</button>
          </div>
  }
  componentDidMount(){
    console.log('componentDidMount');
    // this.inc = setInterval(this.update, 1000)
  }
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

}

export default TimesTables;
