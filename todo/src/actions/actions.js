export const SET_TODO = "SET_TODO";
export const CLEAR_TODO = "CLEAR_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";

export const setTodo = (todo) => {
  return({type:SET_TODO, payload:todo})
} 

export const clearTodo = (todo) => {
  return({type:CLEAR_TODO, payload:todo})
}

export const toggleTodo = (todo) => {
  return({type:TOGGLE_TODO, payload:todo})
}