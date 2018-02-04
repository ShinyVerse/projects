import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import BookStart from './components/book_start';
import BookDescription from './components/book_about.js';


import { BrowserRouter, Route, Switch } from 'react-router-dom';


import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
          <Switch>
            <Route path="/aboutbook" component={BookDescription} />
            <Route path="/" component={BookStart} />
          </Switch>
        </div>
      </BrowserRouter>
  </Provider>, document.getElementById('.root'));
