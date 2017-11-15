import React from 'react';
import ReactDOM from 'react-dom';
import Bucky from './Bucky';
import SubBucky from './SubBucky';

import './index.css';

ReactDOM.render(
    <Bucky />,
    document.getElementById('root')
);

ReactDOM.render(
    <SubBucky />,
    document.getElementById('root2')
);
