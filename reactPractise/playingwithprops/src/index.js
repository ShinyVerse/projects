import React from 'react';
import ReactDOM from 'react-dom';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function Goodbye(props){
  return <h1> Goodbye, {props.name} you must now go and do your task of {props.tasks}</h1>;
}

const arrayTasks = ["shopping for food", "cleaning the house", "cooking dinner"]

const element = <Goodbye name="Sara" tasks={arrayTasks[1]} />;
ReactDOM.render(
  element,
  document.getElementById('root')
);
