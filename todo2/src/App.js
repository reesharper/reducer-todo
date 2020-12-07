import React, { useReducer } from 'react';
import './App.css';
import { reducer, initialState } from './reducers/reducer';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  const handleClick = () => {
    
  }

  return (
    <div className="App">
      <h1>Todo App</h1>
      <div className='todo'>
        {state.todos.map(item => (
          <div className={`item${item.completed ? 'completed' : ''}`}>
          <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
