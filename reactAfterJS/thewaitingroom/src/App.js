import React, { Component } from 'react';
import logo from './logo.svg';
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
      currentTime: new Date().toLocaleTimeString([],{day: 'numeric', month: 'long', year: 'numeric',hour: '2-digit', minute:'2-digit'})
    }
  }

  componentDidMount(){
     setInterval(function(){
         this.setState({
             currentTime: new Date().toLocaleTimeString([],{day: 'numeric', month: 'long', year: 'numeric',hour: '2-digit', minute:'2-digit'})
         })
     }.bind(this), 30000);
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
  const users = Object.assign([], this.state.users);
  const newUser = {id:idGenerator(), name: this.state.newName, waitingFor: this.state.newDest}
  users.push(newUser);
  this.setState({users:users, newName: "", newDest: ""});
}
timeNow() {
  var currentdate = new Date();
  var datetime = currentdate.getDate() + "/"
                  + (currentdate.getMonth()+1)  + "/"
                  + currentdate.getFullYear()
                  return datetime;
}


  render() {
    return (
      <div className="App">
        <h1> {this.state.currentTime} </h1>
        <h1>Patient List:</h1>
        <ul className="patient-ul">
          {this.state.users.map((user) =>
              <User
                key={user.id}
                delEvent={this.deleteUser.bind(this)}
                wf={user.waitingFor}
                >{user.name}</User>
            )
          }
        </ul>
        <AddUser
          name={this.state.newName}
          dest={this.state.newDest}
          changeNameEvent={this.onChangeNameEvent.bind(this)}
          changeDestEvent={this.onChangeDestEvent.bind(this)}
          buttonAction={this.newEntryComplete.bind(this)}
           />
      </div>
    );
  }
}

export default App;
