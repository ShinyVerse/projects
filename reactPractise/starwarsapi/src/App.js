import React, {Component} from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    }
  }
  componentWillMount() {
    fetch('https://swapi.co/api/people/?format=json').then(response => response.json()).then(({results: items}) => this.setState({items}))
  }

  filter(e) {
    this.setState({filter: e.target.value})
  }
  render() {
    let items = this.state.items;
    if (this.state.filter) {
      items = items.filter(item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()))
    }
    return (
      <div>
        <input type="text" onChange={this.filter.bind(this)}/> {/* ideally you'd use an id as the "key" prop, but there isn't one in the api. */}
        {/*
        {items.map(item =>
          <h4 key={item.name}>{item.name}</h4>)} */}

        {/* Choosing person = {item} or whatever, insertHere = {item} you are setting what needs to be
          written in the json search. EG: props.person.name (name being the found search in the {item}) or
          props.whateverInsertHere.searchableThing.  */}

          {/* //item can be titled as whatever, all others must follow first naming scheme. */}
        {items.map(item => <Person key={item.id} person={item}/>)}
        {/* {items.map(item =>
          <Bday key={item.mass} year={item} />
        )} */}

      </div>
    )
  }
}

const Person = (props) => <div><h3>{props.person.name}</h3>
                                <img src={props.person.homeworld} alt="characterhomeland"/>
                                </div>

export default App;
