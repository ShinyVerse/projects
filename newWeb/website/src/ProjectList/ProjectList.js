import React, { Component, Fragment } from 'react';
import Project from './Project';

class ProjectList extends Component {
  constructor(props) {
    super(props);
    const BASE_URL = "https://github.com/ShinyVerse/projects/blob/master/codepenImg/DS/myPage/"
    const END_URL = ".jpg?raw=true";
    this.state = {
      projects: [
        { title: "Theme Page", image: BASE_URL + "TP" + END_URL },
        { title: "Cake Shopper", image: BASE_URL + "CAKE" + END_URL },
        { title: "Animal Gallery", image: BASE_URL + "AG" + END_URL },
        { title: "Time Machine", image: BASE_URL + "TMdesk" + END_URL },
        { title: "Sliding Gallery", image: BASE_URL + "SG" + END_URL },
        { title: "Quote Generator", image: BASE_URL + "QG" + END_URL }
      ]
    }
  }

  render() {
    return(
      <Fragment>
        <h1 className="main--title">Portfolio</h1>
        <ul className="project__container" >
          {this.state.projects.map((item) =>
                    <Project
                      key={item.title}
                      title={item.title}
                      img={item.image}
                      alt={item.title}
                      >
                    </Project>
                  )
                }
        </ul>
    </Fragment>
    )
  }
}

export default ProjectList;
