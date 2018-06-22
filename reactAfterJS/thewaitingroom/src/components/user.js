import React from 'react';

const user = (props) => {
  return (
    <li className="patient-li green">
      <h3>
        Patient: {props.children}
      </h3>
      <h5>For: {props.wf}</h5>
      <button onClick={props.delEvent}>Complete</button>
    </li>
  )
}

export default user;
