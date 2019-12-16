import React from 'react';
import TodoList from '../TodoList/TodoList';
import Header from '../Header/Header';
import './App.css';

function App() {
	return (
		<div className="app">
			<Header />
			<TodoList />
		</div>
    );
}

export default App;
