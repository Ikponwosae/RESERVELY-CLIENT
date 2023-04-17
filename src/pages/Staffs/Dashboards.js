/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPalette,
  faLaptopCode,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Nav, Tab } from "@themesberg/react-bootstrap";
import { TransactionsTable } from "../../components/Tables2";
import ScrollToTop from "components/ScrollToTop";
import Footer from "components/Footer";
import MyCalendar from "components/Calendar";
import { PersonalInfoForm } from "pages/components/SettingsForms";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Link } from "react-router-dom";
import { Routs } from "routs";
import Navbar from "components/Navbar";

export default () => {
  return (
    <>
      <AnimationRevealPage>
        <main>
          <Navbar />
          <ScrollToTop />
          <br />
          <Tab.Container defaultActiveKey="visual_design">
            <Row>
              <Col lg={12}>
                <Nav fill variant="pills" className="flex-column flex-sm-row">
                  <Nav.Item>
                    <Nav.Link eventKey="booked" className="mb-sm-3 mb-md-0">
                      <FontAwesomeIcon icon={faPalette} className="me-2" />{" "}
                      Appointments
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="schedule" className="mb-sm-3 mb-md-0">
                      <FontAwesomeIcon icon={faLaptopCode} className="me-2" />{" "}
                      Schedule
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link
                      eventKey="user_profile"
                      className="mb-sm-3 mb-md-0"
                    >
                      <FontAwesomeIcon icon={faUser} className="me-2" /> Profile
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="booked" className="py-4">
                    <TransactionsTable />
                    <p></p>
                    <p></p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="schedule" className="py-4">
                    <p>{/*  */}</p>
                    <MyCalendar />
                  </Tab.Pane>
                  <Tab.Pane eventKey="user_profile" className="py-4">
                    <p></p>
                    <PersonalInfoForm />
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>

          <Footer />
        </main>
      </AnimationRevealPage>
    </>
  );
};
