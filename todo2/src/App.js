import React, { useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './reducers/reducer';
import { setTodo, addTodo, setCompleted, clearCompleted } from './actions/action'

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch(setTodo(e.target.value));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(state.newTodo))
  }

  const handleToggle = (e) => {
    dispatch(setCompleted(true))
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='item'
          value={state.newTodo}
          onChange={handleChange}
        />
        <button onClick={handleSubmit}> Add </button>
      </form>
      <div className='todo'>
        {state.todos.map(item => (
          <div onClick={handleToggle} className={`item${item.completed ? 'completed' : ''}`}>
          <p>{item.name}</p>
          </div>
        ))}
      </div>
      <button> Clear Completed </button>
    </div>
  );
}

export default App;
