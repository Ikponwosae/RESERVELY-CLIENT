import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  Button,
  Modal,
  Card,
  Table,
} from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPlus, faPause } from "@fortawesome/free-solid-svg-icons";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Routs } from "routs";
import { Link } from "react-router-dom";
import Sidebar from "components/Sidebar";
import ScrollToTop from "components/ScrollToTop";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { format } from "date-fns";
import api from "api/api";
import AuthService from "auth_service";

export const baseUrl = "https://reservely-api-production.up.railway.app";

const GetStaff = () => {
  const [staffs, setStaffs] = useState([]);
  const [loading, setLoading] = useState(false)
  const { getCurrentToken } = AuthService;
  useEffect(() => {
    setLoading(true)
    const getStaff = async () => {
      try {
        const response = await api.get(`/owner/dashboard`, {
          headers: {
            Authorization: `Bearer ${getCurrentToken()}`,
          },
        });

        const { staff } = response.data;
        setStaffs(staff);
        setLoading(false)
      } catch (e) {
        setLoading(false)
        console.error(e);
      }
    };
    getStaff();
  }, [getCurrentToken]);

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
                <Breadcrumb.Item active>Staff List</Breadcrumb.Item>
              </Breadcrumb>
              <h4>Staffs List</h4>
              <p className="mb-0">All your staff and their Details.</p>
            </div>
            <div className="btn-toolbar mb-2 mb-md-0">
              <Button variant="outline-primary" size="sm">
                <FontAwesomeIcon icon={faPlus} className="me-2" /> Invite Staff
              </Button>
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
                    <th className="border-bottom">First Name</th>
                    <th className="border-bottom">Last Name</th>
                    <th className="border-bottom">Email</th>
                    <th className="border-bottom">Status</th>
                    <th className="border-bottom">Registration Date</th>
                    <th className="border-bottom">Action</th>
                  </tr>
                  {loading ? <>Loading..</> : <>
                  {staffs.map((s) => (
                    <tr key={s._id}>
                      <td>
                        <Card.Link
                          as={Link}
                          to={Routs.Lock.path}
                          className="d-flex align-items-center"
                        >
                          <div className="d-block">
                            <span className="fw-bold">{s.firstName}</span>
                          </div>
                        </Card.Link>
                      </td>
                      <td>
                        <span className="fw-bold">{s.lastName}</span>
                      </td>
                      <td>
                        <span className="fw-normal">
                          <div className="small text-gray">{s.email}</div>
                        </span>
                      </td>
                      <td>
                        <span className="fw-normal">
                          <div className="small text-gray">{s.status}</div>
                        </span>
                      </td>
                      <td>
                        <span className="fw-normal">
                          {format(new Date(s.createdAt), "do-MMM-yyyy")}
                        </span>
                      </td>
                      <td>
                        <Button
                          variant="warning"
                          size="xs"
                          className="text-dark"
                          onClick={() => setShowDefault(true)}
                        >
                          <FontAwesomeIcon icon={faPause} className="me-2" />{" "}
                          SUSPEND
                        </Button>
                        <Modal
                          as={Modal.Dialog}
                          centered
                          show={showDefault}
                          onHide={handleClose}
                        >
                          <Modal.Header>
                            <Modal.Title className="h6">
                              Terms of Suspension
                            </Modal.Title>
                            <Button
                              variant="close"
                              aria-label="Close"
                              onClick={handleClose}
                            />
                          </Modal.Header>
                          <Modal.Body>
                            <p>
                              You are about to suspend this user. Pending their
                              suspension, they will not be able to login to the
                              dashboard and you will not be able to assign them
                              to appointments
                            </p>
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              I Understand, Continue
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

export default GetStaff;
