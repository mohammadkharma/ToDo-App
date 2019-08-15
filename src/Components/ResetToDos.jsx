import React, { Component } from 'react';

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
            <button onClick={this.handleClick} >Reset</button>
        )
    }
}

export default ResetToDos;