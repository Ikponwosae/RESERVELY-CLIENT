import React, { useState, useEffect } from "react";
import { Col, Row, Card, Form, Button } from '@themesberg/react-bootstrap';
import { Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import api from "api/api";
import AuthService from "auth_service";
import { Routs } from "routs";


// form field validation schema for personal
const validationSchema = Yup.object().shape({
  email: Yup.string()
  .email('Invalid Email address')
});


const OwnerInfoForm = () => {
  // const {getCurrentUser, getCurrentToken} = AuthService;
  // const [user, setUser] = useState({});
  // const [loading, setLoading] = useState(false);
  
  // const navigate = useNavigate();

  //   setLoading(true)
  //   useEffect(() => {
  //     const getPersonal = async () => {
  //       try {
  //         const data = await api.get(`/auth/user/${getCurrentUser().id}`);
  //         const { user } = data.data;
  //         setUser(user);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  
  //     getPersonal();
  //   }, [getCurrentUser]);     

    const initialValues = {
      firstName: 'user.firstName',
      lastName: 'user.lastName',
      email: 'user.email',
      phoneNumber: 'user.phoneNumber',
      address: 'user.address',
    };
  
    
  //   const editPersonal = async (values) => {
  //     try {
  //       await api.patch(`/auth/user/${getCurrentUser().id}/edit/`,
  //         {
  //           firstName: values.firstName,
  //           lastName: values.lastName,
  //           email: values.lastName,
  //           phoneNumber: values.phoneNumber,
  //           address: values.address,
  //         },
  //         { headers: {
  //           'Authorization': `Bearer ${getCurrentToken()}`,
  //         } }
  //       );
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  
  //   const handleFormSubmit = (values) => {
  //     setLoading(true);
  
  //     try {
  //       editPersonal(values);
  //       setLoading(false);
  //     } catch (error) {
  //       console.log(error);
  //       setLoading(false);
  //     }
  //     navigate(Routs.ShopOwnerDashboard.path)
  //     window.alert("Edit successful! Changes saved");
  //   };
  return (
    <>
    <Card border="light" className="bg-white shadow-sm mb-4">
      <Card.Body>
        <h5 className="mb-4">Personal information</h5>
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
              <Form.Group id="firstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control  type="text" 
                required
                name="firstName"
                onBlur={handleBlur}
                value={values.firstName}
                onChange={handleChange}
                helperText={touched.firstName && errors.firstName}
                error={Boolean(errors.firstName && touched.firstName)} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="lastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control  type="text" 
                required
                name="lastName"
                onBlur={handleBlur}
                value={values.lastName}
                onChange={handleChange}
                helperText={touched.lastName && errors.lastName}
                error={Boolean(errors.lastName && touched.lastName)} />
              </Form.Group>
            </Col>
          </Row>
          
          <Row>
            <Col md={6} className="mb-3">
              <Form.Group id="emal">
                <Form.Label>Email</Form.Label>
                <Form.Control  type="email" 
                required
                name="email"
                onBlur={handleBlur}
                value={values.email}
                onChange={handleChange}
                helperText={touched.email && errors.email}
                error={Boolean(errors.email && touched.name)} />
              </Form.Group>
            </Col>
            <Col md={6} className="mb-3">
              <Form.Group id="phone">
                <Form.Label>Phone</Form.Label>
                <Form.Control  type="number" 
                required
                name="phoneNumber"
                onBlur={handleBlur}
                value={values.phoneNumber}
                onChange={handleChange}
                helperText={touched.phoneNumber && errors.phoneNumber}
                error={Boolean(errors.phoneNumber && touched.phoneNumber)} />
              </Form.Group>
            </Col>
          </Row>

          <h5 className="my-4">Address</h5>
          <Row>
            <Col sm={9} className="mb-3">
              <Form.Group id="address">
                <Form.Label>Address</Form.Label>
                <Form.Control required type="text" 
                name="address"
                onBlur={handleBlur}
                value={values.address}
                onChange={handleChange}
                helperText={touched.address && errors.address}
                error={Boolean(errors.address && touched.address)} />
              </Form.Group>
            </Col>
            <Col sm={3} className="mb-3">
              <Form.Group id="addressNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control required type="number" placeholder="No." />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col sm={4} className="mb-3">
              <Form.Group id="country">
                <Form.Label>Country</Form.Label>
                <Form.Control  type="text"
                required
                name="country"
                onBlur={handleBlur}
                value={values.country}
                onChange={handleChange}
                helperText={touched.country && errors.country}
                error={Boolean(errors.country && touched.country)}
                />
              </Form.Group>
              <Form.Group id="openHour">
                <Form.Label>Open Hour</Form.Label>
                <Form.Control  type="text"
                required
                name="openHour"
                onBlur={handleBlur}
                value={values.openHour}
                onChange={handleChange}
                helperText={touched.openHour && errors.openHour}
                error={Boolean(errors.openHour && touched.openHour)}
                />
              </Form.Group>
              <Form.Group id="closeHour">
                <Form.Label>Close Hour</Form.Label>
                <Form.Control  type="text"
                required
                name="closeHour"
                onBlur={handleBlur}
                value={values.closeHour}
                onChange={handleChange}
                helperText={touched.closeHour && errors.closeHour}
                error={Boolean(errors.closeHour && touched.closeHour)}
                />
              </Form.Group>
            </Col>
            {/* <Col sm={4} className="mb-3">
              <Form.Group className="mb-2">
                <Form.Label>Select state</Form.Label>
                <Form.Select id="state" defaultValue="0">
                  <option value="0">State</option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </Form.Select>
              </Form.Group>
            </Col> */}
            <Col sm={4}>
              <Form.Group id="zip">
                <Form.Label>ZIP</Form.Label>
                <Form.Control type="tel" placeholder="ZIP" />
              </Form.Group>
            </Col>
          </Row>
          <div className="mt-3">
            <Button variant="outline-tertiary" type="submit">
            {/* {loading ? <>Saving Pesonal Details..</> : <>SAVE PERSONAL</>} */}
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

export default OwnerInfoForm;