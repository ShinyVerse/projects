import React from 'react';

let styles = {
    width: '400px',
    height: '300px',
    background: '#ebebeb',
    padding: '5px 5px 30px',
    margin: '5px',
    textAlign: 'center',
    border: '2.5px solid #303030 '
};

const CountryCard = (props) => {
  return (
    <div style={styles }>
        <h2>{props.country}</h2>
        <h3>{props.day}</h3>
        <p>{props.celebration}</p>
        <img src={props.img} height={'150px'} width={"210px"} border={'1px solid black'} alt="Country'sImage"/>
    </div>
  );
}

export default CountryCard;
