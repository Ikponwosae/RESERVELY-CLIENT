import React, { useState, useEffect } from "react";
import {
  Breadcrumb,
  Button,
  Row,
  Col,
  InputGroup,
  Form,
} from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Sidebar from "components/Sidebar";
import ScrollToTop from "components/ScrollToTop";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import { Formik } from "formik";
import * as Yup from "yup";
import { useLocation, useNavigate } from "react-router-dom";
import api from "api/api";
import AuthService from "auth_service";
import { Routs } from "routs";

const validationSchema = Yup.object().shape({
  name: Yup.string(),
  price: Yup.string(),
  description: Yup.string(),
});

const EditService = () => {
  const { pathname } = useLocation();
  const servideId = pathname.split("/")[4];
  const [service, setService] = useState([]);
  const { getCurrentToken, getCurrentUser} = AuthService
  useEffect(() => {
    const getService = async () => {
      try {
        const data = await api.get(
          `/business/${getCurrentUser().business}/services/${servideId}`,
          {
            headers: {
              'Authorization': `Bearer ${getCurrentToken()}`,
            }
          }
        );
        const { service } = data.data;
        setService(service);
      } catch (error) {
        console.log(error);
      }
    };

    getService();
  }, [getCurrentToken, getCurrentUser, servideId]);

  const initialValues = {
    name: service.name,
    duration: service.duration,
    price: service.price,
    description: service.description,
  };

  const edit = async (name, duration, price, description) => {
    try {
      await api.patch(
        `/owner/service/${servideId}`,
        {
          name: name,
          duration: duration,
          price: price,
          description: description,
        },
        { headers: {
          'Authorization': `Bearer ${getCurrentToken()}`,
        } }
      );
    } catch (error) {
      console.log(error);
    }
  };

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate()
  const handleFormSubmit = (values) => {
    setLoading(true);

    try {
      edit(values.name, values.duration, values.price, values.description);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    navigate(Routs.Services.path)
    window.alert("Edit successful! Changes saved");
  };

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
                <Breadcrumb.Item active>Services</Breadcrumb.Item>
              </Breadcrumb>
              <h4>YOUR SERVICES</h4>
              <p className="mb-0 font-large fw-bold">Edit this service you offer your customers</p>
            </div>
          </div>

          <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            enableReinitialize
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Row className="justify-content-md-center">
                  <Col xs={12} sm={6} xl={6} className="mb-4">
                    <Form.Group className="mb-3">
                      <Form.Label>Name</Form.Label>
                      <InputGroup>
                        <Form.Control
                          required
                          type="text"
                          name="name"
                          onBlur={handleBlur}
                          value={values.name}
                          onChange={handleChange}
                          helperText={touched.name && errors.name}
                          error={Boolean(errors.name && touched.name)}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6} xl={6} className="mb-4">
                    <Form.Group className="mb-3">
                      <Form.Label>Duration</Form.Label>
                      <Form.Select
                        name="duration"
                        onBlur={handleBlur}
                        value={values.duration}
                        onChange={handleChange}
                        helperText={touched.duration && errors.duration}
                        error={Boolean(errors.duration && touched.duration)}
                      >
                        <option defaultValue>
                          Select a time duration (in minutes)
                        </option>
                        <option>60</option>
                        <option>90</option>
                        <option>120</option>
                      </Form.Select>
                    </Form.Group>
                  </Col>
                </Row>
                <Row className="justify-content-md-center">
                  <Col xs={12} sm={6} xl={6} className="mb-4">
                    <Form.Group className="mb-3">
                      <Form.Label>Price</Form.Label>
                      <InputGroup>
                        <Form.Control
                          autoFocus
                          required
                          type="text"
                          name="price"
                          onBlur={handleBlur}
                          value={values.price}
                          onChange={handleChange}
                          helperText={touched.price && errors.price}
                          error={Boolean(errors.price && touched.price)}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>

                  <Col xs={12} sm={6} xl={6} className="mb-4">
                    <Form.Group className="mb-3">
                      <Form.Label>Description</Form.Label>
                      <InputGroup>
                        <Form.Control
                          as="textarea"
                          rows="1"
                          name="description"
                          onBlur={handleBlur}
                          value={values.description}
                          onChange={handleChange}
                          helperText={touched.description && errors.description}
                          error={Boolean(
                            errors.description && touched.description
                          )}
                        />
                      </InputGroup>
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="justify-content-md-center">
                  <Button
                    variant="outline-success"
                    size="lg"
                    type="submit"
                    className="me-1">
                      {loading ? <>Saving..</> : <>SAVE</>}
                  </Button>
                </Row>
              </Form>
            )}
          </Formik>

          <Footer />
        </main>
      </AnimationRevealPage>
    </>
  );
};

export default EditService;
