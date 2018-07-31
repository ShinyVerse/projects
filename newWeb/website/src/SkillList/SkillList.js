import React, { Fragment, Component } from 'react';
import Skill from './Skill';
import HTML_img from '../Images/HTML.svg';
import CSS_img from '../Images/CSS.svg';
import JS_img from '../Images/JS.svg';
import REACT_img from '../Images/REACT.svg';
import RUBY_img from '../Images/RUBY.svg';


class SkillList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      skills: [
        {id:"111", file: HTML_img},
        {id:"112", file: CSS_img},
        {id:"113", file: JS_img},
        {id:"114", file: REACT_img},
        {id:"115", file: RUBY_img},
      ]
    }
  }

  render() {
    return(
      <Fragment>
      <h1 className="main--title">SkillSet</h1>
      <ul className="skill__container">
        {this.state.skills.map((skill) =>
                  <Skill
                    key={skill.id}
                    file={skill.file}
                    >
                  </Skill>
                )
              }
      </ul>
      </Fragment>
    )
  }
}

export default SkillList;
