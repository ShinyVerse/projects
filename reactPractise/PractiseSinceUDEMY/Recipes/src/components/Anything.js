import React from 'react';

const Anything = (props) => {
  if (props.loading){
    return <div>I am loading...</div>
  }

  // ({video}) is identical to having (props) and then
  // writing within the expression: const video = props.video; ES6 code ^
  console.log(props);

  return (
<div>hi {props.recipes[0].title}</div>
  );
};

export default Anything;
