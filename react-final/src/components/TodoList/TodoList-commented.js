/**
 * @author Ryan Yang
 * @license MIT
 * @description https://github.com/ryqndev/HackUCI-Demo/tree/master/react-final
 */
import React, {useState} from 'react';

// Remember the sweetalert2 library we used earlier? Here it is. 
// However, this time, we didn't have to include the library in our
// html file, we simply add the library through npm and can specifically
// import only the function that we need. Webpack will automatically 
// make our code more efficient by only compiling the functions we USE
// and import from the library, thus saving us space
import Swal from 'sweetalert2';
import './TodoList.css';

function TodoItem({content}){
    const [complete, setComplete] = useState(false);
    const toggle = () => { setComplete(!complete) }

    return (
        <div className="todo-item" onClick={toggle}>
            <div className={"todo-content" + (complete && "todo-content")}> {content} </div>
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
