import React from 'react';
import ListOption from "./Option"

const Selector = (props) => {
  return (

    <select onChange={props.onChangeSelect}>
      {props.countries.sort().map((place) => {
         return (<ListOption
           country={place[0]}
           key={place[1]}
           code={place[1]}
         />)
      })}
    </select>
  )
}

export default Selector;
