import React, {useState} from 'react';
import './TodoList.css';

function add(){
    alert('sdf');
}

function TodoList(){
    const [todos, setTodos] = useState([]);

    return (
        <div id="todo-list">
            <div className="todo-user--add" onClick={add}>
                <div className="todo-content todo-content--add"> add an item </div>
            </div>
        </div>
    )
}

export default TodoList;
