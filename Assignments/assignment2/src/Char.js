import React from 'react';
//Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop

const Char =  (props) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    textAlign: 'center',
    margin: '16px',
    border: '1px solid black'
  };
  return (
     <div style={style} onClick={props.click}>
       {props.character}
     </div>
   );
}

export default Char;
