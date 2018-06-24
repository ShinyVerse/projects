import React from 'react';

const adduser = (props) => {
  console.log(props.name);
  return (
    <div className="adduser">
      <form id="adduser-form">
        <span className="input-list-tag form-item"  >Patient's name:<input onChange={props.changeNameEvent} value={props.name}></input>
      </span><br/>
        {/* <span className="input-list-tag">Waiting for:<input onChange={props.changeDestEvent} value={props.dest} ></input></span> */}
        <span className="input-list-tag form-item">Waiting for:</span><br/>
        <select  onChange={props.changeDestEvent} className="form-item" id="dept-selection">
          <option value="none" >--------- Please choose an option -------</option>
          <option value="Cardiology">Cardiology</option>
          <option value="Diagnostic Imaging">Diagnostic Imaging</option>
          <option value="ENT">ENT</option>
          <option value="Haematology">Haematology</option>
          <option value="Neurology">Neurology</option>
          <option value="Orthopaedics">Orthopaedics</option>
          <option value="Radiotherapy">Radiotherapy</option>
        </select>

      </form>
      <button onClick={props.buttonAction}>Add Patient</button>
    </div>
  )
}

export default adduser;
