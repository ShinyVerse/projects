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
        <ProjectList />
      </div>
    );
  }
}

export default Website;
