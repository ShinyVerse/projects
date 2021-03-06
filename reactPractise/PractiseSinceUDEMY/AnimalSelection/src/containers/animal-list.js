import React, { Component } from 'react';
import { connect } from 'react-redux'; //This is the glue
import { selectAnimal } from '../actions/index'; //Need to import action creator
import { bindActionCreators } from 'redux'; // <- bindActionCreators function makes sure
//the action generated by the action creator actually ends up flowing through all the reducers.

//to promote a component to a container we need to hook up this AnimalList to
//the react-redux library. Forging these two things (component + react-redux library)
//creates a container.
// export default <= delete this from before the class
class AnimalList extends Component {
  renderList(){
    return this.props.animals.map((animal) =>{
      return (
        <li
          onClick={() => this.props.selectAnimal(animal)} //add this for action to work.
          key={animal.name}
          className='list-group-item'>
          {animal.name}
        </li>
      )
    })
  }

  render(){
    //*** console.log({this.props.asdf}); =>'231'
    return(
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    )
  }
}

//Add these:
//GLUE:
function mapStateToProps(state){
  //takes application state, which includes the list of animals and the active animal
  //Whatever is returned will show up as props in AnimalsList.
  return {
    animals: state.animals //This will be available as this.props...
    //*** asdf: '231';
  };
  //ususally return an object from this. Whatever is contained in this object
  //is going to be set equal to this.props of our component
}

//connect takes the mapStateToProps and the component and returns a container
//this is what we want to export, not the plain AnimalList component, but the container

//Adding with bindActionCreators importation:
function mapDispatchToProps(dispatch){
  //see S4, L45
  return bindActionCreators({selectAnimal: selectAnimal}, dispatch); //(second selectAnimal is the action creator
  //added in at the top //import selectAnimal from acitons/index)
}

export default connect(mapStateToProps, mapDispatchToProps)(AnimalList);
