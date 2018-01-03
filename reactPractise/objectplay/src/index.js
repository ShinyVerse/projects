import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

let objarr =  { 0: 'a', 1: 'b', 2: 'c' };

ReactDOM.render(<App objarr = {objarr}/>, document.getElementById('root'));
registerServiceWorker();
