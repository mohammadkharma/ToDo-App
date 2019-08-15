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
  
  render(){
    return (
      <div className="App container">
        <h1 className="center blue-text">ToDo App</h1>
        {/* passing the todos to the ToDos component */}
        <ToDos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
