import React, { Component } from 'react';

class Anything extends Component {
  render() {

    const idOf0 = this.props.products.dishList[0].images;
    const idOf1 = this.props.products.dishList[1].dishType;
    const idOf2 = this.props.products.dishList[2].dishType;
    const idOf3 = this.props.products.dishList[3].dishType;
    return (
      <div>
          <img src={idOf0} alt={this.props.products.dishList[0].cuisine}></img>
          <h1>{idOf1}</h1>
          <h1>{idOf2}</h1>
          <h1>{idOf3}</h1>
      </div>

    );
  }
}
export default Anything;
