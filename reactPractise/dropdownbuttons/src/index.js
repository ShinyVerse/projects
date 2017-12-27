import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ButtonDropDown from './ButtonDropDown';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <div>
    <ButtonDropDown option1="cats" option2="dogs" option3="horses"/>
    <ButtonDropDown option1="cheap" option2="moderate" option3="expensive"/>
    <ButtonDropDown option1="Collection" option2="Delivery" option3="Pick up"/>
  </div>,
document.getElementById('root'));
registerServiceWorker();
