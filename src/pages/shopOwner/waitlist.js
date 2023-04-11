import React, { useState, useEffect } from "react";
import { Breadcrumb, Button, ButtonGroup, Row, Col, Dropdown, Modal, Card, Table, Form } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faCheck, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import Sidebar from "components/Sidebar";
import ScrollToTop from "components/ScrollToTop";
import Footer from "components/Footer";
import axios from "axios";
import { baseUrl } from "./staff";
import format from "date-fns/format";


const token = localStorage.getItem('token')


const GetWaitlist =  () => {
    const [appoints, setAppoints] = useState([])

    useEffect(() => {
        const waitlist = async () => {
            try {
                const response = await axios.get(`${baseUrl}/owner/waitlist`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    } 
                })
    
                const {waitlist} = response.data
                console.log(waitlist)
                
                let appoints = []
                waitlist.forEach((a) => {
                    a.users.forEach(async (u) => {
                    let user = await getUser(u)
                    appoints.push({
                    id: a._id,
                    bookDate: a.bookDate,
                    endTime: a.endTime,
                    startTime: a.startTime,
                    userName: (user.firstName + " " + user.lastName),
                    userEmail: user.email,
                })
                setAppoints(appoints)
                console.log(appoints)
         })
      })

            } catch (e) {
                console.error(e)
            }
        }
        const getUser = async(userId) => {
            try {
                const response = await axios.get(`${baseUrl}/auth/user/${userId}`)
                const { user } = response.data
                return user;
            } catch (error) {
                console.log(error)
            }
        }
        waitlist()

    }, [])



    const [showDefault, setShowDefault] = useState(false);
    const handleClose = () => setShowDefault(false);
    return (
        <>
        <Sidebar />
        <AnimationRevealPage >
        <main className="content">
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
                                {/* <th className="border-bottom">Service</th> */}
                                <th className="border-bottom">Start Time</th>
                                <th className="border-bottom">End Time</th>
                                {/* <th className="border-bottom">Assigned Staff</th> */}
                                <th className="border-bottom">Action</th>
                            </tr>
                            {appoints.map(a => (
                            <tr key={a.id}>
                                <td>
                                    <Card.Link className="d-flex align-items-center">
                                        <div className="d-block">
                                            <span className="fw-bold">{a.userName}</span>
                                        </div>
                                    </Card.Link>
                                </td>
                                <td><span className="fw-bold">{a.userEmail}</span></td>
                                <td><span className="fw-normal"><div className="small text-gray">{format(new Date(a.bookDate), 'do-MMM-yyyy')}</div></span></td>
                                {/* <td><span className="fw-normal"><div className="small text-gray">{w.service}</div></span></td> */}
                                <td><span className="fw-normal">{format(new Date(a.startTime), 'HH:MM')}</span></td>
                                <td><span className="fw-normal">{format(new Date(a.endTime), 'HH:MM')}</span></td>
                                {/* <td><span className="fw-normal">{w._id}</span></td> */}
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

export default GetWaitlist;