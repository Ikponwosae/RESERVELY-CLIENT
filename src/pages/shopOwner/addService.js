import React, { useState } from "react";
import { Breadcrumb, Button, Row, Col, InputGroup, Form } from "@themesberg/react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
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
    duration: '',
    price: '',
    description :  ''
  }

const validationSchema = Yup.object().shape({
    name: Yup.string().required(),
    duration: Yup.number().required(),
    price: Yup.string().required(),
    description: Yup.string().required()
});


const AddService =  () => {
    const add = async (name, duration, price, description) => {
        try {
          const response = await axios.post(`${baseUrl}/owner/add-service`,{
            name: name, duration: duration, price: price, description: description
          },{headers: headers})
          console.log(response)
        } catch (error) {
          console.log(error);
        }
      }
    
      const [loading, setLoading] = useState(false);
    
      const handleFormSubmit = (values) =>{
        setLoading(true);
    
        try {
          add(values.name, values.duration, values.price, values.description);
          setLoading(false);
        } catch (error) {
          console.log(error);
          setLoading(false);
        }
        window.alert("Successful! Service created!")
      }



    return (
        <>
        <Sidebar />
        <AnimationRevealPage >
        <main className="content">
          <ScrollToTop />
          <div className="d-lg-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
            <div className="mb-4 mb-lg-0">
            <Breadcrumb className="d-none d-md-inline-block" listProps={{ className: "breadcrumb-dark breadcrumb-transparent" }}>
                <Breadcrumb.Item><FontAwesomeIcon icon={faHome} /></Breadcrumb.Item>
                <Breadcrumb.Item>Reservely</Breadcrumb.Item>
                <Breadcrumb.Item>Services</Breadcrumb.Item>
                <Breadcrumb.Item active>Add-Service</Breadcrumb.Item>
            </Breadcrumb>
            <h4>YOUR SERVICES</h4>
            <p className="mb-0">Add a service to offer your customers</p>
            </div>
            </div>

            <Formik
            onSubmit={handleFormSubmit}
            initialValues={initialValues}
            validationSchema={validationSchema}>
            {({ values, errors, touched, handleChange, handleBlur, handleSubmit}) => (
            <Form onSubmit={handleSubmit}>
                <Row className="justify-content-md-center">
                <Col xs={12} sm={6} xl={6} className="mb-4">
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <InputGroup>
                        <Form.Control required type="text" 
                        name="name"
                        onBlur={handleBlur}
                        value={values.name}
                        onChange={handleChange}
                        helperText={touched.name && errors.name}
                        error={Boolean(errors.name && touched.name)}
                        placeholder="Massage Therapy" />
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
                    <option defaultValue>Select a time duration (in minutes)</option>
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
                        <Form.Control autoFocus required type="text"
                        name="price"
                        onBlur={handleBlur}
                        value={values.price}
                        onChange={handleChange}
                        helperText={touched.price && errors.price}
                        error={Boolean(errors.price && touched.price)}
                        placeholder="$15000.00" />
                        </InputGroup>
                    </Form.Group>
                </Col>

                <Col xs={12} sm={6} xl={6} className="mb-4">
                <Form.Group className="mb-3">
                    <Form.Label>Description</Form.Label>
                    <InputGroup>
                        <Form.Control as="textarea" rows="1" 
                        name="description"
                        onBlur={handleBlur}
                        value={values.description}
                        onChange={handleChange}
                        helperText={touched.description && errors.description}
                        error={Boolean(errors.description && touched.description)}
                        placeholder="This service bring warmth.."/>
                    </InputGroup>
                </Form.Group>
                </Col>
                </Row>
                                
                <Row className="justify-content-md-center">
                    <Button variant="outline-tertiary" size="lg" type="submit" loading={loading} className="me-1">ADD</Button>
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

export default AddService;