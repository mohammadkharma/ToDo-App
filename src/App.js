import React, { Component } from 'react';
import ToDos from './Components/ToDos';
import AddToDo from './Components/AddToDo';
class App extends Component {
  
  // setting the main state for the todos data
  state = {
    todos: [
      {id:1, content: 'make shopping'},
      {id:2, content: 'prepare for exam'}
    ]
  }

  // filtering through the todos and returning all todos except the one with the id in param
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id;
    })
    this.setState({
      todos
    })
  }

  // grabbing the new todo from AddToDo component, giving it a new id, adding it to the todos array, then updating the state
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    console.log(todo.id);
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
        <AddToDo addTodo={this.addTodo} />
      </div>
    );
  }
}

export default App;
