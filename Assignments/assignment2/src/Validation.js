
import React from 'react';
//Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length
//condition ? expr1 : expr2


const Validation = (props) => {
  let validationMessage = 'Text length okay';

  if (props.currentLength <= 5){
    validationMessage = 'Text too short';
  }
  // let hasPassed = (props.currentLength < 5) ? 'Text too short' : 'Text length fine';

  return <p>{validationMessage}</p>

};

export default Validation;
