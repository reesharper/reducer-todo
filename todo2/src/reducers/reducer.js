import { SET_TODO, ADD_TODO, SET_COMPLETED, CLEAR_COMPLETED } from './../actions/action'

const initialState = {
  todos: [
    {
      name: "add new items",
      id: 1,
      completed: false,
    },
    {
      name: "finish coding",
      id: 2,
      completed: false,
    },
  ],
  newTodo: '',
};

const reducer = (state, action) => {
  switch(action.type) {

    case(SET_TODO):
      return({...state, newTodo:action.payload});

    case(ADD_TODO):
      return({
        ...state, 
        todos: [...state.todos, {
          name: action.payload,
          id: new Date(),
          completed: false
        }]
      });

    case(SET_COMPLETED):
      return({...state, completed:action.payload});

    // case(CLEAR_COMPLETED):
    //   return({...state, completed:action.payload});

    default:
      return(state);
  }
}

export { initialState, reducer };