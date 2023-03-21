import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faCartArrowDown, faChartPie, faChevronDown, faClipboard, faCommentDots, faFileAlt, faPlus, faRocket, faStore } from '@fortawesome/free-solid-svg-icons';
import { Col, Row, Button, Dropdown } from '@themesberg/react-bootstrap';
import { ChoosePhotoWidget, ProfileCardWidget } from "../components/Widgets";
import { OwnerInfoForm } from "../components/Forms";
import Sidebar from "components/Sidebar";
import AnimationRevealPage from "helpers/AnimationRevealPage";
import Footer from "components/Footer";
import ScrollToTop from "components/ScrollToTop";
import Profile3 from "../assets/img/team/profile-picture-3.jpg";


export default () => {
  return (
    <>
    <Sidebar />
    <AnimationRevealPage>
    <main className="content">
          <ScrollToTop />
         
      <Row>
        <Col xs={12} xl={8}>
          <OwnerInfoForm />
        </Col>

        <Col xs={12} xl={4}>
          <Row>
            <Col xs={12}>
              <ProfileCardWidget />
            </Col>
            <Col xs={12}>
              <ChoosePhotoWidget
                title="Select profile photo"
                photo={Profile3}
              />
            </Col>
          </Row>
        </Col>
      </Row>
          <Footer />
        </main>
        </AnimationRevealPage>
    </>
      
  );
};
