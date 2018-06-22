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
        {id: idGenerator() ,name: "Hannah Gates" , waitingFor: "CT"},
        { id:idGenerator(),name: "Robert Bush" , waitingFor: "Fluids"},
        {id: idGenerator(),name: "Mary Peasmon" , waitingFor: "Cardio"},
      ],
      newName: "",
      newDest: ""
    }
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

  render() {
    return (
      <div className="App">
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
