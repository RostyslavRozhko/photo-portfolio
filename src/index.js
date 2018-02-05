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
import Emitter from './utils/Emitter'
import EmitterProvider from './containers/EmitterProvider/index'

const emitter = new Emitter();

const logger = createLogger()
const store = createStore(reducer, state, applyMiddleware(logger))

ReactDOM.render(
  <Provider store={store} >
    <EmitterProvider emitter={emitter} >
      <App />
    </EmitterProvider>
  </Provider>, 
  document.getElementById('root'))
  
registerServiceWorker();
