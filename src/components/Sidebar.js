/* eslint-disable import/no-anonymous-default-export */
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faHandHoldingUsd, faSignOutAlt, faTimes, faUser, faTools, faPeopleArrows, faChartLine, faUserPlus, faCalendarCheck, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link, useNavigate  } from 'react-router-dom';
import Logo from "assets/img/brand/r-logo.jpg"

import { Routs } from "../routs";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";
import { faPlusSquare } from "@fortawesome/free-regular-svg-icons";

export default (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
            <span>
              <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">
              {children}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={Logo} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  const navigate = useNavigate();
  const handleLogout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
};

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={Routs.ShopOwnerDashboard.path}>
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
                </div>
                <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button as={Link} variant="secondary" size="xs" to={Routs.Signin.path} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem title="business name" link={'/'} image={ReactHero} />

              <NavItem title="Dashboard" link={Routs.ShopOwnerDashboard.path} icon={faChartLine} />
              
              <CollapsableNavItem eventKey="staffs/" title="Staffs" icon={faPeopleArrows}>
                <NavItem title="Staffs" link={Routs.Staff.path} icon={faUser} />
                <NavItem title="Invite Staff" link={Routs.InviteStaff.path} icon={faUserPlus} />
              </CollapsableNavItem>
              
              <CollapsableNavItem eventKey="services/" title="Services" icon={faTools}>
                <NavItem title="Services" icon={faHandHoldingUsd} link={Routs.Services.path} />
                <NavItem title="Add a Service" icon={faPlusSquare} link={Routs.AddService.path} />
              </CollapsableNavItem>
              
              <CollapsableNavItem eventKey="appointments/" title="Appointments" icon={faCalendarCheck}>
                <NavItem title="Waitlist" icon={faUserTimes} link={Routs.WaitList.path} />
                <NavItem title="Calendar" icon={faUserTimes} link={Routs.Calendar.path} />
              </CollapsableNavItem>

              <Dropdown.Divider className="my-3 border-indigo" />
              {/* <NavItem title="Logout" icon={faSignOutAlt} link={Routs.Services.path} /> */}

              <Button as={Link} to={Routs.Signin.path} bsPrefix="text" variant="outline-tertiary" onClick={handleLogout} ><FontAwesomeIcon icon={faSignOutAlt} className="me-1" /> Logout</Button>
              
              <Button as={Link} to={"/owner/settings"} variant="secondary" className="upgrade-to-pro"><FontAwesomeIcon icon={faCog} className="me-1" /> Settings</Button>
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
