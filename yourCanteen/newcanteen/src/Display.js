import React, { Component } from 'react';



class Display extends Component {


    render() {
      console.log(this.props.products.dishList);
      return (
        <div>

            {
              this.props.products.dishList.map(product => {
                    return <li product={product} key={product.id}>{product.cuisine}</li>})
            }
        </div>

      );
    }
  }

export default Display;
