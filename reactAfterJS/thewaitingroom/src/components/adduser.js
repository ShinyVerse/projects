import React from 'react';

const adduser = (props) => {
  console.log(props.name);
  return (
    <div className="adduser">
    <form>
      <span className="input-list-tag">Patient's name:<input onChange={props.changeNameEvent} value={props.name} ></input></span>
      <span className="input-list-tag">Waiting for:<input onChange={props.changeDestEvent} value={props.dest} ></input></span>
    </form>
    <button onClick={props.buttonAction}>Add Patient</button>
  </div>
  )
}

export default adduser;
