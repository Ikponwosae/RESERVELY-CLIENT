import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)

const MyCalendar = (props) => (
  <div>
    <Calendar
      localizer={localizer}
      defaultView="month"
    //   events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500, width: 700 }}
    />
  </div>
)

export default MyCalendar;