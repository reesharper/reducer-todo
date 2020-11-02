import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import { reducer, initialState } from './reducers/reducer';
import { setTodo } from './actions/actions';


const App = () => {

  const [state, dispatch] = useReducer(reducer, initialState);



  const handleChanges = e => {
    dispatch(setTodo(e.target.value));
  };

  return (
    <div className="TodoApp">
        <div className="Header">
          <h1>Todo List</h1>
          <form>
            <input 
            type="text"
            name="item"
            value={state.newTodo}
            onChange={handleChanges}
            />
            <button
            onClick={() => {
              dispatch(setTodo(state.newTodo));
            }}>
              Add
            </button>
          </form>
          <p>{state.item}</p>
          <button> Clear Completed </button>
        </div>
    </div>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
