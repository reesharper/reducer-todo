export const SET_TODO = "SET_TODO";
export const ADD_TODO = "ADD_TODO";
export const SET_COMPLETED = "SET_COMPLETED";
export const CLEAR_COMPLETED = "CLEAR_COMPLETED";


export const setTodo = (name) => {
  return({type:SET_TODO, payload:name})
}

export const addTodo = (name) => {
  return({type:ADD_TODO, payload:name})
}

export const setCompleted = (completed) => {
  return({type:SET_COMPLETED, payload:completed})
}

export const clearCompleted = (todo) => {
  return({type:CLEAR_COMPLETED, payload:todo})
}