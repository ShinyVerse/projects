import React, {Component} from 'react';

class ButtonDropDown extends Component {
  constructor(props) {
    super(props);
    this.selection = this.selection.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.state = {
      menuActive: false,
      selectedMenu: "Cheap"
    };
  }

  toggleMenu() {
    let menuState = !this.state.menuActive;
    this.setState({menuActive: menuState});
  }

  selection(e) {
    let newSelection = e.target;
    if (this.state.selectedMenu !== newSelection.innerHTML) {
        this.setState({selectedMenu:newSelection.innerHTML}) ;
    }
  }

  render() {
    let menu;
    if (this.state.menuActive) {
      menu = <div>
        <ul>
          <li onClick={this.selection}>Cheap</li>
          <li onClick={this.selection}>Moderate</li>
          <li onClick={this.selection}>Expensive AF</li>
        </ul>
      </div>
    } else {
      menu = "";
    }
    return (
      <div id="menu">
        <button onClick={this.toggleMenu}>{this.state.selectedMenu}</button>
        {menu}
      </div>
    )
  }
}

export default ButtonDropDown;
