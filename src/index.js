import React from 'react';
import ReactDOM from 'react-dom';
import './components/index.css';
import App from './components/App';
// import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import combineReducers from './reducers/index';
import Firebase from './components/Firebase';


ReactDOM.render(
    <Provider store={createStore(combineReducers, compose(applyMiddleware(thunk)))}>
      <App Firebase={new Firebase()}/>
    </Provider>,
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
