import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faLaptopCode, faUser } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Nav, Tab } from '@themesberg/react-bootstrap';

import { TransactionsTable } from "../../components/Tables";
import ScrollToTop from "components/ScrollToTop";
import Footer from "components/Footer";
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
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
              <TransactionsTable/>
              <p>
                Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
              </p>
              <p>
                Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
              </p>
            </Tab.Pane>
            <Tab.Pane eventKey="completed" className="py-4">
              <p>
                Photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
              </p>
              <TransactionsTable />
            </Tab.Pane>
            <Tab.Pane eventKey="user_profile" className="py-4">
              <p>
                Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam delectus, Marfa eiusmod Pinterest in do umami readymade swag.
              </p>
              <p>
                Day handsome addition horrible sensible goodness two contempt. Evening for married his account removal. Estimable me disposing of be moonlight cordially curiosity.
              </p>
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
