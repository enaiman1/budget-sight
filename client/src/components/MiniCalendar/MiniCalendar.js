import  React, { useState } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MiniCalendar.scss';

const MiniCalendar = () =>{
    const [date, setDate] = useState(new Date());

    const onChange = date => {
      setDate(date);
    };
  
    return (
      <div className="calendar">
        <Calendar showWeekNumbers onChange={onChange} value={date} />
        {console.log(date)}
        {date.toString()}
      </div>
    );


}

export default MiniCalendar