import { ADD_TODO, SET_COMPLETED, CLEAR_COMPLETED } from './../actions/action'

const initialState = {
  todos: [
    {
      name: "add new items",
      id: 1,
      completed: false
    },
    {
      name: "finish coding",
      id: 2,
      completed: false
    }
  ],
  
}

const reducer = (state, action) => {
  switch(action.type) {
    case(ADD_TODO):
      return({...state, todos:action.payload});
    case(SET_COMPLETED):
      return({...state, completed:action.payload});
    // case(CLEAR_COMPLETED):
    //   return({...state, completed:action.payload});
    default:
      return(state);
  }
}

export { initialState, reducer };