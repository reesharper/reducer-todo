import { CLEAR_TODO, SET_TODO, TOGGLE_TODO } from './../actions/actions'

const initialState = {
  item: 'Learn about reducers',
  completed: false,
  id: 3892987589
}

const reducer = (state, action) => {
  switch(action.type) {

    case(SET_TODO):
      return({...state, newTodo:action.payload})

    case(TOGGLE_TODO):
      return({...state, toggleTodo:action.payload})

    case(CLEAR_TODO):
      return({...state, clearTodo:action.payload})

    default:
      return(state);
  }
}

export {reducer, initialState};
