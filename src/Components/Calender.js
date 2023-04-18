import { useState } from 'react';
import Calendar from 'react-calendar';
import './Calender.css';

function Calender() {
    const [date, setDate] = useState(new Date())

    return (
        <div className="box">
            <h1 className="header">React Calendar</h1>
            <div className="calendar-container">
                <Calendar onChange={setDate} value={date} />
            </div>
            <div className="text-center">
                Birthday on: {date.toDateString()}
            </div>
            <div>
                <h1>vijaya,sujatha,likitha,sravya</h1>
            </div>
        </div>
    )

}

export default Calender;