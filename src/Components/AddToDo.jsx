// responsible for adding new todo

import React, { Component } from 'react';

class AddToDo extends Component {
    
    state = {
        content: ''
    }

    // updating the state on change
    handleChange = e => {
        this.setState({
            content: e.target.value
        })
    }

    // using addTodo prop from the parent component App.js to grab the new todo which has been taken the input field
    // then we clear the state.content and set the value in <input/> to state.content, in order to empty the input field after adding a new todo
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add new todo:</label>
                    <input type="text" onChange={this.handleChange} value={this.state.content} />
                </form>
            </div>
        )
    }
}

export default AddToDo;