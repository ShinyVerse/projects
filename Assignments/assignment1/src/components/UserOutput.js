import React from 'react';

const UserOutput = (props) => {
  const style = {
    margin: 'auto',
    border: 'black 2px solid',
    backgroundColor: '#eee',
    padding: '10px',
    width: '40%',
    marginTop: '10px'
  }
  return (
    <div style={style}>
      <p>{props.username}</p>
      <p onClick={props.changeName}> paragraph 1</p>
      <p> paragraph 2</p>
    </div>
  );
}

export default UserOutput;
