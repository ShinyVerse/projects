import React, {Component} from 'react';






class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.createurl = this.createurl.bind(this);
  }

  createurl(props){
    return {props.pokemon.url.split('/')[6]};
  }

  render() {


    return (
      <div>
        <h3>{createurl()}</h3>

      </div>
    )
  }
}

// const Pokemon = (props) => <div><h3>{props.pokemon.name}</h3>
//                                 <img src= {'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'props.pokemon.url.split('/')[6]'.png'} alt={props.pokemon.url}/>
//                                 </div>

export default Pokemon;
