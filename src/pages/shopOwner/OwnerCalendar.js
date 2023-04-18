/* eslint-disable import/no-anonymous-default-export */
import React, {useState, useEffect, useCallback} from "react";
import Sidebar from "components/Sidebar";
import ScrollToTop from "components/ScrollToTop";
import Footer from "components/Footer";
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import "react-big-calendar/lib/css/react-big-calendar.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import api from "api/api";
import AuthService from "auth_service";
import { format } from "date-fns";

export default () => {
  const handleDateClick = (arg) => {
    alert(arg.dateStr);
  };
  
  function formatDates(data){
    return format(new Date(data), 'yyyy-MM-dd')
  }
  const { getCurrentToken, getCurrentUser} = AuthService


    const getService = useCallback(async (serviceId) => {
      try {
        const response = await api.get(`/business/${getCurrentUser().business}/services/${serviceId}`,
          {
            headers: {
              Authorization: `Bearer ${getCurrentToken()}`,
            },
          }
        );
  
        const { service } = response.data;
        return service.name
      } catch (e) {
        console.error(e);
      }
    });
    getService();
  const [appointments, setAppointments] = useState([]);
  useEffect(() => {
    const getAppointment = async () => {
      try {
        const response = await api.get(`/owner/appointments/`,
          {
            headers: {
              'Authorization': `Bearer ${getCurrentToken()}`,
            },
          }
        );

        const { appointments } = response.data;
        let appoint = []
        appointments.forEach(async(a) => {
          appoint.push(
            {
              title: await getService(a.service),
              date: formatDates(a.bookDate)
            }
          )
        });
        setAppointments(appoint);
      } catch (e) {
        console.error(e);
      }
    };
    getAppointment();
  }, [getCurrentToken, getCurrentUser, getService]);



  return (
    <>
    <Sidebar />
    <AnimationRevealPage>
    <main className="content">
      <ScrollToTop />
      <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={false}
        dateClick={(e) => handleDateClick(e)}
        // events={[
        //   { title: "event 1", date: "2023-04-07" },
        //   { title: "event 2", date: "2023-04-17" }
        // ]}
        events={appointments}
        eventContent={renderEventContent}
      />
     </div>
      
      <Footer />
      </main>
    </AnimationRevealPage>
    </>
  );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}


// export default FullCalendar;