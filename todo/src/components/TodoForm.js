import React from "react";

class TodoForm extends React.Component {
  constructor(){
    super();
    this.state = {
      item: "",
    }
  }

  handleChanges = e => {
    this.setState({
      item: e.target.value
    })
  };


  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddItem(this.state.item)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input value={this.state.item} onChange={this.handleChanges} type="text" name="item" placeholder="New Todo Item"/>
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    );
  }
}

export default TodoForm;