import React from "react";
import Todo from "./Todo";


const TodoList = props => {

  const handleClick = () => {
    props.handleClearItems();
  }

  return (
    <div>
      {props.todos.map(item => (
        <Todo handleToggleItem={props.handleToggleItem} key={item.id} item={item} />
      ))}
      <button onClick={handleClick} >
        Clear Completed
      </button>
    </div>
  );
};

export default TodoList;