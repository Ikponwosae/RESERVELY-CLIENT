import React, { useState, useEffect } from "react";
import { Breadcrumb, Button, ButtonGroup, Row, Col, Dropdown, Modal, Card, Table, Form } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCog, faCheck, faSlidersH } from '@fortawesome/free-solid-svg-icons';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import Sidebar from "components/Sidebar";
import ScrollToTop from "components/ScrollToTop";
import Footer from "components/Footer";
import format from "date-fns/format";
import api from "api/api";
import AuthService from "auth_service";

const { getCurrentToken, getCurrentUser} = AuthService

const GetWaitlist =  () => {
    const [appoints, setAppoints] = useState([])
    const [available, setAvailable] = useState([])
    const [loading, setLoading] = useState(false)
    const [empty, setEmpty] = useState(false)
    const [appId, setAppId] = useState('')
    useEffect(() => {
        setLoading(true)
        const waitlist = async () => {
            try {
                const config = {
                    headers: { 
                      "Content-Type": "application/json",
                      'Authorization': `Bearer ${getCurrentToken()}`
                    },
                  };
                const response = await api.get("/owner/waitlist/", config)
                const {waitlist} = response.data

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
                setLoading(false)
                console.log(appoints)
         })
      })
            } catch (e) {
                setLoading(false)
                console.error(e)
            }
        }
        const getUser = async(userId) => {
            try {
                const response = await api.get(`/auth/user/${getCurrentUser().id}`)
                const { user } = response.data
                return user;
            } catch (error) {
                console.log(error)
            }
        }
        waitlist()
    }, [])

    const availables = async (date, startT, endT) => {
        try {
            const config = {
                headers: { 
                  "Content-Type": "application/json",
                  'Authorization': `Bearer ${getCurrentToken()}`
                },
              };
              const book = format(new Date(date), 'yyyy-MM-dd')
              const start = format(new Date(startT), 'HH:MM')
              const end = format(new Date(endT), 'HH:MM')
              const response = await api.get(`owner/staff/available/${book}?startTime=${start}&endTime=${end}`, config)
              const { availableStaff } = response.data
              if(availableStaff == null) {
                setEmpty(true)
              }
              const results = []
              availableStaff.forEach((s) => {
                results.push({
                    id: s._id,
                    name: (s.firstName + s.lastName)
                })
              })
              setAvailable(results)
        } catch (error) {
            console.log(error)
        }
    }

    const assign = async (id, staffId, book, start, end) => {
        try {
            const config = {
                headers: { 
                  "Content-Type": "application/json",
                  'Authorization': `Bearer ${getCurrentToken()}`
                },
              };
              const body = {
                staffId: staffId,
                bookDate: book,
                startTime: start,
                endTime: end
              }
              await api.patch(`appointment/${id}/approve/`, body, config)
              window.location.reload(true)
        } catch (error) {
            console.log(error)
        }
    }
    
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
            <p className="mb-0 font-large fw-bold">All the appointments booked by your customers waiting for approval.</p>
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
                    {loading ? <>Loading..</> : <>
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
                                <Button bsPrefix="text" variant="info" className="m-3" 
                                onClick={() => {
                                    setShowDefault(true);
                                    availables(a.bookDate, a.startTime, a.endTime);
                                } }>ASSIGN</Button>
                                <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
                                    <Modal.Header>
                                    <Modal.Title className="h6">Assign</Modal.Title>
                                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                                    </Modal.Header>
                                    <Modal.Body>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Availabe Staff</Form.Label>
                                        <Form.Select value={appId} onChange={(e) => setAppId(e.target.value)}>
                                        <option defaultValue>Select a staff to assign(who is free)</option>
                                        {available.map((staff) => <option key={staff.id} value={staff.id}>{staff.name}</option>)}
                                        </Form.Select>
                                    </Form.Group>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={() => {
                                        handleClose()
                                        assign(a.id, appId, a.bookDate, a.startTime, a.endTime)
                                    } }>
                                        ASSIGN & APPROVE
                                    </Button>
                                    <Button variant="link" className="text-gray ms-auto" onClick={handleClose}>
                                        CLOSE
                                    </Button>
                                    </Modal.Footer>
                                </Modal>
                                 | 
                                 <Button bsPrefix="text" variant="danger" className="m-3" disabled={empty} >RESCHEDULE</Button>
                                 
                                </td>
                            </tr>
                        ))}
                            </>}
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