import React from 'react';

const Project = (props) => {
  return (
    <div className="project__box">
      <li className="secondary--title">{props.title}</li>
      <img className= "project--img"
        src={props.img}
        alt='portfolio show item'/>
    </div>

  )
}

export default Project;
