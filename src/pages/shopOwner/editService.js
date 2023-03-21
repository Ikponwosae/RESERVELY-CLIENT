import React, { useState } from "react";
import { Breadcrumb, Button, ButtonGroup, Row, Col, InputGroup, Form, Dropdown, Modal, Card, Table } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import users from '../../data/users';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import Sidebar from "components/Sidebar";
import ScrollToTop from "components/ScrollToTop";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Link } from 'react-router-dom';
import { Routs } from "routs";


// import Thomas from "../assets/img/team/thomas.jpg"

export default () => {
    return (
        <>
        <Sidebar />
        <AnimationRevealPage >
        <main className="content">
          <Navbar />
          <ScrollToTop />
          <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="mb-4 mb-lg-0">
            <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                <Breadcrumb.Item>Reservely</Breadcrumb.Item>
                <Breadcrumb.Item active>Services</Breadcrumb.Item>
            </Breadcrumb>
            <h4>YOUR SERVICES</h4>
            <p className="mb-0">Add a service to offer your customers</p>
            </div>
            </div>

            <Form>
                <Row className="justify-content-md-center">
                <Col xs={12} sm={6} xl={6} className="mb-4">
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <InputGroup>
                        <Form.Control required type="text" placeholder="Massage Therapy" />
                        </InputGroup>
                    </Form.Group>
                </Col>

                <Col xs={12} sm={6} xl={6} className="mb-4">
                <Form.Group className="mb-3">
                    <Form.Label>Duration</Form.Label>
                    <Form.Select>
                    <option defaultValue>Select a time duration (in minutes)</option>
                    <option>60</option>
                    <option>90</option>
                    <option>120</option>
                    </Form.Select>
                </Form.Group>
                </Col>
                </Row>
                <Row className="justify-content-md-center">
                <Col xs={12} sm={6} xl={6} className="mb-4">
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <InputGroup>
                        <Form.Control autoFocus required type="text"placeholder="$15000.00" />
                        </InputGroup>
                    </Form.Group>
                </Col>

                <Col xs={12} sm={6} xl={6} className="mb-4">
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <InputGroup>
                        <Form.Control as="textarea" rows="1" placeholder="This service bring warmth.."/>
                    </InputGroup>
                </Form.Group>
                </Col>
                </Row>
                                
                <Row className="justify-content-md-center">
                    <Button variant="outline-success" size="lg" className="me-1">SAVE</Button>
                </Row>
            </Form>

          <Footer />
        </main>
        </AnimationRevealPage>
        </>
    );
};