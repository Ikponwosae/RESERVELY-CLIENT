
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCog, faFileAlt, faHandHoldingUsd, faSignOutAlt, faTimes, faUser, faTools, faPeopleArrows, faChartLine, faUserPlus, faCalendarCheck, faUserTimes } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
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

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={Routs.DashboardOverview.path}>
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
              <NavItem title="" link={Routs.Presentation.path} image={ReactHero} />

              <NavItem title="Dashboard" link={Routs.DashboardOverview.path} icon={faChartLine} />
              
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
                <NavItem title="Calendar" icon={faUserTimes} link={Routs.Calendar.path} badgeText="WIP" />
              </CollapsableNavItem>

              {/* <NavItem external title="Calendar" link="https://demo.themesberg.com/volt-pro-react/#/calendar" target="_blank" badgeText="WIP" icon={faCalendarAlt} />
              <NavItem external title="Map" link="https://demo.themesberg.com/volt-pro-react/#/map" target="_blank" badgeText="Pro" icon={faMapPin} /> */}

              {/* <CollapsableNavItem eventKey="tables/" title="Tables" icon={faTable}>
                <NavItem title="Bootstrap Table" link={Routs.BootstrapTables.path} />
              </CollapsableNavItem> */}

              <CollapsableNavItem eventKey="examples/" title="Page Examples" icon={faFileAlt}>
                <NavItem title="Sign In" link={Routs.Signin.path} />
                <NavItem title="Sign Up" link={Routs.Signup.path} />
                <NavItem title="Forgot password" link={Routs.ForgotPassword.path} />
                <NavItem title="Reset password" link={Routs.ResetPassword.path} />
                <NavItem title="Lock" link={Routs.Lock.path} />
                <NavItem title="404 Not Found" link={Routs.NotFound.path} />
                <NavItem title="500 Server Error" link={Routs.ServerError.path} />
              </CollapsableNavItem>


              <Dropdown.Divider className="my-3 border-indigo" />

           
              <CollapsableNavItem eventKey="components/" title="Components" icon={faBoxOpen}>
                <NavItem title="Accordion" link={Routs.Accordions.path} />
                <NavItem title="Alerts" link={Routs.Alerts.path} />
                <NavItem title="Badges" link={Routs.Badges.path} />
                <NavItem title="Breadcrumbs" link={Routs.Breadcrumbs.path} />
                <NavItem title="Buttons" link={Routs.Buttons.path} />
                <NavItem title="Forms" link={Routs.Forms.path} />
                <NavItem title="Modals" link={Routs.Modals.path} />
                <NavItem title="Navbars" link={Routs.Navbars.path} />
                <NavItem title="Navs" link={Routs.Navs.path} />
                <NavItem title="Pagination" link={Routs.Pagination.path} />
                <NavItem title="Popovers" link={Routs.Popovers.path} />
                <NavItem title="Progress" link={Routs.Progress.path} />
                <NavItem title="Tables" link={Routs.Tables.path} />
                <NavItem title="Tabs" link={Routs.Tabs.path} />
                <NavItem title="Toasts" link={Routs.Toasts.path} />
                <NavItem title="Tooltips" link={Routs.Tooltips.path} />
              </CollapsableNavItem>
              
              <Button as={Link} to={Routs.Settings.path} variant="secondary" className="upgrade-to-pro"><FontAwesomeIcon icon={faCog} className="me-1" /> Settings</Button>
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};
