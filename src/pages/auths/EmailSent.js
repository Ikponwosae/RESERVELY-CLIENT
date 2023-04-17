/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChessBishop } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button, Container } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';
import { Routs } from "../../routs";


export default () => {
  return (
    <main>
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col xs={12} className="text-center d-flex align-items-center justify-content-center">
              <div>
                {/* <Card.Link as={Link} to={Routes.HomePage.path}>
                  <Image src={SentImage} className="img-fluid w-75" />
                </Card.Link> */}
                 <FontAwesomeIcon icon={faChessBishop} className="animate-left-3 me-3 ms-2" />
                <h1 className="text-primary mt-5">
                  Confirmation Email has been <span className="fw-bolder">sent</span>
                </h1>
                <p className="lead my-4">
                  We have sent an email to verify your registration. Check your email and
                  follow the prompts.
            </p>
                <Button as={Link} variant="primary" className="animate-hover" to={Routs.Home.path}>
                  <FontAwesomeIcon icon={faChevronLeft} className="animate-left-3 me-3 ms-2" />
                  Go back home
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
