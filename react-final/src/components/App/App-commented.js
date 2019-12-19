/**
 * @author Ryan Yang
 * @license MIT
 * @description https://github.com/ryqndev/Intro-To-Web-Dev/tree/master/react-final
 */
import React from 'react';
import TodoList from '../TodoList/TodoList-commmented';
import Header from '../Header/Header-commented';
import './App.css';

/**
 * @component App - This is the App component. This component 
 * will hold the general structure of our entire app. 
 * Since the Header and TodoList part of our app have separate 
 * logic, we can split them into smaller components and thus, 
 * separate the code for these components into their own files 
 * and simply import them here. 
 * 
 * @returns - Returns the Header and TodoList components wrapped 
 * inside a div with the class "app". 
 */
function App() {
	return (
		// We use the keyword 'className' instead of class because
		// class is a reserved keyword in Javascript. The JSX keyword 
		// 'className' is functionally the same as 'class' in HTML and 
		// when React actually generates the html, it will compile 
		// 'className' to 'class'
		<div className="app"> 
			{/* 
			  * We now have to change our comment style since we 
			  * are inside the div tags and thus, now writing JSX, not 
			  * just Javascript. Notice though, everything inside 
			  * the { ... } brackets are actually executed as Javascript. 
			  * Before, if we wrote JS code in our html like this:
			  * 
			  * for(let i = 0; i < 10; i++){ console.log(i); } 
			  * 
			  * HTML would just display the code as text. 
			  * 
			  * However, now, if you were to take that line and put it 
			  * inside {brackets}, it will actually be executed on 
			  * every 'render' and remember that render's are 
			  * executed every time a state changes (and some other cases)
			  * 
			  * Since we have no state in the App component, we won't have
			  * rerenders.
			  */}
			<Header />
			{/* 
			  * You can find the code for Header and TodoList components 
			  * by following the import statements to their respective source 
			  * code. Remember, each of these Components are functions that 
			  * return 'HTML' code needed to display the component. 
			  * 
			  * Let's go inside the Header file first, and then the TodoList
			 */}
			<TodoList />
		</div>
    );
}

// This export statement is needed since we used an import statement 
// in our index.js to import the App component. This App.js file could 
// potentially have more than one component so the question is, which 
// function should actually be exported? The line below will specify 
// that the default export should be our function called App
export default App;
