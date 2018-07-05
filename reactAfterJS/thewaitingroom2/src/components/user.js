import React from 'react';

const user = (props) => {
  return (
    <li style={props.style} className="patient__card" >
      <h3>
        Patient: {props.children}
      </h3>
      <h5>For: {props.wf}</h5>
      {/* <h1>timecount: {props.timecount}</h1> */}
      <button className="btn complete card__btn" onClick={props.delEvent}>Completed</button>
      <button className="btn refresh card__btn" onClick={props.updatedEvent}>Updated</button>
    </li>
  )
}

export default user;
