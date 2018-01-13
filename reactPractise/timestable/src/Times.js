
import TableChoice from './TableChoice';
import React, { Component } from 'react';


class Times extends Component {
  constructor(props){
    super(props);
    this.state = {val: 0}

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick = (e) => {
    console.log(e);
  }


  render(){
    console.log('render');
    return <div>
            <h1>Timestables</h1>
            <button val=1>1</button>
            <button >2</button>
            <button >3</button>
            <button >4</button>
            <button >5</button>
            <button >6</button>
            <br/>
            <TableChoice />

          </div>
  }
  }

  export default Times;
