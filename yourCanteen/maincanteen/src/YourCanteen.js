import React, { Component } from 'react';

class Anything extends Component {
  render() {

    const idOf = this.props.products.dishList[0].dishType;
    return (
    <h1>{idOf}</h1>
    );
  }
}
export default Anything;
