/**
 * @author Ryan Yang
 * @license MIT
 * @description https://github.com/ryqndev/HackUCI-Demo/tree/master/react-final
 */

// We're not only import React this time, we are also importing 
// something called useState. This is a built in function to 
// React that will help us keep track of the state and if we use 
// their state function, they will automatically listen for udpates 
// and help with rerenders
import React, {useState} from 'react';
import './Header.css'; // imports corresponding css file for component


// Here are variables set to arrays. We use the native Javascript Date object
// and since certain functions like .getMonth() and .getDay() return the 
// index number instead of the string we want, we will use these arrays to help 
// us display the corresponding name that the user can understand
const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
const dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];

/**
 * @component Header - This component has the source code 
 * for the Header component and what gets returned will be 
 * the 'HTML' code that resembles the top part of our app
 * 
 * @note This code is largely similar to our App.js but a 
 * bit more complex. Let's start with the first biggest change 
 * which is the useState function on line 53
 * 
 */
const Header = () => {

    // The line below is how we create a state for our 
    // component. Although we only have one at the moment,
    // you can have as many states as you would like within 
    // a component and React will listen to all of them for
    // changes. Remember, if even 1 small state changes, the 
    // entire component will have to rerender. This is why 
    // we want to put state changes on the lowest possible 
    // level

    // There are 2 parts to useState here
    // today - a variable name you can use that has the 
    //      current value of the state. In this case,
    //      the value is the current date.
    // new Date() - whatever is inside the parameter 
    //      of the useState function call will be
    //      the default value of the state when the
    //      component is first created

    const [today] = useState(new Date());

    // Why is our variable name inside []? We will explore
    // why in the TodoList component later but know for now,
    // useState actually returns an array of 2 elements and 
    // the first one is the value of the state. We can assign
    // variables to each element like this. The concept is 
    // called array destructuring and you can look it up 
    // to understand the syntax

    return (
        // Hopefully, you should be able to understand the JSX 
        // (html-looking portion of the code so the comments 
        // will focus on the React-relevant parts. If you need 
        // help understanding the html, check out
        // https://github.com/ryqndev/HackUCI-Demo/blob/master/final-commented/index.html

        <div className="header-wrapper">
            <div className="date-wrapper">
                <div className="day">
                    { /* 
                      * Notice, the code below is inside {...}
                      * brackets. This means that it will be 
                      * executed as Javascript instead of being
                      * displayed as text. The comments here are 
                      * also being executed as Javascript but 
                      * since it's just JS comments, nothing 
                      * actually runs
                      */ }
                    {today.getDate()}
                </div>
                <div className="date-inner-wrapper">
                    <div className="month">
                        {/* 
                          * When you call the Date object's
                          * .getMonth() function, it actually 
                          * returns an integer 0-11. You can learn 
                          * more about JS Date functions here:
                          * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getMonth
                          * but since it returns an int, we use that
                          * as the index for our variable monthNames 
                          * above which will return a string with the 
                          * value indicated in that array. That string 
                          * then gets displayed as text in the resulting 
                          * HTML
                          */}
                        {monthNames[today.getMonth()]}
                        {/* 
                          * Also notice how I changed all the 'ids' into 
                          * 'classNames' and that's because we no longer 
                          * need to target the divs to change their content. 
                          * The content will be whatever is inside those 
                          * {...} brackets
                          */}
                    </div>
                    <div className="year">
                        {today.getFullYear()}
                    </div>
                </div>
            </div>
            <div className="day-name">
                {dayNames[today.getDay()]}
            </div>
        </div>
    )
}

// This time, we actually have 3 variables here. We have the
// 2 arrays with the month and day names and the actual component. 
// The export statement helps clarify that we are trying to export
// the header component, rather than the two static arrays - which 
// is completely possible if that's what you wanted to do.
export default Header;
