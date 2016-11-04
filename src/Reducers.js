import Redux, { createStore, combineReducers } from 'redux';

// Reducers

const addInputR = (state, action) => {
  const new_input = {
    id: action.id,
    name: action.name ? action.name : '',
    total: action.total ? action.total : 0
  };
  if (action.def) {new_input.def = action.def};
  if (action.notes) {new_input.notes = action.notes};
  const new_state = state.concat(new_input);
  return new_state;
}

const editInputR = (state, action) => {
  const new_input = {
    name: action.name ? action.name : state.name ? state.name : '',
    total: action.total ? action.total : state.total ? state.total : 0
  };
  if (action.def) {new_input.def = action.def};
  if (action.notes) {new_input.notes = action.notes};
  const new_state = Object.assign ({}, state, new_input);
  return new_state;
}

const name = (state='', action) => {
  switch (action.type) {
    case ('EDIT_NAME'): return action.name
  default:
    return state;
  }
}

const threat = (state={threat:{},hardness:{},armor:{}}, action) => {
  switch (action.type) {
    case ('EDIT_THREAT'):
      const newThreat = editInputR (state.threat, action);
      return Object.assign ({}, state, {threat: newThreat});
    case ('EDIT_HARDNESS'):
        const newHard = editInputR (state.hardness, action);
        return Object.assign ({}, state, {hardness: newHard});
    case ('EDIT_ARMOR'):
        const newArmor = editInputR (state.armor, action);
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
    case ('ADD_POWER'): return state.concat([{id: action.id, name: '', description: ''}])
    case ('EDIT_POWER'):
      return state.map( p => {
          if (action.id == p.id) {
            const new_p = Object.assign ({}, p, {name: action.name, description:action.description});
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
