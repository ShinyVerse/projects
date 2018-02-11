import React from 'react';
{/* <li>Create another component (=> CharComponent)
   and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
<li>Render a list of CharComponents
 where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
  */}

   const myStyles = {
     display: 'inline-block',
     padding: '16px',
     textAlign: 'center',
     margin: '16px',
     border: '1px solid black'
   }



const Char = (props) => {

  return(
    <div style = {myStyles} onClick={props.click}>
      {props.character}
    </div>
  );
}

export default Char;
