
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { Col, Row, Button, Container } from '@themesberg/react-bootstrap';
import useAuth from "hooks/useAuth";
import { Link, useNavigate } from 'react-router-dom';

import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";
// import SentImage from "../../assets/img/illustrations/500.svg";


const CompleteReg = () => {
  const { completeRegistration } = useAuth();
  const navigate = useNavigate();
  // const [ loading, setLoading] = useState(false);
  const token = (window.location.href).split("/")[4];

      const activate = async () =>{
        try{
        // setLoading(true);
        const {user}  = await completeRegistration(token);
        if(user.role === "shop-owner"){
          navigate(`/register-business/${user.id}`)
          console.log('hello')
        }else{
        navigate('/login')
        console.log('hi')
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
                  <Button variant="outline-primary" onClick= {() => activate()}>Activate Your account</Button>
                <p className="lead my-4">
                  You will be redirected in 3 seconds. If you have not been redirected to the login page click to register your business.
            </p>
                {/* <Button
                variant="primary" className="animate-hover" to={Routs.Signin.path}>
                  <FontAwesomeIcon icon={faGraduationCap} className="animate-left-3 me-3 ms-2" />
                  Login
                </Button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </main>
  );
};

export default  CompleteReg;