import React, { Component } from 'react';
import ToDos from './Components/ToDos'

class App extends Component {
  
  // setting the main state for the todos data
  state = {
    todos: [
      {id:1, content: 'make shopping'},
      {id:2, content: 'prepare for exam'}
    ]
  }

  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id;
    })
    this.setState({
      todos
    })
  }
  
  render(){
    return (
      <div className="App container">
        <h1 className="center blue-text">ToDo App</h1>
        {/* passing the todos data and the delete func to the ToDos component */}
        <ToDos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}

export default App;
