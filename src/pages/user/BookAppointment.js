import React, { useState } from "react";
import { Button, InputGroup, Form } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, } from '@fortawesome/free-solid-svg-icons';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import Datetime from "react-datetime";
import moment from "moment-timezone";
import { Formik } from 'formik';
import tw from "twin.macro";
import styled from "styled-components";
import MiniCenteredFooter from "components/footers/MiniCenteredFooter";
import Header, { LogoLink, NavLinks, NavLink as NavLinkBase } from "./../../components/headers/light";
import { Calendar, momentLocalizer } from 'react-big-calendar';
import "react-big-calendar/lib/css/react-big-calendar.css";

const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;
const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const TextColumn = styled(Column)(props => [
  tw`md:w-7/12 mt-16 md:mt-0`,
  props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);
const localizer = momentLocalizer(moment)

export default ({navLinks = [
        <NavLinks key={1}>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
          <NavLink href="/pricing">Pricing</NavLink>
          <NavLink href="/login">Login</NavLink>
        </NavLinks>
      ]}) => {
    
    const [bookDate, setBookDate] = useState("");
    const [date, setDate] = useState(new Date());
    const myEventsList = [
      {
        start: moment().date(24),
        end: moment()
          .add(5, "days")
          .toDate(),
        title: "Blocked"
      },
      {
        start: moment().toDate(),
        end: moment()
          .add(2, "hours")
          .toDate(),
        title: "changed"
      },
      {
        start: moment().date(15).toDate(),
        end: moment()
          .add(4, "days")
          .toDate(),
        title: "Taken"
      },
      {
        start: moment().date(21).toDate(),
        end: moment()
          .add(3, "hours")
          .toDate(),
        title: "Retouch tips"
      },
      
    ]

    return (
        <>
        <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
        <main>
        <AnimationRevealPage>
        {/* <section className=" my-5 mt-lg-6 mb-lg-5"> */}
        {/* <Container> */}
          <TwoColumn css={tw`md:items-center`}>
            <TextColumn >
            <div className="d-flex justify-content-center align-items-center mt-4">
                <span>Business name</span>
            </div>
                <Formik>
                <Form >
                {/* <Row className="justify-content-md-center"> */}
                <Form.Group className="mb-3">
                    <Form.Label>Service</Form.Label>
                    <Form.Select>
                    <option defaultValue>Select a Service</option>
                    <option>Wash hair</option>
                    <option>Steaming</option>
                    <option>deep conditioning</option>
                    </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Select your preferred Appointment Date and Time</Form.Label>
                    <span>  ** Please make sure to look through the Available times on the calendar</span>
                    <Datetime
                    timeFormat={true}
                    closeOnSelect={false}
                    onChange={setBookDate}
                    renderInput={(props, openCalendar) => (
                        <InputGroup>
                        <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                        <Form.Control
                            required
                            type="text"
                            value={bookDate ? moment(bookDate).format("MM/DD/YYYY") : ""}
                            placeholder="mm/dd/yyyy"
                            onFocus={openCalendar}
                            onChange={() => { }} />
                        </InputGroup>
                    )} />
                </Form.Group>
                {/* <Form.Group className="mb-3">
                    <Form.Label>Available Times</Form.Label>
                    <Form.Select>
                    <option defaultValue>Available Times</option>
                    <option>09:00</option>
                    <option>11:00</option>
                    <option>12:30</option>
                    </Form.Select>
                </Form.Group> */}
                {/* </Row> */}
                                
                {/* <Row className="justify-content-md-center mb-3"> */}
                    <Button variant="outline-primary" size="lg" className="me-1">BOOK NOW</Button>
                {/* </Row> */}
                </Form>
                </Formik>
                <div className="d-flex justify-content-center align-items-center mt-4">
                <p className='text-center'>
                  <span className='bold'>Selected Date:</span>{' '}
                  {date.toDateString()}
                </p>
                </div>
            </TextColumn>
            <div>
              <span className="d-flex justify-content-center align-items-center mt-4">BUSINESS SCHEDULE</span> <br/>
              <Calendar
                onChange={setDate} 
                value={date}
                localizer={localizer}
                defaultView="month"
                events={myEventsList}
                startAccessor="start"
                endAccessor="end"
                style={
                  { 
                    height: 400, 
                    width: 700,
                    
                  }
                }
              />
            </div>
          </TwoColumn>

                
        {/* </Container> */}
      {/* </section> */}
      <MiniCenteredFooter/>
      </AnimationRevealPage>
    </main> 
    </>
    );
};