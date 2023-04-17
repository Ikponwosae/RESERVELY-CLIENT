/* eslint-disable import/no-anonymous-default-export */

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCashRegister, faCloudUploadAlt, faPlus, faTasks, } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown, Card } from '@themesberg/react-bootstrap';
import { CounterWidget, CircleChartWidget, BarChartWidget } from "../../components/Widgets";
import { PageVisitsTable } from "../../components/Tables";
import { trafficShares, totalOrders } from "../../data/charts";
import Sidebar from "components/Sidebar";
import ScrollToTop from "components/ScrollToTop";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import { Link } from 'react-router-dom';
import { Routs } from "routs";

export default () => {
  return (
    <>
    <Sidebar />
    <AnimationRevealPage>
    <main className="content">
      <Navbar/>
      <ScrollToTop />
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
        <Dropdown className="btn-toolbar">
          <Dropdown.Toggle as={Button} variant="outline-primary" size="sm" className="me-2">
            <FontAwesomeIcon icon={faPlus} className="me-2" />New Task
          </Dropdown.Toggle>
          <Dropdown.Menu className="dashboard-dropdown dropdown-menu-left mt-2">
          
            <Dropdown.Item className="fw-bold">
              <Card.Link as={Link} to={Routs.InviteStaff.path} >
              <FontAwesomeIcon icon={faTasks} className="me-2" /> Invite Staff</Card.Link>
            </Dropdown.Item>
          
            <Dropdown.Item className="fw-bold">
              <FontAwesomeIcon icon={faCloudUploadAlt} className="me-2" /> Upload Files
            </Dropdown.Item>
          
          </Dropdown.Menu>
        </Dropdown>
      </div>

      <Row className="justify-content-md-center">
        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Appointments"
            title="Booked"
            period="All time"
            percentage={18.2}
            icon={faBook}
            iconColor="shape-secondary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CounterWidget
            category="Revenue"
            title="$43,594"
            period="All time"
            percentage={28.4}
            icon={faCashRegister}
            iconColor="shape-tertiary"
          />
        </Col>

        <Col xs={12} sm={6} xl={4} className="mb-4">
          <CircleChartWidget
            title="Count"
            data={trafficShares} />
        </Col>
      </Row>

      <Row>
        <Col xs={12} xl={12} className="mb-4">
          <Row>
            <Col xs={12} xl={8} className="mb-4">
              <Row>
                <Col xs={12} className="mb-4">
                  <PageVisitsTable />
                </Col>
              </Row>
            </Col>

            <Col xs={12} xl={4} >
              <Row>
                <Col xs={12} className="mb-4">
                  <BarChartWidget
                    title="Total orders"
                    value={452}
                    percentage={18.2}
                    data={totalOrders} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
      </main>
    </AnimationRevealPage>
    </>
  );
};
