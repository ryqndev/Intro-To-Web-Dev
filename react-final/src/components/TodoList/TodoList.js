import React, {useState} from 'react';
import Swal from 'sweetalert2';
import './TodoList.css';

function TodoItem({content}){
    const [complete, setComplete] = useState(false);
    const toggle = () => { setComplete(!complete) }

    return (
        <div className="todo-item" onClick={toggle}>
            <div className={"todo-content" + (complete && " todo-complete")}> {content} </div>
            <div className="todo-check"> {complete ? "⦿" : "◯"} </div>
        </div>
    );
}

function TodoList(){
    const [todos, setTodos] = useState([]);

    const add = async () => {
        const { value: text } = await Swal.fire({
            title: 'Add Todo',
            input: 'text',
            inputPlaceholder: 'Enter Name of Todo'
        });
        if(text) setTodos([ ...todos, text ])
    }

    return (
        <div id="todo-list">
            { todos.map( (e, i) => <TodoItem key={i} content={e}/> ) }
            <div className="todo-user--add" onClick={add}>
                <div className="todo-content todo-content--add"> add an item </div>
            </div>
        </div>
    )
}

export default TodoList;
