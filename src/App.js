import React, { Component } from 'react';
import './styles/app.css';
import ToDos from './Components/ToDos';
import AddToDo from './Components/AddToDo';
import ResetToDos from './Components/ResetToDos';
import SearchToDos from './Components/SearchToDos';

class App extends Component {
  // setting the main state for the todos data
  state = {
    todos: [
      {id: 1, content: 'reply to Shakira'},
      {id: 2, content: 'visit Maldives'},
      {id: 3, content: 'get th Ferrari from garage'},
      {id: 4, content: 'dinner with Obama'}
    ]
  }

  // filtering through the todos and returning all todos except the one with the id in param
  // deleteTodo will be passed as a prop to the ToDos component
  deleteTodo = (id) => {
    const todos = this.state.todos.filter(todo => {
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
  resetTodos = todoList => {
    let todos = todoList;
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Your ToDo List</h1>
        <AddToDo addTodo={this.addTodo} />
        <ToDos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <SearchToDos />
        <ResetToDos resetTodos={this.resetTodos} />
      </div>
    );
  }
}

export default App;
