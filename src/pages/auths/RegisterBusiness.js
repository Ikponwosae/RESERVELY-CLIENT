
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faBusinessTime, faCalendarTimes, faEnvelope, faEnvelopeOpenText, faFlag, faHome, faIdCard, faPeopleArrows, faPhone, faSortNumericUp, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link } from 'react-router-dom';

import { Routs } from "../../routs";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { faFirefoxBrowser } from "@fortawesome/free-brands-svg-icons";


export default () => {
  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          {/* <p className="text-center">
            <Card.Link as={Link} to={Routs.HomePage.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p> */}
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Register Your Business</h3>
                </div>
                <Form className="mt-4">
                <Form.Group id="name" className="mb-4">
                    <Form.Label>Business Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faBusinessTime} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" placeholder="Amy Holdings" />
                    </InputGroup>
                  </Form.Group>
                  
                  <Form.Group id="website" className="mb-4">
                    <Form.Label>Website</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faFirefoxBrowser} />
                      </InputGroup.Text>
                      <Form.Control autoFocus type="text" placeholder="www.pins.com.ng" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="regNum" className="mb-4">
                    <Form.Label>Registration Number</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faSortNumericUp} />
                      </InputGroup.Text>
                      <Form.Control autoFocus type="text" placeholder="AB73HFM32" />
                    </InputGroup>
                  </Form.Group>
              <Form.Group className="mb-4" id="hasPhysicalAddress">
              <Form.Label>Has Physical Adress</Form.Label>
              <Form.Select>
                <option default>true</option>
                <option>false</option>
              </Form.Select>
            </Form.Group>
              <Form.Group className="mb-4" id="category">
              <Form.Label>Category</Form.Label>
              <Form.Select>
                <option defaultValue>Open this menu</option>
                <option>Beauty</option>
                <option>Hair</option>
                <option>Shopping</option>
                <option>Food</option>
              </Form.Select>
              </Form.Group>
              <Form.Group id="description" className="mb-4">
                    <Form.Label>Business Description</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" placeholder="We offer these services.." />
                    </InputGroup>
                </Form.Group>
              <Form.Group id="team" className="mb-4">
                    <Form.Label>Team Size</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faPeopleArrows} />
                      </InputGroup.Text>
                      <Form.Control autoFocus type="number" placeholder="10" />
                    </InputGroup>
                </Form.Group>
                <Form.Group id="country" className="mb-4">
                    <Form.Label>Country</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faFlag} />
                      </InputGroup.Text>
                      <Form.Control autoFocus type="text" placeholder="Nigeria" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="open" className="mb-4">
                    <Form.Label>Opening Hour</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faCalendarTimes} />
                      </InputGroup.Text>
                      <Form.Control autoFocus type="text" placeholder="09:00" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="close" className="mb-4">
                    <Form.Label>Closing Hour</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faCalendarTimes} />
                      </InputGroup.Text>
                      <Form.Control autoFocus type="text" placeholder="18:30" />
                    </InputGroup>
                  </Form.Group>
                
                  <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="terms" className="me-2" />
                    <FormCheck.Label htmlFor="terms">
                      I agree to the <Card.Link>terms and conditions</Card.Link>
                    </FormCheck.Label>
                  </FormCheck> 

                  <Button variant="outline-primary" type="submit" className="w-100">
                    Register Business
                  </Button>
                </Form>

                
                {/* <div className="d-flex justify-content-center align-items-center mt-4">
                  <span className="fw-normal">
                    Already have an account?
                    <Card.Link as={Link} to={Routs.Signin.path} className="fw-bold">
                      {` Login here `}
                    </Card.Link>
                  </span>
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};
