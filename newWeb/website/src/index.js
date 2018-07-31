import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Website from './Website';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Website />, document.getElementById('root'));
registerServiceWorker();
