import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChoiceDependent from './ChoiceDependent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ChoiceDependent />, document.getElementById('root'));
registerServiceWorker();
