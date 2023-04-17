import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Row, Button, Container } from '@themesberg/react-bootstrap';
import { useNavigate } from 'react-router-dom';
import api from "api/api";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
import AuthService from "auth_service";
import { Routs } from "../../routs";


const { setWithExpiry } = AuthService

const CompleteReg = () => {
  const navigate = useNavigate();
  const token = (window.location.href).split("/")[4];

      const activate = async () =>{
        try{
        // setLoading(true);
        const {user}  = api.get(`/auth/verification/${token}`);
        setWithExpiry("token", token);
        setWithExpiry("user", user);

        if (user.role === "staff") {
          navigate(Routs.StaffDashboard.path);
        } else if (user.role === "shop-owner") {
          navigate(`/register-business/${user.id}`)
        } else {
          navigate(Routs.UserDashboard.path);
          console.log("hiiii")
        }
      } catch(err){
        console.log(err);
      }  
      }
  


  return (
    <main>
      <section className="vh-100 d-flex align-items-center justify-content-center">
        <Container>
          <Row>
            <Col xs={12} className="text-center d-flex align-items-center justify-content-center">
              <div>
                 <FontAwesomeIcon icon={faCheckCircle} className="animate-left-3 me-3 ms-2" />
                <h1 className="text-primary mt-5">
                  You have completed your registration <span className="fw-bolder">SUCCESSFULLY!</span>
                </h1>
                  <Button variant="outline-primary" type="submit" onSubmit= {() => activate()}>Activate Your account</Button>
                <p className="lead my-4">
                  You will be redirected in 3 seconds. If you have not been redirected to the login page click to register your business.
               </p>
                </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default  CompleteReg;