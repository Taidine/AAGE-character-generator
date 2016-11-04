import React from 'react';
import ReactDOM from 'react-dom';
import Redux, { createStore, combineReducers } from 'redux';
import reducers from './Reducers';

const empty_state = {
  name: '',
  threat: {"armor": {},
          "hardness": {},
          "threat": {},},
  virtues: [],
  skills: [],
  resources: [],
  powers: [],
};

it('create store generates empty state', () => {
  const store = createStore(reducers);
  expect(store.getState()).toEqual(empty_state);
});

it('unknown action returns default state', () => {
  const store = createStore(reducers);
  expect(reducers(store.getState(), "UNKNOWN_ACTION")).toEqual(empty_state);
})

it('EDIT_NAME updates name', () => {
  const store = createStore(reducers);
  store.dispatch({type: "EDIT_NAME", name:"Shula Al'Aquil"});
  expect(store.getState().name).toEqual("Shula Al'Aquil");
})

it('threat actions update threat', () => {
  const store = createStore(reducers);
  store.dispatch({type: "EDIT_THREAT", name:"", total:4})
  expect(store.getState().threat.threat).toEqual({name:"" , total:4})
  store.dispatch({type: "EDIT_ARMOR", name:"", total:3, notes:"v fire"})
  expect(store.getState().threat.armor).toEqual({name:"" , total:3, notes:"v fire"})
  store.dispatch({type: "EDIT_HARDNESS", name:"", total:1, notes:"when in water"})
  expect(store.getState().threat.hardness).toEqual({name:"", total:1, notes:"when in water"})
})

it('virtue actions update virtues', () => {
  const store = createStore(reducers);
  store.dispatch({type: "ADD_VIRTUE", name:"Hero", id:1, total:3});
  expect(store.getState().virtues[0]).toEqual({name:"Hero", id:1, total:3});
  store.dispatch({type: "EDIT_VIRTUE", name:"Hero", id:1, total:5});
  expect(store.getState().virtues[0]).toEqual({name:"Hero", id:1, total:5});
})

it('skill actions update skills', () => {
  const store = createStore(reducers);
  store.dispatch({type: "ADD_SKILL", name:"Scamper", id:2, total:5});
  expect(store.getState().skills[0]).toEqual({name:"Scamper", id:2, total:5});
  store.dispatch({type: "EDIT_SKILL", name:"Scamp", id:2, total:4});
  expect(store.getState().skills.length).toEqual(1);
  expect(store.getState().skills[0]).toEqual({name:"Scamp", id:2, total:4});
  store.dispatch({type: "ADD_SKILL", id:2});
  expect(store.getState().skills.length).toEqual(2);
})

it('resource actions update custom resources', () => {
  const store = createStore(reducers);
  store.dispatch({type: "ADD_RESOURCE", name:"Fire", id:3, total:5, def:1, notes:"See powers"});
  expect(store.getState().resources[0]).toEqual({name:"Fire", id:3, total:5, def:1, notes:"See powers"});
  store.dispatch({type: "EDIT_RESOURCE", id:3, total:4});
  expect(store.getState().resources.length).toEqual(1);
  expect(store.getState().resources[0]).toEqual({name:"Fire", id:3, total:4, def:1, notes:"See powers"});
})

it('power actions update powers', () => {
  const store = createStore(reducers);
  store.dispatch({type: "ADD_POWER", id:5});
  expect(store.getState().powers.length).toEqual(1);
  store.dispatch({type:"EDIT_POWER", id:5, name:"Shape the Islands", description:"Spend 1 fire to take twenty on a wield your powers roll"});
  expect(store.getState().powers[0]).toEqual({id:5, name:"Shape the Islands", description:"Spend 1 fire to take twenty on a wield your powers roll"});
})
