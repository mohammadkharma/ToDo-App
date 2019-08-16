// responsible for the search engine

import React, { Component } from 'react';
import '../styles/searchToDos.css';

class SearchToDos extends Component {

    handleKeyUp = e => {
        e.preventDefault();
        
        const todoList = document.querySelector('.todoList');
        const term = e.target.value.trim().toLowerCase();

        // adding classes to unmatched todos 
        Array.from(todoList.children)
            .filter(todos => !todos.textContent.toLowerCase().includes(term))
            .forEach(todos => todos.classList.add('filtered'));

        // removing classes on delete    
        Array.from(todoList.children)
            .filter(todos => todos.textContent.toLowerCase().includes(term))
            .forEach(todos => todos.classList.remove('filtered'));
        
        }

    render() {
        return (
            <form className='searchTodo'>
                <input type="text"
                placeholder='search your todos'
                onKeyUp={this.handleKeyUp} />
            </form>
        )
    }
}

export default SearchToDos;