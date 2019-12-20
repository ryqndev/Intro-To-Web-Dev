/**
 * @author Ryan Yang
 * @license MIT
 * @description https://github.com/ryqndev/Intro-To-Web-Dev/tree/master/react-final
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

/**
 * @component TodoItem - This is the code for a singular todo item. 
 * 
 * 
 * @param {} content - The TodoItem component takes in a parameter 
 * called 'content'. This parameter represents the text content 
 * of the TodoItem that should be displayed. 
 */
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
        // Here, we use the spread syntax '...' to set our state 
        // to the value of everything inside todos and then add 
        // an extra element equal to text
        if(text) setTodos([ ...todos, text ])
        // [...todos, text] is essentially the same thing as 
        // writing [todos[1], todos[2], ... , todos[n], text]
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
