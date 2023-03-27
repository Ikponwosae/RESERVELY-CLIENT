import React, { useState } from "react";
import { Button, Row, InputGroup, Form, Container } from "@themesberg/react-bootstrap";
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


const StyledHeader = styled(Header)`
  ${tw`justify-between`}
  ${LogoLink} {
    ${tw`mr-8 pb-0`}
  }
`;
const NavLink = tw(NavLinkBase)`
  sm:text-sm sm:mx-6
`;

export default ({navLinks = [
        <NavLinks key={1}>
          <NavLink href="/about">About</NavLink>
          <NavLink href="blog">Blog</NavLink>
          <NavLink href="pricing">Pricing</NavLink>
          <NavLink href="login">Login</NavLink>
        </NavLinks>
      ]}) => {
    
    const [bookDate, setBookDate] = useState("");

    return (
        <>
        <StyledHeader links={navLinks} collapseBreakpointClass="sm" />
        <main>
        <AnimationRevealPage>
        <section className=" my-5 mt-lg-6 mb-lg-5">
        <Container>
            <div>
                <span>Business name</span>
            </div>
          {/* <Row className="justify-content-center form-bg-image"> */}
                <Formik>
                <Form >
                <Row className="justify-content-md-center">
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
                    <Form.Label>Select your preferred appointment Date</Form.Label>
                    <Datetime
                    timeFormat={false}
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
                <Form.Group className="mb-3">
                    <Form.Label>Available Times</Form.Label>
                    <Form.Select>
                    <option defaultValue>Available Times</option>
                    <option>09:00</option>
                    <option>11:00</option>
                    <option>12:30</option>
                    </Form.Select>
                </Form.Group>
                </Row>
                                
                <Row className="justify-content-md-center mb-3">
                    <Button variant="outline-primary" size="lg" className="me-1">BOOK NOW</Button>
                </Row>
                </Form>
                </Formik>

                
          {/* </Row> */}
        </Container>
      </section>
      <MiniCenteredFooter/>
      </AnimationRevealPage>
    </main> 
    </>
    );
};