// responsible for listing individual todos in DOM

import React from 'react';
import '../styles/toDos.css';

const ToDos = ({ todos, deleteTodo }) => {

    // using ternary operator to check if there's still todos or not anymore and handle both cases (true or false)
    // incase thr ternary operator returned true: we map over all todos and output them individually
    // incase the ternary operator returned false: we output a <p> 
    const todoList = todos.length ? (
        todos.map(todo => {
            return (<div className='todo' key={todo.id}>
                    <span>{todo.content}</span>
                    <span onClick={()=>{deleteTodo(todo.id)}}><b>X</b></span>
                </div>)
        })) : (<p>You have no todos</p>);

    // outputting the todoList in DOM
    return (
        <div className='todoList'>
            {todoList}
        </div>
    )

}

export default ToDos;