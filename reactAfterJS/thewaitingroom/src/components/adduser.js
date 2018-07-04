import React from 'react';

const adduser = (props) => {
  console.log(props.name);
  return (
    <div className="patient--new">
      <form className="patient__form">
        <span>Patient's name:<input onChange={props.changeNameEvent} value={props.name} className="patient__input--name"></input>
      </span><br/>
        {/* <span className="input-list-tag">Waiting for:<input onChange={props.changeDestEvent} value={props.dest} ></input></span> */}
        <span>Waiting for:</span><br/>
        <select  onChange={props.changeDestEvent} className="department--select">
          <option value="none" >------ Please choose an option ----</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Diagnostic Imaging">Diagnostic Imaging</option>
          <option value="ENT">ENT</option>
          <option value="Haematology">Haematology</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopaedics">Orthopaedics</option>
          <option value="Radiotherapy">Radiotherapy</option>
        </select>

      </form>
      <button onClick={props.buttonAction} className="btn patient__btn">Add Patient</button>
      <p className="error--font">{props.error_message}</p>
    </div>
  )
}

export default adduser;
