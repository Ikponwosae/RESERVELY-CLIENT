import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Tab } from '@themesberg/react-bootstrap';
import { TransactionsTable } from "../../components/Tables";
import { PageVisitsTable } from "../../components/Tables";
import ScrollToTop from "components/ScrollToTop";
import Footer from "components/Footer";
import MyCalendar from "components/Calendar";
import Settings from "pages/Settings";
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import { OwnerInfoForm } from "pages/components/Formss";
import { Link } from 'react-router-dom';
import { Routs } from "routs";

export default () => {
  return (
    <>
    <AnimationRevealPage>
    <main>
      <ScrollToTop />
      <Tab.Container defaultActiveKey="visual_design">
      <Row>
        <Col lg={12}>
          <Nav fill variant="pills" className="flex-column flex-sm-row">
            <Nav.Item>
              <Nav.Link eventKey="booked" className="mb-sm-3 mb-md-0">
                <FontAwesomeIcon icon={faPalette} className="me-2" /> Booked Appointments
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="completed" className="mb-sm-3 mb-md-0">
                <FontAwesomeIcon icon={faLaptopCode} className="me-2" /> Completed Appointments
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="user_profile" className="mb-sm-3 mb-md-0">
                <FontAwesomeIcon icon={faUser} className="me-2" /> Profile
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="booked" className="py-4">
              {/* <TransactionsTable/> */}
              <PageVisitsTable />
              <p>
               
              </p>
              
             
            </Tab.Pane>
            <Tab.Pane eventKey="completed" className="py-4">
              <p>

              </p>
              <MyCalendar/ >
            </Tab.Pane>
            <Tab.Pane eventKey="user_profile" className="py-4">
              <p>

              </p>
              <p>

              </p>
              <OwnerInfoForm />
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
