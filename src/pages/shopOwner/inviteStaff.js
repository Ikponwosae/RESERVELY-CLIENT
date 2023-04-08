import React, { useState } from "react";
import { Button, Row, Col, InputGroup, Form, Alert } from "@themesberg/react-bootstrap";
import AnimationRevealPage from "helpers/AnimationRevealPage.js"
import Sidebar from "components/Sidebar";
import ScrollToTop from "components/ScrollToTop";
import Footer from "components/Footer";
import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import { baseUrl } from "./staff";


const token = localStorage.getItem('token');

const headers = {
  'Authorization': `Bearer ${token}`
}

const initialValues = {
  name: '',
  staffEmail: '',
};

const validationSchema = Yup.object().shape({
  staffEmail:Yup.string()
  .email('Invalid email address').required('Email is required')
});

const InviteStaff = () => {
  const invite = async (staffEmail, name) => {
    try {
      const response = await axios.post(`${baseUrl}/owner/invite`, {staffEmail: staffEmail, name: name},
       {
        headers: headers
      });
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  }

  const [loading, setLoading] = useState(false);

  const handleFormSubmit = (values) =>{
    setLoading(true);

    try {
      invite(values.staffEmail, values.name);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
    <React.Fragment>
      <Alert variant="success">Staff Invite has been sent!</Alert>
    </React.Fragment>
    window.alert("Staff invite has been sent!")
  }

  return (
    <>
    <Sidebar />
    <AnimationRevealPage>
    <main className="content">
          {/* <Navbar /> */}
          <ScrollToTop />
          <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
           
            </div>
            <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}
            >
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <InputGroup>
                        <Form.Control autoFocus required type="text"
                        name="name"
                        onBlur={handleBlur}
                        value={values.name}
                        onChange={handleChange}
                        helperText={touched.name && errors.name}
                        error={Boolean(errors.name && touched.name)}
                        placeholder="Jane Doe" />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <InputGroup>
                        <Form.Control autoFocus required type="email"
                        name="staffEmail"
                        onBlur={handleBlur}
                        value={values.staffEmail}
                        onChange={handleChange}
                        helperText={touched.staffEmail && errors.staffEmail}
                        error={Boolean(errors.staffEmail && touched.staffEmail)}
                        placeholder="jdoe@email.com" />
                        </InputGroup>
                    </Form.Group>
                </Row>
                <Row className="justify-content-md-center">
                <Col xs={12} sm={6} xl={4} className="mb-4">
                    <Button variant="outline-tertiary" type="submit" loading={loading} size="lg" className="me-1">SEND INVITE</Button> 
                </Col>
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

export default InviteStaff;