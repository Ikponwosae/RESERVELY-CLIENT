import React, { useState } from "react";
import { Breadcrumb, Button, ButtonGroup, Row, Col, Dropdown, Modal, Card, Table, Form } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faCheck, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import appointments from '../../data/appointments';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import Sidebar from "components/Sidebar";
import ScrollToTop from "components/ScrollToTop";
import Footer from "components/Footer";



export default () => {
    const [showDefault, setShowDefault] = useState(false);
    const handleClose = () => setShowDefault(false);
    return (
        <>
        <Sidebar />
        <AnimationRevealPage >
        <main className="content">
          {/* <Navbar /> */}
          <ScrollToTop />
          <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="mb-4 mb-lg-0">
            <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                <Breadcrumb.Item>Reservely</Breadcrumb.Item>
                <Breadcrumb.Item active>WaitList</Breadcrumb.Item>
            </Breadcrumb>
            <h4>Appointments Wait List</h4>
            <p className="mb-0">All the appointments booked by your customers waiting for approval.</p>
            </div>
            </div>

            <div className="table-settings mb-4">
           <Row className="justify-content-between align-items-center">
        <Col xs={3} lg={8} className="text-start">
            <Dropdown as={ButtonGroup} className="me-2">
                <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                    <span className="icon icon-sm icon-gray">
                        <FontAwesomeIcon icon={faSlidersH} />
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-right">
                    <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                    <Dropdown.Item className="d-flex fw-bold">
                        10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                    </Dropdown.Item>
                    <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                    <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Dropdown as={ButtonGroup}>
                <Dropdown.Toggle split as={Button} variant="link" className="text-dark m-0 p-0">
                    <span className="icon icon-sm icon-gray">
                        <FontAwesomeIcon icon={faCog} />
                    </span>
                </Dropdown.Toggle>
                <Dropdown.Menu className="dropdown-menu-right">
                    <Dropdown.Item className="fw-bold text-dark">Show</Dropdown.Item>
                    <Dropdown.Item className="d-flex fw-bold">
                        10 <span className="icon icon-small ms-auto"><FontAwesomeIcon icon={faCheck} /></span>
                    </Dropdown.Item>
                    <Dropdown.Item className="fw-bold">20</Dropdown.Item>
                    <Dropdown.Item className="fw-bold">30</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </Col>
    </Row>
</div>

            <Card border="light" className="table-wrapper table-responsive shadow-sm">
                <Card.Body>
                    <Table hover className="user-table align-items-center">
                        <thead>
                            <tr>
                                <th className="border-bottom">Customer Name</th>
                                <th className="border-bottom">Email</th>
                                <th className="border-bottom">Date Booked</th>
                                <th className="border-bottom">Service</th>
                                <th className="border-bottom">Start Time</th>
                                <th className="border-bottom">End Time</th>
                                <th className="border-bottom">Action</th>
                            </tr>
                            {appointments.map(a => (
                            <tr key={a.key}>
                                <td>
                                    <Card.Link className="d-flex align-items-center">
                                        {/* <Image src={u.image} className="user-avatar rounded-circle me-3" /> */}
                                        <div className="d-block">
                                            <span className="fw-bold">{a.name}</span>
                                        </div>
                                    </Card.Link>
                                </td>
                                <td><span className="fw-bold">{a.email}</span></td>
                                <td><span className="fw-normal"><div className="small text-gray">{a.dateBooked}</div></span></td>
                                <td><span className="fw-normal"><div className="small text-gray">{a.Service}</div></span></td>
                                <td><span className="fw-normal">{a.start}</span></td>
                                <td><span className="fw-normal">{a.end}</span></td>
                                <td>
                                <Button bsPrefix="text" href="#info" variant="info" className="m-3" onClick={() => setShowDefault(true)}>ASSIGN</Button>
                                <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
                                    <Modal.Header>
                                    <Modal.Title className="h6">Assign</Modal.Title>
                                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                                    </Modal.Header>
                                    <Modal.Body>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Availabe Staff</Form.Label>
                                        <Form.Select>
                                        <option defaultValue>Select a staff to assign(who is free)</option>
                                        <option>Jode Jelly</option>
                                        <option>Rigby Singh</option>
                                        <option>Ava Max</option>
                                        </Form.Select>
                                    </Form.Group>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        ASSIGN
                                    </Button>
                                    <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>
                                        CLOSE
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                                 | 
                                 <Button bsPrefix="text" href="#info" variant="danger" className="m-3" >APPROVE </Button>
                                 
                                </td>
                            </tr>
                        ))}
                        </thead>
                        <tbody>

                        </tbody>
                    </Table>
                </Card.Body>
            </Card>
          <Footer />
        </main>
        </AnimationRevealPage>
        </>
    );
};