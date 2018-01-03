import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ButtonDropDown from './ButtonDropDown';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div className="Hello">
    <ButtonDropDown option1="Today" option2="Tomorrow" option3="Day After Tomorrow"/>
    <ButtonDropDown option1="££" option2="£££" option3="££££"/>
    <ButtonDropDown option1="Delivery" option2="Collect" option3="Eat In"/>

  </div>,
document.getElementById('root'));
registerServiceWorker();
