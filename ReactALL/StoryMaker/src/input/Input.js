import React from 'react';



const Person = (props) => {
    return (
        <div>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    );
};

export default Person;
