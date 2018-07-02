import React from 'react';


const Flag = (props) => {
  if (props.flagImg === "blank"){
    return null;
  } else {
    return <img src={props.flagImg} alt="flag image"/>
  }
}
export default Flag;
