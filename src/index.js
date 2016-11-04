import React from 'react';
import ReactDOM from 'react-dom';
import Redux, { createStore, combineReducers } from 'redux';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css'
import './index.css';

ReactDOM.render(
  <App store=store.subscribe() />,
  document.getElementById('root')
);
