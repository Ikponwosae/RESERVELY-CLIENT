import React, { useState, useEffect } from "react";
import { Breadcrumb, Button, Modal, Card, Table } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faTools } from '@fortawesome/free-solid-svg-icons';
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import Sidebar from "components/Sidebar";
import ScrollToTop from "components/ScrollToTop";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Link } from 'react-router-dom';
import { Routs } from "routs";
import axios from "axios";
import { baseUrl } from "./staff";
import jwtDecode from "jwt-decode";
import format from "date-fns/format";


const token = localStorage.getItem('token')
const decodedToken = jwtDecode(token)
const business = decodedToken.business

const GetServices =  () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        const getService = async () => {
            try {
                const response = await axios.get(`${baseUrl}/business/${business}/services`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    } 
                })
    
                const {services} = response.data
                setServices(services)
            } catch (e) {
                console.error(e)
            }
        }
        getService()

    }, [])

    const deleteService = async (serviceId) => {
        try {
            await axios.delete(`${baseUrl}/owner/service/${serviceId}`, {
                headers: {
                    'Authorization': `Bearer ${token}`
                } 
            })
            
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
            <p className="mb-0">All the services you offer to your customers</p>
            </div>
            <div className="btn-toolbar mb-2 mb-md-0">
            <Card.Link as={Link} to={Routs.AddService.path} className="fw-bold">
                <Button variant="outline-tertiary" size="sm">
                <FontAwesomeIcon icon={faTools} className="me-2" /> Add a service
                </Button>
            </Card.Link>
            
            {/* <ButtonGroup className="ms-3">
                <Button variant="outline-tertiary" size="sm">Share</Button>
                <Button variant="outline-warning" size="sm">Export</Button>
            </ButtonGroup> */}
            </div>
            </div>

            {/* <div className="table-settings mb-4">
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
</div> */}

            <Card border="light" className="table-wrapper table-responsive shadow-sm">
                <Card.Body>
                    <Table hover className="user-table align-items-center">
                        <thead>
                            <tr>
                                <th className="border-bottom">Name</th>
                                <th className="border-bottom">Duration</th>
                                <th className="border-bottom">Price</th>
                                <th className="border-bottom">Description</th>
                                <th className="border-bottom">Date Created</th>
                                <th className="border-bottom">Date Edited</th>
                                <th className="border-bottom">  </th>
                            </tr>
                            {services.map(s => (
                            <tr key={s._id}>
                                <td>
                                    <Card.Link className="d-flex align-items-center">
                                        <div className="d-block">
                                            <span className="fw-bold">{s.name}</span>
                                        </div>
                                    </Card.Link>
                                </td>
                                <td><span className="fw-bold">{s.duration} mins</span></td>
                                <td><span className="fw-normal">${s.price}</span></td>
                                <td style={{wordBreak: "break-word", whiteSpace: "unset"}}><span className="fw-normal">{s.description}</span></td>
                                <td><span className="fw-normal">{format(new Date(s.createdAt), 'do-MMM-yyyy')}</span></td>
                                <td><span className="fw-normal">{format(new Date(s.updatedAt), 'do-MMM-yyyy')}</span></td>
                                <td>
                                <Card.Link as={Link} to={`edit/${s._id}`} className="fw-bold">
                                    <Button bsPrefix="text" variant="info" className="m-3">EDIT</Button>
                                </Card.Link>
                                 | 
                                 <Button bsPrefix="text" href="#info" variant="danger" className="m-3" onClick={() => {setShowDefault(true); }}>DELETE </Button>
                                 <Modal as={Modal.Dialog} centered show={showDefault} onHide={handleClose}>
                                    <Modal.Header>
                                    <Modal.Title className="h6">Terms to Delete</Modal.Title>
                                    <Button variant="close" aria-label="Close" onClick={handleClose} />
                                    </Modal.Header>
                                    <Modal.Body>
                                    <p>You are about to Delete this service. Your customers would no longer be able to see this as an option for your business.</p>
                                    </Modal.Body>
                                    <Modal.Footer>
                                    <Button variant="secondary" onClick={() => {handleClose(); deleteService(s._id)} }>
                                        I Understand, Delete
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

export default GetServices;