/**
 * @author Ryan Yang
 * @license MIT
 * @description - This is the JS code for the simple TODO list web app. Keep in mind
 * that this code demo is meant for students at a hackathon where they have 24-48 hours 
 * to learn and write code from scratch in a brand new language. That means that this repo
 * does not contain the *BEST* code, but it provides a standard boilerplate that allows
 * students to understand how to write html/css/js in a 1 hour workshop
 */


/**
 * These are constants that have the string display values of date properties.
 * Since the .getMonth() and .getDay() Date functions do not return strings, but
 * rather a number indicating which month/day of week a certain date is, we have the
 * string versions of days in arrays so we can simply access the string values by doing
 * For ex: monthNames[(new Date()).getMonth()]
 * Since at the time of writing, the date is December 7, 2019, the .getMonth() function will 
 * return 11 and monthNames[11] will return "Dec"
 * 
 * The same applies to dayNames
 */
const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
const dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

/** userTodos is a variable set to an array. Every element in the array should
 * follow the same format:
 * {
 *  content: "Name of task to be displayed",
 *  isComplete: true/false
 * }
 * userTodos is a variable that holds the values of every single task on the todo
 * list as well as keep track of whether or not it is complete
 * 
 * Every item in the array is stored as a JSON (Javascript Object Notation) element
 * 
 * Simply put, an "object"/item/task on the todo list will have 2 properties:
 * 1. content - The string value of the name or description of the task 
 * 2. isComplete - a boolean value that indicates whether that task is complete or not
 */
let userTodos = [  ];

/**
 * @function load - a function that gets called when the website loads
 * It first creates a Javascript Date object. Find info here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
 * 
 * Since the new Date() has no parameters, it will, by default, create a date
 * object for today's date
 * 
 * Then, it sets the corresponding html divs to reflect the current date and calls
 * @function display
 */
function load(){
    let today = new Date();

    // document.getEleme... is a DOM function. DOM functions are how you can 
    // use javascript
    document.getElementById('day').innerText = today.getDate();
    document.getElementById('month').innerText = monthNames[today.getMonth()];
    document.getElementById('year').innerText = today.getFullYear();
    document.getElementById('day-name').innerText = dayNames[today.getDay()];

    display();
}

/**
 * @function display - loops through the variable called userTodos
 * which should be an array of objects with this pattern: 
 * {
 *  content: "Name of task to be displayed",
 *  isComplete: true/false
 * }
 * where isComplete is a boolean value that represents whether or not
 * the task is done.
 */
function display(){
    // clears out old html being displayed
    document.getElementById('todo-list').innerHTML = "";

    // loops through every element in userTodos array and called createTodoItem on it
    userTodos.forEach(createTodoItem);
    /**
     * forEach is a built in Javascript function. JS has many array functions such as maps, filters
     * forEach, etc. but you can still write a basic for loop like this:
     * 
     * for(let i = 0; i < userTodos.length; i++){
     *      createTodoItem(userTodos[i], i);
     * }
     * 
     * @note : Above for loop will do the same thing as line 43
     */

    // generate new html code and insert it into the 'todo-list' div
    document.getElementById('todo-list').innerHTML += `
        <div class="todo-user--add" onclick="askUserForTodo();">
            <div class="todo-content todo-content--add"> add an item </div>
        </div>
    `;  
}

/**
 * @function createTodoItem - this function is run for every element
 * of userTodos array. It generates a todo-item and fills it out
 * with the corresponding information and then appends it to the end of the todo-list
 * div. It also attaches an onclick function for future toggling
 * @param {*} item 
 * @param {*} index 
 */
function createTodoItem(item, index){
    let template = `
        <div class="todo-item" onclick="toggle(${index});">
            <div class="todo-content ${item.isComplete && "todo-complete"}"> ${item.todoContent} </div>
            <div class="todo-check"> ${item.isComplete ? "⦿" : "◯"} </div>
        </div>
    `;
    // this is a DOM api that allows us to directly manipulate the html
    // Here, we set the HTML inside a div to the template variable
    document.getElementById('todo-list').innerHTML += template;
}

/**
 * @function toggle - Toggles the isComplete attribute of a userTodo item
 * @param {Number} index - index is an integer that has the value of
 * the index in which the current item data is stored in the userTodos
 * array
 */
function toggle(index){
    // toggles boolean value
    userTodos[index].isComplete = !userTodos[index].isComplete;
    // After changing the value, should also change the display value
    display();
}

/**
 * @function askUserForTodo - This is an asynchronous function. Asynchronous
 * functions allow us execute functions without blocking the rest of the 
 * program. In this case, we have a popup that needs to wait for the user
 * to type something in. Then, we can continue the rest of the function. 
 * Let's say that there was a javascript function that changes the color 
 * of the background every 2 seconds. It doesn't make sense for the program 
 * to halt that action just because we're waiting for a user input.abs
 * 
 * Asynchronous functions allow us to do other stuff when we know that a 
 * certain function is going to take a long time to complete. Another example 
 * of a function that is asynchronous are network calls. If you wanted to
 * get some data from your backend, for example, you would first display your
 * website and then fill in the data with some loading text like "getting your 
 * results..." and then after your network call succeeds, you change the values. 
 * Otherwise, your user may be left looking at a blank screen until the network 
 * call finishes. In the case that they have poor internet and there's a lot of
 * data to send, the user may end up looking at a blank screen and probably
 * just quit your site.
 */
async function askUserForTodo(){
    // This is the code for using the Sweet Alert Library. You can read more
    // in their docs here: https://sweetalert2.github.io/
    const { value: text } = await Swal.fire({
        title: 'Add Todo',
        input: 'text',
        inputPlaceholder: 'Enter Name of Todo'
    });

    // If the user types something into the input, then add it as an item,
    // We don't want to add empty todo items
    if(text){
        addItem(text);
    }
}

function addItem(content){
    userTodos.push({
        todoContent: content,
        isComplete: false
    });
    display();
}