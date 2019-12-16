import React, {useState} from 'react';
import './Header.css';

const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
const dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];


const Header = () => {
    const [today, setDate] = useState(new Date());

    return (
        <div className="header-wrapper">
            <div className="date-wrapper">
                <div id="day">
                    {today.getDate()}
                </div>
                <div className="date-inner-wrapper">
                    <div id="month">
                        {monthNames[today.getMonth()]}
                    </div>
                    <div id="year">
                        {today.getFullYear()}
                    </div>
                </div>
            </div>
            <div id="day-name">
                {dayNames[today.getDay()]}
            </div>
        </div>
    )
}

export default Header;
