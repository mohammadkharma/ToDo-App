import React, { Component } from 'react';
import './styles/app.css';
import ToDos from './Components/ToDos';
import AddToDo from './Components/AddToDo';
import ResetToDos from './Components/ResetToDos';
import SearchToDos from './Components/SearchToDos';

class App extends Component {
  // setting the main state for the todos data
  state = {
    todos: []
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
        <ToDos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddToDo addTodo={this.addTodo} />
        <ResetToDos resetTodos={this.resetTodos} />
        <SearchToDos />
      </div>
    );
  }
}

export default App;
