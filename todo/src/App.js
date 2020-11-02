import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm'

const todos = [
  {
    name: "Add New Items",
    id: 123,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todos
    }
  }

  handleToggleItem = (itemId)=>{
    this.setState({
      todos:this.state.todos.map(item=>{
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item;
        }
      })
    })
  }

  handleAddItem = (name) => {
    this.setState({
      todos: [...this.state.todos, {
        name: name,
        id: this.state.todos.length,
        completed: false
      }]
    })
  }

  clearItems = () => {
    this.setState({
      todos: this.state.todos.filter(item=> (!item.completed))
    });
  }

  render() {
    return (
      <div className="TodoApp">
          <div className="Header">
            <h1>Todo List</h1>
            <TodoForm handleAddItem={this.handleAddItem}/>
          </div>
        <TodoList handleClearItems={this.clearItems} handleToggleItem={this.handleToggleItem} todos={this.state.todos} />
      </div>
    );
  }
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

export default App;
