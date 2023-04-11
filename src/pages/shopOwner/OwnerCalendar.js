import React from "react";
import Sidebar from "components/Sidebar";
import ScrollToTop from "components/ScrollToTop";
import Footer from "components/Footer";
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import MyCalendar from "components/Calendar";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment';
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment)


const FullCalendar =  () => {
  return (
    <>
    <Sidebar />
    <AnimationRevealPage>
    <main className="content">
      <ScrollToTop />
      {/* <MyCalendar /> */}
      <div>
    <Calendar
      localizer={localizer}
      defaultView="month"
    //   events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 650, width: 1250, paddingLeft: 10 }}
    />
  </div>
      
      <Footer />
      </main>
    </AnimationRevealPage>
    </>
  );
};


export default FullCalendar;