// responsible for listing individual todos in DOM

import React from 'react';

const ToDos = ({ todos, deleteTodo }) => {

    // using ternary operator to check if there's still todos or not anymore and handle both cases (true or false)
    // incase thr ternary operator returned true: we map over all todos and output them individually
    // incase the ternary operator returned false: we output a <p> 
    const todoList = todos.length ? (
        todos.map(todo => {
            return (<div key={todo.id}>
                    <span onClick={()=>{deleteTodo(todo.id)}}>{todo.content}</span>
                </div>)
        })) : (<p>You have no todos left, yey!</p>);

    // outputting the todoList in DOM
    return (
        <div>
            {todoList}
        </div>
    )

}

export default ToDos;