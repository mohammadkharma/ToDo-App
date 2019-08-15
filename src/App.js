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
  // deleteTodo will be passed as a prop to the ToDos component
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id;
    })
    this.setState({
      todos
    })
  }

  // grabbing the new todo from AddToDo component, giving it a new id, adding it to the todos array, then updating the state
  // addTodo will be passed as a prop to the AddToDo component
  addTodo = todo => {
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }

  // resetting func to be used on the reset button on click 
  resetTodos = e => {
    e.preventDefault();
    this.setState({
      todos: ''
    })
  }
  
  render(){
    return (
      <div className="App">
        <h1>ToDo App</h1>
        <ToDos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddToDo addTodo={this.addTodo} />
        <button onClick={this.resetTodos}>Reset</button>
      </div>
    );
  }
}

export default App;
