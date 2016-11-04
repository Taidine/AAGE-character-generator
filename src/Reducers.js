import Redux, { createStore, combineReducers } from 'redux';

// Reducers

const addInputR = (state, action) => {
  new_input = {
    name: action.name ? action.name : '',
    total: action.total ? action.total : 0
  };
  if (action.def) {new_input.def = action.def};
  if (action.notes) {new_input.notes = action.notes};
  new_state = state.concat(new_input);
  return new_state;
}

const editInputR = (state, action) => {
  new_input = {
    name: action.name ? action.name : '',
    total: action.total ? action.total : 0
  };
  if (action.def) {new_input.def = action.def};
  if (action.notes) {new_input.notes = action.notes};
  new_state = Object.assign ({}, state, {new_input});
  return new_state;
}

const name = (state='', action) => {
  switch (action.type) {
    case ('EDIT_NAME'): return action.text
  default:
    return state;
  }
}

const threat = (state={threat:{},hardness:{},armor:{}}, action) => {
  switch (action.type) {
    case ('EDIT_THREAT'):
      newThreat = editInputR (state.threat, action);
      return Object.assign ({}, state, {threat: newThreat});
    case ('EDIT_HARDNESS'):
        newHard = Object.editInputR (state.hardness, action);
        return Object.assign ({}, state, {hardness: newHardness});
    case ('EDIT_ARMOR'):
        newArmor = Object.assign ({}, state.armor, {total: action.total, notes: action.text})
        return Object.assign ({}, state, {armor: newArmor})
  default:
    return state;
  }
}

const virtues = (state=[], action) => {
  switch (action.type) {
    case ('ADD_VIRTUE'): return addInputR (state, action)
    case ('EDIT_VIRTUE'):
      return state.map( v => {
          if (action.id == v.id) {return editInputR(v, action)};
      });
  default:
    return state;
  }
}

const skills = (state=[], action) => {
  switch (action.type) {
    case ('ADD_SKILL'): return addInputR (state, action)
    case ('EDIT_SKILL'):
      return state.map( v => {
          if (action.id == v.id) {return editInputR(v, action)};
      });
      default:
        return state;
  }
}

const resources = (state=[], action) => {
  switch (action.type) {
    case ('ADD_RESOURCE'): return addInputR (state, action)
    case ('EDIT_RESOURCE'):
      return state.map( r => {
          if (action.id == r.id) {return editInputR(r, action)};
      });
      default:
        return state;
  }
}

const powers = (state=[], action) => {
  switch (action.type) {
    case ('ADD_POWER'): return state.concat([{name: '', description: ''}])
    case ('EDIT_POWER'):
      return state.map( p => {
          if (action.id == p.id) {
            new_p = Object.assign ({}, p, {name: action.name, name:action.description});
            return new_p};
      });
    default:
      return state;
  }
}

const reducers = combineReducers ({
  name,
  threat,
  virtues,
  skills,
  resources,
  powers,
})

export default reducers
