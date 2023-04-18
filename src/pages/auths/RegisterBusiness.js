import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime, faCalendarTimes, faEnvelopeOpenText, faFlag, faPeopleArrows, faSortNumericUp } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, FormCheck, Container, InputGroup } from '@themesberg/react-bootstrap';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { Routs } from "../../routs";
import api from "api/api";
import AuthService from "auth_service";
import BgImage from "../../assets/img/illustrations/signin.svg";
import { faFirefoxBrowser } from "@fortawesome/free-brands-svg-icons";


//initial credentials
const initialValues = {
  name: '',
  hasPhysicalAddress: '',
  category: '',
  description: '',
  website: '',
  regNumber: '',
  country: '',
  openHour: '',
  closeHour: '',
  teamSize: ''
};

//form field validations
const validationSchema = Yup.object().shape({
  name: Yup.string()
  .required('Business name is required!'),
  hasPhysicalAddress: Yup.string()
  .required('Field is required!'),
  openHour: Yup.string()
  .required('Opening Hour is required!'),
  closeHour: Yup.string()
  .required('Closing hour is required!'),
});

const BusinessReg = () => {
  const { getCurrentUser} = AuthService
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  console.log(loading)
  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      const config = {
        headers: { 
          "Content-Type": "application/json"}
      };
      const body = values;
      await api.post(`/auth/register/business/${getCurrentUser().id}`, body, config);
      navigate(Routs.Signin.path);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
        <Container>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
              <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Register Your Business</h3>
                </div>
              <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={validationSchema}
              >  
              {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <Form className="mt-4" onSubmit={handleSubmit}>
                <Form.Group id="name" className="mb-4">
                    <Form.Label>Business Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faBusinessTime} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text"
                      name="name"
                      onBlur={handleBlur}
                      value={values.name}
                      onChange={handleChange}
                      helperText={touched.name && errors.name}
                      error={Boolean(errors.name && touched.name)}
                      placeholder="Amy Holdings" />
                    </InputGroup>
                  </Form.Group>
                  
                  <Form.Group id="website" className="mb-4">
                    <Form.Label>Website</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faFirefoxBrowser} />
                      </InputGroup.Text>
                      <Form.Control autoFocus type="text"
                      name="website"
                      onBlur={handleBlur}
                      value={values.website}
                      onChange={handleChange}
                      helperText={touched.website && errors.website}
                      error={Boolean(errors.website && touched.website)}
                      placeholder="www.pins.com.ng" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="regNumber" className="mb-4">
                    <Form.Label>Registration Number</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faSortNumericUp} />
                      </InputGroup.Text>
                      <Form.Control autoFocus type="text"
                      name="regNumber"
                      onBlur={handleBlur}
                      value={values.regNumber}
                      onChange={handleChange}
                      helperText={touched.regNumber && errors.regNumber}
                      error={Boolean(errors.regNumber && touched.regNumber)}
                      placeholder="AB73HFM32" />
                    </InputGroup>
                  </Form.Group>
              <Form.Group className="mb-4" id="hasPhysicalAddress">
              <Form.Label>Has Physical Adress</Form.Label>
              <Form.Select
              name="hasPhysicalAddress"
              onBlur={handleBlur}
              value={values.hasPhysicalAddress}
              onChange={handleChange}
              helperText={touched.hasPhysicalAddress && errors.hasPhysicalAddress}
              error={Boolean(errors.hasPhysicalAddress && touched.hasPhysicalAddress)}>
                <option defaultValue value="true">true</option>
                <option value="false">false</option>
              </Form.Select>
            </Form.Group>
              <Form.Group className="mb-4" id="category">
              <Form.Label>Category</Form.Label>
              <Form.Select
              name="category"
              onBlur={handleBlur}
              value={values.category}
              onChange={handleChange}
              helperText={touched.category && errors.category}
              error={Boolean(errors.category && touched.category)}>
                <option defaultValue>Open this menu</option>
                <option value="beauty">Beauty</option>
                <option value="hair">Hair</option>
                <option value="luxury">Luxury</option>
                <option value="aroma-therapy">Aroma-Therapy</option>
                <option value="food">Food</option>
              </Form.Select>
              </Form.Group>
              <Form.Group id="description" className="mb-4">
                    <Form.Label>Business Description</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faEnvelopeOpenText} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text"
                      name="description"
                      onBlur={handleBlur}
                      value={values.description}
                      onChange={handleChange}
                      helperText={touched.description && errors.description}
                      error={Boolean(errors.description && touched.description)}
                      placeholder="We offer these services.." />
                    </InputGroup>
                </Form.Group>
              <Form.Group id="teamSize" className="mb-4">
                    <Form.Label>Team Size</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faPeopleArrows} />
                      </InputGroup.Text>
                      <Form.Control autoFocus type="number"
                      name="teamSize"
                      onBlur={handleBlur}
                      value={values.teamSize}
                      onChange={handleChange}
                      helperText={touched.teamSize && errors.teamSize}
                      error={Boolean(errors.teamSize && touched.teamSize)}
                      placeholder="10" />
                    </InputGroup>
                </Form.Group>
                <Form.Group id="country" className="mb-4">
                    <Form.Label>Country</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faFlag} />
                      </InputGroup.Text>
                      <Form.Control autoFocus type="text"
                      name="country"
                      onBlur={handleBlur}
                      value={values.country}
                      onChange={handleChange}
                      helperText={touched.country && errors.country}
                      error={Boolean(errors.country && touched.country)}
                      placeholder="Nigeria" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="openHour" className="mb-4">
                    <Form.Label>Opening Hour</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faCalendarTimes} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text"
                      name="openHour"
                      onBlur={handleBlur}
                      value={values.openHour}
                      onChange={handleChange}
                      helperText={touched.openHour && errors.openHour}
                      error={Boolean(errors.openHour && touched.openHour)}
                      placeholder="09:00" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="closeHour" className="mb-4">
                    <Form.Label>Closing Hour</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faCalendarTimes} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text"
                      name="closeHour"
                      onBlur={handleBlur}
                      value={values.closeHour}
                      onChange={handleChange}
                      helperText={touched.closeHour && errors.closeHour}
                      error={Boolean(errors.closeHour && touched.closeHour)}
                      placeholder="18:30" />
                    </InputGroup>
                  </Form.Group>
                
                  <FormCheck type="checkbox" className="d-flex mb-4">
                    <FormCheck.Input required id="terms" className="me-2" />
                    <FormCheck.Label htmlFor="terms">
                      I agree to the <Card.Link>terms and conditions</Card.Link>
                    </FormCheck.Label>
                  </FormCheck> 

                  <Button variant="outline-primary" type="submit" className="w-100">
                  {loading ? <>Registering..</> : <>Register Business</>}
                  </Button>
                </Form>
              )}
                </Formik>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default BusinessReg;