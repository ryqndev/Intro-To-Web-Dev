import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
/**
 * The line above is the starting point for our react program. 
 * React will render our App component in the div with identified 
 * as 'root'
 * 
 * You can see the base HTML template (where the html code will be
 * injected into) in the ../public/index.html file.
 * Don't worry about line 21 for now. They're called service workers 
 * and provide an offline functionality to your web app.
 * 
 * Since we'll be rendering the App component, let's take a look 
 * inside the App/App-commented.js file to see what gets rendered onto 
 * our HTML file
 */

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
