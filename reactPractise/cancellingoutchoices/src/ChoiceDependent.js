import React, { Component } from 'react';

import Choices from './Choices';


class ChoiceDependent extends Component {
  render(){
    return (
      <div className="containingDiv">
        <Choices />
      </div>
    );
  }
}

export default ChoiceDependent;
