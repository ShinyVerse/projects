import React, { Component } from 'react';
import YourCanteen from './YourCanteen';


class Display extends Component {
  render() {
     return (
       <div>

         <YourCanteen  products={this.props.products}  />
       </div>
     );
   }
 }
export default Display;
