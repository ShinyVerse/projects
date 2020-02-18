import React, { Component } from 'react';
import ProjectList from './ProjectList/ProjectList';
import SkillList from './SkillList/SkillList';
import Bio from './Bio/Bio'
import './App.css';

class Website extends Component {
  render() {
    return (
      <div className="App">
        <Bio />
        <SkillList />
        <p>Sorry, going through maintenance atm! Check back later!</p>
      </div>
    );
  }
}

export default Website;
