import React, {useState} from 'react';
import './Header.css';

const monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec" ];
const dayNames = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];


const Header = () => {
    const [today, setDate] = useState(new Date());

    return (
        <div className="header-wrapper">
            <div className="date-wrapper">
                <div className="day">
                    {today.getDate()}
                </div>
                <div className="date-inner-wrapper">
                    <div className="month">
                        {monthNames[today.getMonth()]}
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

export default Header;
