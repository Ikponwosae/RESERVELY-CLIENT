import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faEnvelope,
  faUnlockAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  Col,
  Row,
  Form,
  Card,
  Button,
  FormCheck,
  Container,
  InputGroup,
} from "@themesberg/react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { Formik } from "formik";
import { Routs } from "../../routs";
import BgImage from "../../assets/img/illustrations/signin.svg";
import * as Yup from "yup";
import api from "api/api";
import AuthService from "auth_service";
import { Navigate } from "react-router-dom/dist";

const { getCurrentUser, setWithExpiry } = AuthService;

// inital login credentials
const initialValues = {
  email: " ",
  password: "",
};

// form field validation schema
const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(6, "Password must be 6 character length")
    .required("Password is required!"),
  email: Yup.string()
    .email("Invalid Email address")
    .required("Email is required!"),
});

const JwtLogin = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleFormSubmit = async (values) => {
    setLoading(true);
    try {
      const config = {
        headers: { "Content-Type": "application/json" },
      };
      const body = values;
      const res = await api.post("/auth/login/", body, config);
      setWithExpiry("token", res.data.token);
      setWithExpiry("user", res.data.user);

      if (res.data.user.role === "staff") {
        navigate(Routs.StaffDashboard.path);
      } else if (res.data.user.role === "shop-owner") {
        navigate(Routs.ShopOwnerDashboard.path);
      } else {
        navigate(Routs.UserDashboard.path);
      }
    } catch (err) {
      if (!err.response) {
        setLoading(false);
      } else if (err.response) {
        setLoading(false);
      } else if (err.request) {
        setLoading(false);
      } else {
        setLoading(false);
      }
    }
  };

  return (
    <>
      {/* {getCurrentUser().role === "shop-owner" ? (
        <Navigate to={Routs.ShopOwnerDashboard.path} replace />
      ) : getCurrentUser().role === "staff" ? (
        <Navigate to={Routs.StaffDashboard.path} replace />
      ) : getCurrentUser().role === "user" ? (
        <Navigate to={Routs.UserDashboard.path} replace />
      ) : ( */}
        <main>
          <section className="d-flex align-items-center my-5 mt-lg-6 mb-lg-5">
            <Container>
              <p className="text-center">
                <Card.Link
                  as={Link}
                  to={Routs.Home.path}
                  className="text-gray-700"
                >
                  <FontAwesomeIcon icon={faAngleLeft} className="me-2" /> Back
                  to homepage
                </Card.Link>
              </p>
              <Row
                className="justify-content-center form-bg-image"
                style={{ backgroundImage: `url(${BgImage})` }}
              >
                <Col
                  xs={12}
                  className="d-flex align-items-center justify-content-center"
                >
                  <div className="bg-white shadow-soft border rounded border-light p-4 p-lg-5 w-100 fmxw-500">
                    <div className="text-center text-md-center mb-4 mt-md-0">
                      <h3 className="mb-0">Sign in to our platform</h3>
                    </div>
                    <Formik
                      onSubmit={handleFormSubmit}
                      initialValues={initialValues}
                      validationSchema={validationSchema}
                    >
                      {({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                      }) => (
                        <Form className="mt-4" onSubmit={handleSubmit}>
                          <Form.Group id="email" className="mb-4">
                            <Form.Label>Your Email</Form.Label>
                            <InputGroup>
                              <InputGroup.Text>
                                <FontAwesomeIcon icon={faEnvelope} />
                              </InputGroup.Text>
                              <Form.Control
                                autoFocus
                                required
                                name="email"
                                onBlur={handleBlur}
                                value={values.email}
                                onChange={handleChange}
                                helperText={touched.email && errors.email}
                                error={Boolean(errors.email && touched.email)}
                                type="email"
                                placeholder="example@company.com"
                              />
                            </InputGroup>
                          </Form.Group>
                          <Form.Group>
                            <Form.Group id="password" className="mb-4">
                              <Form.Label>Your Password</Form.Label>
                              <InputGroup>
                                <InputGroup.Text>
                                  <FontAwesomeIcon icon={faUnlockAlt} />
                                </InputGroup.Text>
                                <Form.Control
                                  required
                                  name="password"
                                  onBlur={handleBlur}
                                  value={values.password}
                                  onChange={handleChange}
                                  helperText={
                                    touched.password && errors.password
                                  }
                                  error={Boolean(
                                    errors.password && touched.password
                                  )}
                                  type="password"
                                  placeholder="Password"
                                />
                              </InputGroup>
                            </Form.Group>
                            <div className="d-flex justify-content-between align-items-center mb-4">
                              <Form.Check type="checkbox">
                                <FormCheck.Input
                                  id="defaultCheck5"
                                  className="me-2"
                                />
                                <FormCheck.Label
                                  htmlFor="defaultCheck5"
                                  className="mb-0"
                                >
                                  Remember me
                                </FormCheck.Label>
                              </Form.Check>
                              <Card.Link
                                as={Link}
                                to={Routs.ForgotPassword.path}
                                className="fw-bold"
                              >
                                {` Forgot Password `}
                              </Card.Link>
                            </div>
                          </Form.Group>
                          {/* <Card.Link as={Link} to={Routs.DashboardOverview.path} className="fw-bold"> */}
                          <Button
                            variant="outline-primary"
                            type="submit"
                            className="w-100"
                          >
                            {loading ? <>Signing in..</> : <>Sign in</>}
                          </Button>
                          {/* </Card.Link> */}
                        </Form>
                      )}
                    </Formik>

                    <div className="d-flex justify-content-center align-items-center mt-4">
                      <span className="fw-normal">
                        Not registered?
                        <Card.Link
                          as={Link}
                          to={Routs.Signup.path}
                          className="fw-bold"
                        >
                          {` Create account `}
                        </Card.Link>
                      </span>
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </main>
      {/* )} */}
    </>
  );
};

export default JwtLogin;
