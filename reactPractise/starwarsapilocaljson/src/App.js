import React, {Component} from 'react';


class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      arrimages : ['https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
                    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
                  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
                'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png'],
      returnurl: []
    }
  }
  componentWillMount() {
    fetch('https://pokeapi.co/api/v2/pokemon/?limit=5').then(response => response.json()).then  ({results: items}) {


    }=> this.setState({items})



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
        {items.map(item => <Pokemon key={item.name} pokemon={item}/>)}
        {/* {items.map(item =>
          <Bday key={item.mass} year={item} />
        )} */}

      </div>
    )
  }
}



const Pokemon = (props) => <div><h3>{props.pokemon.name}</h3>
                            <h2>{props.pokemon.url}</h2>
                                </div>

export default App;

// notes: Extract id from url:
// var url = "https://pokeapi.co/api/v2/pokemon/1/";
// undefined
// url
// "https://pokeapi.co/api/v2/pokemon/1/"
// url.split(//)
// VM150:1 Uncaught SyntaxError: Unexpected end of input
// url.split('//');
// (2) ["https:", "pokeapi.co/api/v2/pokemon/1/"]
// url.split('/');
// (8) ["https:", "", "pokeapi.co", "api", "v2", "pokemon", "1", ""]
// var returnurl = url.split('/');
// undefined
// returnurl
// (8) ["https:", "", "pokeapi.co", "api", "v2", "pokemon", "1", ""]
// returnurl[0]
// "https:"
// returnurl[-1]
// undefined
// returnurl[6]
// "1"
