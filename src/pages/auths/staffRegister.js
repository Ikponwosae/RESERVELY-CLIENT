
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faHome, faIdCard, faPhone, faUnlockAlt } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Form, Card, Button, Container, InputGroup } from '@themesberg/react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import api from "api/api";
import { Routs } from "../../routs";
import BgImage from "../../assets/img/illustrations/signin.svg";
import AuthService from "auth_service";

const { getCurrentUser, setWithExpiry } = AuthService;

// inital login credentials
const initialValues = {
  firstName: '',
  lastName: '',
  password: '',
  phoneNumber: '',
  address: '',
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, 'Password must be 6 character length')
    .required('Password is required!'),
});

const JwtStaffRegister = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const token = (window.location.href).split("/")[4];
  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
        params: {token: token}
      };
      const body = values;
      await api.post(`/auth/staff-verify/${token}`, body, config);
      navigate('/login');
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
          <p className="text-center">
            <Card.Link as={Link} to={Routs.Home.path} className="text-gray-700">
              <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back to homepage
            </Card.Link>
          </p>
          <Row className="justify-content-center form-bg-image" style={{ backgroundImage: `url(${BgImage})` }}>
            <Col xs={12} className="d-flex align-items-center justify-content-center">
            <div className="mb-4 mb-lg-0 bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                <div className="text-center text-md-center mb-4 mt-md-0">
                  <h3 className="mb-0">Create an account</h3>
                </div>
                <Formik
                onSubmit={handleFormSubmit}
                initialValues={initialValues}
                validationSchema={validationSchema}
                >
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit }) => (
                <Form className="mt-4" onSubmit={handleSubmit}>
                <Form.Group id="firstName" className="mb-4">
                    <Form.Label>First Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faIdCard} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" 
                      name="firstName"
                      onBlur={handleBlur}
                      value={values.firstName}
                      onChange={handleChange}
                      helperText={touched.firstName && errors.firstName}
                      error={Boolean(errors.firstName && touched.firstName)}
                      placeholder="Jane" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="lastName" className="mb-4">
                    <Form.Label>Last Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faIdCard} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" 
                      name="lastName"
                      onBlur={handleBlur}
                      value={values.lastName}
                      onChange={handleChange}
                      helperText={touched.lastName && errors.lastName}
                      error={Boolean(errors.lastName && touched.lastName)}
                      placeholder="Doe" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="address" className="mb-4">
                    <Form.Label>Your Address</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faHome} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" 
                      name="address"
                      onBlur={handleBlur}
                      value={values.address}
                      onChange={handleChange}
                      helperText={touched.address && errors.address}
                      error={Boolean(errors.address && touched.address)}
                      placeholder="No 2 Lagos, Nigeria" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="phoneNumber" className="mb-4">
                    <Form.Label>Your Mobile Number</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faPhone} />
                      </InputGroup.Text>
                      <Form.Control autoFocus required type="text" 
                      name="phoneNumber"
                      onBlur={handleBlur}
                      value={values.phoneNumber}
                      onChange={handleChange}
                      helperText={touched.phoneNumber && errors.phoneNumber}
                      error={Boolean(errors.phoneNumber && touched.phoneNumber)}
                      placeholder="+234 9924859302" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="password" className="mb-4">
                    <Form.Label>Your Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" 
                      name="password"
                      onBlur={handleBlur}
                      value={values.password}
                      onChange={handleChange}
                      helperText={touched.password && errors.password}
                      error={Boolean(errors.password && touched.password)}
                      placeholder="Password" />
                    </InputGroup>
                  </Form.Group>
                  <Form.Group id="confirmPassword" className="mb-4">
                    <Form.Label>Confirm Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FontAwesomeIcon icon={faUnlockAlt} />
                      </InputGroup.Text>
                      <Form.Control required type="password" placeholder="Confirm Password" />
                    </InputGroup>
                  </Form.Group>

                  <Button variant="outline-primary" type="submit" className="w-100">
                    {loading ? <>Completing Registration..</> : <>Complete Registration</>}
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

export default JwtStaffRegister;