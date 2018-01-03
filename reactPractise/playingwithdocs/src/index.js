import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greeting from './Greeting';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(<Greeting name="henry" />, document.getElementById('root'));
registerServiceWorker();
