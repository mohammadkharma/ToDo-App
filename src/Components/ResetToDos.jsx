// responsible for clearing the todo list

import React, { Component } from 'react';
import '../styles/resetToDos.css';

class ResetToDos extends Component {
    state = {
        todos: ''
    }

    handleClick = (e) => {
        e.preventDefault();
        this.props.resetTodos(this.state.todos);
    }

    render() {
        return(
            <button className='resetBtn' onClick={this.handleClick} >Reset</button>
        )
    }
}

export default ResetToDos;