import React from 'react';

const user = (props) => {
  return (
    <li style={props.style} className="patient-li" >
      <h3>
        Patient: {props.children}
      </h3>
      <h5>For: {props.wf}</h5>
      {/* <h1>timecount: {props.timecount}</h1> */}
      <button onClick={props.delEvent}>Complete</button>
      <button onClick={props.updatedEvent}>Updated</button>
    </li>
  )
}

export default user;
