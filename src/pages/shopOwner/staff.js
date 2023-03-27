import React, { useState, useEffect } from "react";
import { Breadcrumb, Button, ButtonGroup, Row, Col, InputGroup, Form, Dropdown, Modal, Card, Table } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faCog, faCheck, faSearch, faSlidersH, faPause } from '@fortawesome/free-solid-svg-icons';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import Sidebar from "components/Sidebar";
import ScrollToTop from "components/ScrollToTop";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import useStaff from "hooks/useStaff";


const GetStaff = () => {
    const [staffs, setStaffs] = useState([])
    const { getStaff } = useStaff
    
    useEffect(() => {
        getStaff()
        setStaffs(staffs)

    }, [getStaff, staffs])

    const [showDefault, setShowDefault] = useState(false);
    const handleClose = () => setShowDefault(false);
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
                <Breadcrumb.Item active>Staff List</Breadcrumb.Item>
            </Breadcrumb>
            <h4>Staffs List</h4>
            <p className="mb-0">All your staff and their Details.</p>
            </div>
            <div className="btn-toolbar mb-2 mb-md-0">
            <Button variant="outline-primary" size="sm">
                <FontAwesomeIcon icon={faPlus} className="me-2" /> Invite Staff
            </Button>
            <ButtonGroup className="ms-3">
                <Button variant="outline-primary" size="sm">Share</Button>
                <Button variant="outline-primary" size="sm">Export</Button>
            </ButtonGroup>
            </div>
            </div>

            <div className="table-settings mb-4">
    <Row className="justify-content-between align-items-center">
        <Col xs={9} lg={4} className="d-flex">
            <InputGroup className="me-2 me-lg-3">
                <InputGroup.Text>
                    <FontAwesomeIcon icon={faSearch} />
                </InputGroup.Text>
                <Form.Control type="text" placeholder="Search" />
            </InputGroup>
            <Form.Select className="w-25">
                <option defaultChecked>All</option>
                <option value="1">Active</option>
                <option value="2">Pending</option>
                <option value="3">Suspended</option>
            </Form.Select>
        </Col>
        <Col xs={3} lg={8} className="text-end">
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
                                <th className="border-bottom">First Name</th>
                                <th className="border-bottom">Last Name</th>
                                <th className="border-bottom">Email</th>
                                <th className="border-bottom">Status</th>
                                <th className="border-bottom">Registration Date</th>
                                <th className="border-bottom">Action</th>
                            </tr>
                            {staffs.map(s => (
                            <tr key={s._id}>
                                <td>
                                    <Card.Link className="d-flex align-items-center">
                                        <div className="d-block">
                                            <span className="fw-bold">{s.firstName}</span>
                                        </div>
                                    </Card.Link>
                                </td>
                                <td><span className="fw-bold">{s.lastName}</span></td>
                                <td><span className="fw-normal"><div className="small text-gray">{s.email}</div></span></td>
                                <td><span className="fw-normal"><div className="small text-gray">{s.status}</div></span></td>
                                <td><span className="fw-normal">{s.createdAt}</span></td>
                                <td>
                                <Button variant="warning" size="xs" className="text-dark" onClick={() => setShowDefault(true)}>
                                    <FontAwesomeIcon icon={faPause} className="me-2" /> SUSPEND
                                </Button>
                                <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
                                    <Modal.Header>
                                    <Modal.Title className="h6">Terms of Suspension</Modal.Title>
                                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                                    </Modal.Header>
                                    <Modal.Body>
                                    <p>You are about to suspend this user. Pending this suspension, they will not be able to login to the dashboard and you will not be able to assign them to appointments</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        I Understand, Continue
                                    </Button>
                                    <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>
                                        Close
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
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

export default GetStaff