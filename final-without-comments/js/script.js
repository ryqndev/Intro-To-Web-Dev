/**
 * @author Ryan Yang
 * @license MIT
 */
const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
const dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

let userTodos = [];

function load(){
    let today = new Date();
    document.getElementById('day').innerText = today.getDate();
    document.getElementById('month').innerText = monthNames[today.getMonth()];
    document.getElementById('year').innerText = today.getFullYear();
    document.getElementById('day-name').innerText = dayNames[today.getDay()];
    display();
}

function display(){
    document.getElementById('todo-list').innerHTML = "";
    userTodos.forEach(createTodoItem);
    document.getElementById('todo-list').innerHTML += `
        <div class="todo-user--add" onclick="promptTodo();">
            <div class="todo-content todo-content--add"> add an item </div>
        </div>
    `;  
}

function createTodoItem(item, index){
    document.getElementById('todo-list').innerHTML += `
        <div class="todo-item" onclick="toggleTodoCompletion(${index});">
            <div class="todo-content ${item.isComplete && "todo-complete"}"> ${item.todoContent} </div>
            <div class="todo-check"> ${item.isComplete ? "⦿" : "◯"} </div>
        </div> `;
}

function toggleTodoCompletion(index){
    userTodos[index].isComplete = !userTodos[index].isComplete;
    display();
}

async function promptTodo(){
    const { value: text } = await Swal.fire({
        title: 'Add Todo',
        input: 'text',
        inputPlaceholder: 'Enter Name of Todo'
    });
    if(text){
        userTodos.push({
            todoContent: text,
            isComplete: false
        });
        display();
    }
}