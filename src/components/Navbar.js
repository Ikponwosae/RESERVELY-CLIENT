/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCog, faSignOutAlt, faUserCircle} from "@fortawesome/free-solid-svg-icons";
import { Nav,Navbar,Dropdown,Container } from "@themesberg/react-bootstrap";
import NOTIFICATIONS_DATA from "../data/notifications";
import AuthService from "auth_service";
import { useNavigate } from "react-router-dom/dist";
const { getCurrentUser } = AuthService;

export default (props) => {
  const [notifications, setNotifications] = useState(NOTIFICATIONS_DATA);
  const areNotificationsRead = notifications.reduce(
    (acc, notif) => acc && notif.read,
    true
    );
    
    const navigate = useNavigate();

  const markNotificationsAsRead = () => {
    setTimeout(() => {
      setNotifications(notifications.map((n) => ({ ...n, read: true })));
    }, 300);
  };

  const handleLogout = async () => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      navigate("/login");
  };

  const name = getCurrentUser().firstName;

  return (
    <Navbar variant="dark" expanded className="ps-0 pe-2 pb-0">
      <Container fluid className="px-0">
        <div className="d-flex justify-content-between w-100">
          <div className="d-flex align-items-center">
            <span className="mb-0 font-large fw-bold">
              {`Hello, ${name}`}
            </span>
          </div>
          <Nav className="align-items-center">
            <Dropdown as={Nav.Item}>
              <Dropdown.Toggle as={Nav.Link} className="pt-1 px-0">
                <div className="media d-flex align-items-center">
                  <div className="media-body ms-2 text-dark align-items-center d-none d-lg-block">
                    <FontAwesomeIcon icon={faUserCircle} /> 
                    <span className="mb-0 font-large fw-bold">
                    </span>
                  </div>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="user-dropdown dropdown-menu-right mt-2">
                {/* <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faUserCircle} className="me-2" /> My
                  Profile
                </Dropdown.Item>
                <Dropdown.Item className="fw-bold">
                  <FontAwesomeIcon icon={faCog} className="me-2" /> Settings
                </Dropdown.Item>
                <Dropdown.Divider /> */}
                  <Dropdown.Item className="fw-bold" as={Nav.Link}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="text-danger me-2"/>
                    <Nav.Link href="/login" onClick={handleLogout}>
                      {/* <button onClick={handleLogout}> */}
                      {"Logout"}
                      {/* </button> */}
                      </Nav.Link>
                  </Dropdown.Item>
                
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </div>
      </Container>
    </Navbar>
  );
};
