import React, { useReducer } from 'react';
import { reducer, initialState } from './../reducers/reducer'

const Todo = (props) => {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    dispatch()
  }

  return (
    <div onClick={handleClick}>
      <p>{props.item.name}</p>
    </div>
  );
};

export default Todo;