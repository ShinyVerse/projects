import React, { Component } from 'react';
import './App.css';
import User from './components/user';
import AddUser from './components/adduser';
import idGenerator from 'react-id-generator';



class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      users: [

      ],
      newName: "",
      newDest: "",
      patient_error: "",
      currentTime: new Date().toLocaleTimeString([],{day: 'numeric', month: 'long', year: 'numeric',hour: '2-digit', minute:'2-digit'})
    }
  }


  componentDidMount(){
     setInterval(function(){
        const users = Object.assign([], this.state.users);
        users.map(user => {
          user.timeCount++;
          if (user.timeCount > 1){
            user.styleC = {background: "#d68d1f"}
          }
          if (user.timeCount > 3){
            user.styleC = {background: "#d6301f"}
          }
        });
         this.setState({
             users: users,
             currentTime: new Date().toLocaleTimeString([],{day: 'numeric', month: 'long', year: 'numeric',hour: '2-digit', minute:'2-digit'})
         })
     }.bind(this), 5000);
 }

deleteUser = (index, e) =>{
  const users = Object.assign([], this.state.users);
  users.splice(index, 1);
  this.setState({ users: users});
}

onChangeNameEvent = (event) => {
  this.setState({
    newName: event.target.value
  });
}
onChangeDestEvent = (event) => {
  this.setState({
    newDest: event.target.value
  });
}
newEntryComplete = () => {
  let regex_letters = /^[a-zA-Z\s]*$/;
  let regex_empty = /.*\S.*/;

  if (regex_letters.test(this.state.newName) && regex_empty.test(this.state.newName)){
  const users = Object.assign([], this.state.users);
  const newUser = {id:idGenerator(), name: this.state.newName, waitingFor: this.state.newDest, timeCount: 0, styleC: { background: "#7bee9b"}}
  users.push(newUser);
  this.setState({users:users, newName: "", newDest: "", patient_error: ""});
  }
  else {
    this.setState({ newName: "", newDest: "", patient_error: "Names must contain only letters"});
  }

}
timeNow() {
  var currentdate = new Date();
  var datetime = currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/"
                  + currentdate.getFullYear()
                  return datetime;
}

patientUpdatedEvent(id, e){
  const index = this.state.users.findIndex(user => {
    return user.id === id;
  });
  const user = Object.assign({}, this.state.users[index]);

  user.timeCount = 0;
  user.styleC = {background: "#7bee9b"}

  const users = Object.assign([], this.state.users);

  users[index] = user;

  this.setState({users:users});
}


  render() {
    return (
      <div className="App">
        <h1> {this.state.currentTime} </h1>
        <h1>Patient List:</h1>
        <ul className="patient__list">
          {this.state.users.map((user) =>
              <User
                key={user.id}
                timecount={user.timeCount}
                delEvent={this.deleteUser.bind(this)}
                wf={user.waitingFor}
                style={user.styleC}
                updatedEvent={this.patientUpdatedEvent.bind(this, user.id)}
                >{user.name}</User>
            )
          }
        </ul>
        <AddUser
          name={this.state.newName}
          dest={this.state.newDest}
          error_message={this.state.patient_error}
          updatedEvent={this.patientUpdatedEvent.bind(this)}
          changeNameEvent={this.onChangeNameEvent.bind(this)}
          changeDestEvent={this.onChangeDestEvent.bind(this)}
          buttonAction={this.newEntryComplete.bind(this)}
           />
      </div>
    );
  }
}

export default App;
