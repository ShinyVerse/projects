import React, {Component} from 'react';
import { connect } from 'react-redux';
import { selectAnimal } from '../actions/index';
import { bindActionCreators } from 'redux';



class AnimalDetail extends Component {

  render(){
    if (!this.props.animal){
      return <div>Please select an animal to check it out.</div>
    }
    return (
      <div>
        <h2>Animal selected:</h2>
        <h3>{this.props.animal.name}</h3>

        <img height="300" width="400" src={this.props.animal.img} alt="selectedAnimal"/>
        <audio ref="audio_tag" src={this.props.animal.sound} controls/>
      </div>
    )
  }
}
function mapStateToProps(state){

  return {
    animal: state.activeAnimal
  };

}


export default connect(mapStateToProps)(AnimalDetail);
