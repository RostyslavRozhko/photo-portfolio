import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/index';
import registerServiceWorker from './registerServiceWorker'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
import {state} from './imagelist'
import { createLogger } from 'redux-logger'

const logger = createLogger()
const store = createStore(reducer, state, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>, 
  document.getElementById('root'))
  
registerServiceWorker();
