import React from 'react';
import './UserInput.css'

const UserInput = (props) => {
  return (
    <input
      className='UserInput'
      onChange={props.change} placeholder={props.username}/>
  );
}

export default UserInput;
