import React from 'react';
import ReactDOM from 'react-dom';
import Redux, { createStore, combineReducers } from 'redux';
import reducers from './Reducers';

const empty_state = {};
const empty_action = {};

it('create store runs', () => {
  const store = createStore(reducers);
  store.subscribe (() => {console.log(store.getState())})
});
