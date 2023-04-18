import React, { useState, useEffect } from "react";
import { Col, Row, Card, Form, Button } from '@themesberg/react-bootstrap';
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "api/api";
import AuthService from "auth_service";
import { Routs } from "routs";


//form field validations for business
const validationSchema = Yup.object().shape({
    name: Yup.string(),
    hasPhysicalAddress: Yup.string(),
    openHour: Yup.string(),
    closeHour: Yup.string(),
});

const BusinessInfoForm = () => {
//   const {getCurrentUser, getCurrentToken} = AuthService;
//   const [bus, setBusiness] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const navigate = useNavigate();

//     setLoading(true)
//     useEffect(() => {
//       const getBusiness = async () => {
//         try {
//           const data = await api.get(`/business/${getCurrentUser().business}`);
//           const { business } = data.data;
//           setBusiness(business);
//         } catch (error) {
//           console.log(error);
//         }
//       };

//       getBusiness();
//     }, [getCurrentUser]);

    const initialValues = {
      name: 'bus.name',
      hasPhysicalAddress: 'bus.hasPhysicalAddress',
      category: 'bus.category',
      description: 'bus.description',
      website: 'bus.website',
      regNumber: 'bus.regNumber',
      country: 'bus.country',
      openHour: 'bus.openHour',
      closeHour: 'bus.closeHour',
      teamSize: 'bus.teamSize'
    };
  
//     const editBusiness = async (values) => {
//       try {
//         const body = values;
//         await api.patch(`/business/${getCurrentUser().business}/edit/`, body,
//           { headers: {
//             'Authorization': `Bearer ${getCurrentToken()}`,
//           } }
//         );
//       } catch (error) {
//         console.log(error);
//       }
//     }
  
//     const handleFormSubmit = (values) => {
//       setLoading(true);
  
//       try {
//         editBusiness(values);
//         setLoading(false);
//       } catch (error) {
//         console.log(error);
//         setLoading(false);
//       }
//       navigate(Routs.ShopOwnerDashboard.path)
//       window.alert("Edit successful! Changes saved");
//     };
  return (
    <>
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>    
          <h5 className="my-4">Business Info</h5>
          <Formik
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
          <Row>
          <Col md={6} className="mb-3">
              <Form.Group id="name">
                <Form.Label>Business Name</Form.Label>
                <Form.Control type="text" 
                required
                name="name"
                onBlur={handleBlur}
                value={values.name}
                onChange={handleChange}
                helperText={touched.name && errors.name}
                error={Boolean(errors.name && touched.name)} />
              </Form.Group>
            </Col>
          <Col md={6} className="mb-3">
              <Form.Group id="website">
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" 
                required
                name="website"
                onBlur={handleBlur}
                value={values.website}
                onChange={handleChange}
                helperText={touched.website && errors.website}
                error={Boolean(errors.website && touched.website)} />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="regNum">
                <Form.Label>Registration Number</Form.Label>
                <Form.Control  type="text" 
                required
                name="regNumber"
                onBlur={handleBlur}
                value={values.regNumber}
                onChange={handleChange}
                helperText={touched.regNumber && errors.regNumber}
                error={Boolean(errors.regNumber && touched.regNumber)} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
            <Form.Group className="mb-2" id="hasPhysicalAddress">
            <Form.Label>Has Physical Address</Form.Label>
            <Form.Select
            name="hasPhysicalsAddress"
            onBlur={handleBlur}
            value={values.hasPhysicalAddress}
            onChange={handleChange}
            helperText={touched.hasPhysicalAddress && errors.hasPhysicalAddress}
            error={Boolean(errors.hasPhysicalAddress && touched.hasPhysicalAddress)}
            >
              <option defaultValue >true</option>
              <option>false</option>
            </Form.Select>
          </Form.Group>
            </Col>
          </Row>
          <Row>
          <Col md={6} className="mb-3">
            <Form.Group className="mb-2" id="category">
            <Form.Label>Category</Form.Label>
            <Form.Select
            name="name"
            onBlur={handleBlur}
            value={values.category}
            onChange={handleChange}
            helperText={touched.category && errors.category}
            error={Boolean(errors.category && touched.category)}
            >
              <option defaultValue>Open this menu</option>
                <option value="beauty">Beauty</option>
                <option value="hair">Hair</option>
                <option value="luxury">Luxury</option>
                <option value="aroma-therapy">Aroma-Therapy</option>
                <option value="food">Food</option>
            </Form.Select>
          </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
            <Form.Group className="mb-2" id="teamSize">
            <Form.Label>Team Size</Form.Label>
            <Form.Control  type="number" 
            required
            name="teamSize"
            onBlur={handleBlur}
            value={values.teamSize}
            onChange={handleChange}
            helperText={touched.teamSize && errors.teamSize}
            error={Boolean(errors.name && touched.name)} />
          </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
            <Form.Group className="mb-2" id="description">
            <Form.Label>Description</Form.Label>
            <Form.Control  type="text" 
            required
            name="description"
            onBlur={handleBlur}
            value={values.description}
            onChange={handleChange}
            helperText={touched.description && errors.description}
            error={Boolean(errors.description && touched.description)} />
          </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
            <Form.Group className="mb-2" id="image">
            <Form.Label>Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            <Button variant="outline-tertiary" type="submit">
            {/* {loading ? <>Saving..</> : <>SAVE</>} */}
            Save
            </Button>
          </div>
        </Form>
            )}
        </Formik>
      </Card.Body>
    </Card>
    </>
  );
};

export default BusinessInfoForm ;