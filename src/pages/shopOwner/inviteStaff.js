// import React, { useState } from "react";
import { Button, Row, Col, InputGroup, Form } from "@themesberg/react-bootstrap";
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import Sidebar from "components/Sidebar";
import ScrollToTop from "components/ScrollToTop";
import Navbar from "components/Navbar";
import Footer from "components/Footer";


export default () => {
  return (
    <>
    <Sidebar />
    <AnimationRevealPage>
    <main className="content">
          {/* <Navbar /> */}
          <ScrollToTop />
          <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
           
            </div>

            <Form>
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <InputGroup>
                        <Form.Control required type="text" placeholder="Jane Doe" />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                        <Form.Control autoFocus required type="email"placeholder="jdoe@email.com" />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center">
                <Col xs={12} sm={6} xl={4} className="mb-4">
                    <Button variant="outline-tertiary" size="lg" className="me-1">SEND INVITE</Button> 
                </Col>
                </Row>
            </Form>

          <Footer />
        </main>
    </AnimationRevealPage>
    </>
  );
};
