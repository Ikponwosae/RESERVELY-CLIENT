import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  Button,
  Modal,
  Card,
  Table,
} from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faTools } from "@fortawesome/free-solid-svg-icons";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Sidebar from "components/Sidebar";
import ScrollToTop from "components/ScrollToTop";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Link } from "react-router-dom";
import { Routs } from "routs";
import format from "date-fns/format";
import api from "api/api";
import AuthService from "auth_service";


const GetServices = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false)
  const { getCurrentToken, getCurrentUser} = AuthService
  useEffect(() => {
    setLoading(true)
    const getService = async () => {
      try {
        const response = await api.get(`/business/${getCurrentUser().business}/services`,
          {
            headers: {
              Authorization: `Bearer ${getCurrentToken()}`,
            },
          }
        );

        const { services } = response.data;
        setServices(services);
        setLoading(false)
      } catch (e) {
        setLoading(false)
        console.error(e);
      }
    };
    getService();
  }, [getCurrentToken, getCurrentUser]);

  const deleteService = async (serviceId) => {
    try {
      await api.delete(`/owner/service/${serviceId}`, {
        headers: {
          Authorization: `Bearer ${getCurrentToken()}`,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const [showDefault, setShowDefault] = useState(false);
  const handleClose = () => setShowDefault(false);
  return (
    <>
      <Sidebar />
      <AnimationRevealPage>
        <main className="content">
          <Navbar />
          <ScrollToTop />
          <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="mb-4 mb-lg-0">
              <Breadcrumb
                className="d-none d-md-inline-block"
                listProps={{
                  className: "breadcrumb-dark breadcrumb-transparent",
                }}
              >
                <Breadcrumb.Item>
                  <FontAwesomeIcon icon={faHome} />
                </Breadcrumb.Item>
                <Breadcrumb.Item>Reservely</Breadcrumb.Item>
                <Breadcrumb.Item active>Services</Breadcrumb.Item>
              </Breadcrumb>
              <h4>YOUR SERVICES</h4>
              <p className="mb-0 font-large fw-bold">
                All the services you offer to your customers
              </p>
            </div>
            <div className="btn-toolbar mb-2 mb-md-0">
              <Card.Link
                as={Link}
                to={Routs.AddService.path}
                className="fw-bold"
              >
                <Button variant="outline-tertiary" size="sm">
                  <FontAwesomeIcon icon={faTools} className="me-2" /> Add a
                  service
                </Button>
              </Card.Link>

              {/* <ButtonGroup className="ms-3">
                <Button variant="outline-tertiary" size="sm">Share</Button>
                <Button variant="outline-warning" size="sm">Export</Button>
            </ButtonGroup> */}
            </div>
          </div>

          <Card
            border="light"
            className="table-wrapper table-responsive shadow-sm"
          >
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
                    <th className="border-bottom"> </th>
                  </tr>
                  {loading ? <>Loading..</> : <>
                  {services.map((s) => (
                    <tr key={s._id}>
                      <td>
                        <Card.Link className="d-flex align-items-center">
                          <div className="d-block">
                            <span className="fw-bold">{s.name}</span>
                          </div>
                        </Card.Link>
                      </td>
                      <td>
                        <span className="fw-bold">{s.duration} mins</span>
                      </td>
                      <td>
                        <span className="fw-normal">${s.price}</span>
                      </td>
                      <td
                        style={{ wordBreak: "break-word", whiteSpace: "unset" }}
                      >
                        <span className="fw-normal">{s.description}</span>
                      </td>
                      <td>
                        <span className="fw-normal">
                          {format(new Date(s.createdAt), "do-MMM-yyyy")}
                        </span>
                      </td>
                      <td>
                        <span className="fw-normal">
                          {format(new Date(s.updatedAt), "do-MMM-yyyy")}
                        </span>
                      </td>
                      <td>
                        <Card.Link
                          as={Link}
                          to={`edit/${s._id}`}
                          className="fw-bold"
                        >
                          <Button
                            bsPrefix="text"
                            variant="info"
                            className="m-3"
                          >
                            EDIT
                          </Button>
                        </Card.Link>
                        |
                        <Button
                          bsPrefix="text"
                          href="#info"
                          variant="danger"
                          className="m-3"
                          onClick={() => {
                            setShowDefault(true);
                          }}
                        >
                          DELETE{" "}
                        </Button>
                        <Modal
                          as={Modal.Dialog}
                          centered
                          show={showDefault}
                          onHide={handleClose}
                        >
                          <Modal.Header>
                            <Modal.Title className="h6">
                              Terms to Delete
                            </Modal.Title>
                            <Button
                              variant="close"
                              aria-label="Close"
                              onClick={handleClose}
                            />
                          </Modal.Header>
                          <Modal.Body>
                            <p>
                              You are about to Delete this service. Your
                              customers would no longer be able to see this as
                              an option for your business.
                            </p>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button
                              variant="secondary"
                              onClick={() => {
                                handleClose();
                                deleteService(s._id);
                              }}
                            >
                              I Understand, Delete
                            </Button>
                            <Button
                              variant="link"
                              className="text-gray ms-auto"
                              onClick={handleClose}
                            >
                              Close
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </td>
                    </tr>
                  ))}
                    </>}
                </thead>
                <tbody></tbody>
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
