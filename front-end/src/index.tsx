import React from 'react';
import './index.css';
import App from './App';
import 'lato-webfont/lato.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';

import { render } from 'react-dom';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import rootSaga from './sagas';
import { logger } from 'redux-logger';
import { history } from './utils/history';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware, logger),
);
sagaMiddleware.run(rootSaga);

const path = (/#!(\/.*)$/.exec(window.location.hash) || [])[1];
if (path) {
  history.replace(path);
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
