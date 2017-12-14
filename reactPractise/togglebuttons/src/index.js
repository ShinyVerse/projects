import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Toggle from './Toggle.js';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Toggle />, document.getElementById('root'));
registerServiceWorker();
