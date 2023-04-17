/* eslint-disable import/no-anonymous-default-export */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tw from "twin.macro";
//eslint-disable-next-line
import { css } from "styled-components/macro";
import Header from "../headers/light.js";
import { ReactComponent as SvgDecoratorBlob1 } from "../../images/svg-decorator-blob-1.svg";
import DesignIllustration from "../../images/design-illustration-2.svg";
import CustomersLogoStripImage from "../../images/customers-logo-strip.png";
import {
  Form,
  Col,
  Row,
  ListGroup,
  Nav,
  Dropdown,
} from "@themesberg/react-bootstrap";
import api from "api/api.js";
import { Formik } from "formik";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col lg:flex-row lg:items-center max-w-screen-xl mx-auto py-20 md:py-24`;
const LeftColumn = tw.div`relative lg:w-5/12 text-center max-w-lg mx-auto lg:max-w-none lg:text-left`;
const RightColumn = tw.div`relative mt-12 lg:mt-0 flex-1 flex flex-col justify-center lg:self-end`;
const Heading = tw.h1`font-bold text-3xl md:text-3xl lg:text-4xl xl:text-5xl text-gray-900 leading-tight`;
const Paragraph = tw.p`my-5 lg:my-8 text-base xl:text-lg`;

const Actions = styled.div`
  ${tw`relative max-w-md text-center mx-auto lg:mx-0`}
  input {
    ${tw`sm:pr-48 pl-8 py-4 sm:py-5 rounded-full border-2 w-full font-medium focus:outline-none transition duration-300  focus:border-primary-500 hover:border-gray-500`}
  }
  button {
    ${tw`w-full sm:absolute right-0 top-0 bottom-0 bg-primary-500 text-gray-100 font-bold mr-2 my-4 sm:my-2 rounded-full py-4 flex items-center justify-center sm:w-40 sm:leading-none focus:outline-none hover:bg-primary-900 transition duration-300`}
  }
`;

const IllustrationContainer = tw.div`flex justify-center lg:justify-end items-center`;

// Random Decorator Blobs (shapes that you see in background)
const DecoratorBlob1 = styled(SvgDecoratorBlob1)`
  ${tw`pointer-events-none opacity-5 absolute left-0 bottom-0 h-64 w-64 transform -translate-x-2/3 -z-10`}
`;

const CustomersLogoStrip = styled.div`
  ${tw`mt-12 lg:mt-20`}
  p {
    ${tw`uppercase text-sm lg:text-xs tracking-wider font-bold text-gray-500`}
  }
  img {
    ${tw`mt-4 w-full lg:pr-16 xl:pr-32 opacity-50`}
  }
`;

//initial value
const initialValues = {
  search: " ",
};

const HeroColumn = ({ roundedHeaderButton }) => {
  const [business, setBusinesses] = useState([]);

  const handleFormSubmit = async (values) => {
    try {
      const body = values;
      const response = await api.post("/business/search/", body);
      const businesses = response.data.businesses;
      setBusinesses(businesses);
    } catch (e) {
      console.error(e);
    }
  };
  console.log(business);

  const Business = (props) => {
    const { link, name, country, website } = props;
    return (
      <ListGroup.Item action href={link} className="border-bottom border-light">
        <Row className="align-items-center">
          <Col className="ps-0 ms--2">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <h4 className="h6 mb-0 text-small">{name}</h4>
              </div>
              <div className="text-end">
                <small>{country}</small>
              </div>
            </div>
            <p className="font-small mt-1 mb-0">{website}</p>
          </Col>
        </Row>
      </ListGroup.Item>
    );
  };

  return (
    <>
      <Header roundedHeaderButton={roundedHeaderButton} />
      <Container>
        <TwoColumn>
          <LeftColumn>
            <Heading>
              Services <span tw="text-primary-500">for you.</span>
            </Heading>
            <Paragraph>
              We bring businesses in the service industry across the world to
              you. As a businesss, we present you to potential clients. A
              seamless, all in one application for your business needs.
            </Paragraph>
            <Actions>
              <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Form.Control
                      autoFocus
                      required
                      name="search"
                      onBlur={handleBlur}
                      value={values.search}
                      onChange={handleChange}
                      helperText={touched.search && errors.search}
                      error={Boolean(errors.search && touched.search)}
                      type="text"
                      placeholder="Find businesses near you"
                    />
                    {/* <input type="text" placeholder="Find businesses near you" /> */}
                    <button type="submit">Search</button>
                  </Form>
                )}
              </Formik>
              {business.map((b) => (
                <Business
                  key={`business-${b._id}`}
                  {...b}
                  link={`/business/${b._id}`}
                />
              ))}
            </Actions>
            <CustomersLogoStrip>
              <p>Our TRUSTED Customers</p>
              <img src={CustomersLogoStripImage} alt="Our Customers" />
            </CustomersLogoStrip>
          </LeftColumn>
          <RightColumn>
            <IllustrationContainer>
              <img
                tw="min-w-0 w-full max-w-lg xl:max-w-3xl"
                src={DesignIllustration}
                alt="Design Illustration"
              />
            </IllustrationContainer>
          </RightColumn>
        </TwoColumn>
        <DecoratorBlob1 />
      </Container>
    </>
  );
};

export default HeroColumn;
