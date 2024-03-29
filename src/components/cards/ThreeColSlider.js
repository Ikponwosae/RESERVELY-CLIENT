import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import tw from "twin.macro";
import styled from "styled-components";
import { SectionHeading } from "components/misc/Headings";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons";
// import { ReactComponent as PriceIcon } from "feather-icons/dist/icons/dollar-sign.svg";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as StarIcon } from "feather-icons/dist/icons/star.svg";
import { ReactComponent as ChevronLeftIcon } from "feather-icons/dist/icons/chevron-left.svg";
import { ReactComponent as ChevronRightIcon } from "feather-icons/dist/icons/chevron-right.svg";
import { baseUrl } from "pages/shopOwner/staff";
import api from "api/api";
import { ca } from "date-fns/locale";


const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20`;

const HeadingWithControl = tw.div`flex flex-col items-center sm:items-stretch sm:flex-row justify-between`;
const Heading = tw(SectionHeading)``;
const Controls = tw.div`flex items-center`;
const ControlButton = styled(PrimaryButtonBase)`
  ${tw`mt-4 sm:mt-0 first:ml-0 ml-6 rounded-full p-2`}
  svg {
    ${tw`w-6 h-6`}
  }
`;
const PrevButton = tw(ControlButton)``;
const NextButton = tw(ControlButton)``;

const CardSlider = styled(Slider)`
  ${tw`mt-16`}
  .slick-track { 
    ${tw`flex`}
  }
  .slick-slide {
    ${tw`h-auto flex justify-center mb-1`}
  }
`;
const Card = tw.div`h-full flex! flex-col sm:border max-w-sm sm:rounded-tl-4xl sm:rounded-br-5xl relative focus:outline-none`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`w-full h-56 sm:h-64 bg-cover bg-center rounded sm:rounded-none sm:rounded-tl-4xl`
]);

const TextInfo = tw.div`py-6 sm:px-10 sm:py-6`;
const TitleReviewContainer = tw.div`flex flex-col sm:flex-row sm:justify-between sm:items-center`;
const Title = tw.h5`text-2xl font-bold`;

const RatingsInfo = styled.div`
  ${tw`flex items-center sm:ml-4 mt-2 sm:mt-0`}
  svg {
    ${tw`w-6 h-6 text-yellow-500 fill-current`}
  }
`;
const Rating = tw.span`ml-2 font-bold`;

const Description = tw.p`text-sm leading-loose mt-2 sm:mt-4`;

const SecondaryInfoContainer = tw.div`flex flex-col sm:flex-row mt-2 sm:mt-4`;
const IconWithText = tw.div`flex items-center mr-6 my-2 sm:my-0`;
const IconContainer = styled.div`
  ${tw`inline-block rounded-full p-2 bg-gray-700 text-gray-100`}
  svg {
    ${tw`w-3 h-3`}
  }
`;
const Text = tw.div`ml-2 text-sm font-semibold text-gray-800`;

const PrimaryButton = tw(PrimaryButtonBase)`mt-auto sm:text-lg rounded-none w-full rounded sm:rounded-none sm:rounded-br-4xl py-3 sm:py-6`;


const  Businesses =  () => {
  // useState is used instead of useRef below because we want to re-render when sliderRef becomes available (not null)
  const [sliderRef, setSliderRef] = useState(null);
  const sliderSettings = {
    arrows: false,
    slidesToShow: 3,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
        }
      },

      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };

  const [business, setBusinesses] = useState([])
  useEffect(() => {
    const getBusinesses = async () => {
        try {
          const config = {
            headers: { "Content-Type": "application/json" },
          };
            const response = await api.get("/business/all/", config)

            const {businesses} = response.data
            setBusinesses(businesses)
        } catch (e) {
            console.error(e)
        }
    }
    getBusinesses()

}, [])

  /* Change this according to your needs */
  const cards = [
    {
      imageSrc: "https://images.fresha.com/locations/location-profile-images/304368/543840/88bdb313-a680-4bea-aeeb-03390eea81f8.jpg?class=width-large",
      title: "DreamDaySpa",
      description: "We are the best Spa in Lagos Nigeria. We offer Spa Body Treatment, Aesthetic Treatment, Various Massages, Skin Analysis, Skin care, Manicure and Pedicure. Our services are suitable for men, women and kids.",
      locationText: "Lagos, Nigeria",
      // pricingText: "USD 39/Day",
      rating: "4.8",
    },
    {
      imageSrc: "https://images.fresha.com/locations/location-profile-images/440109/756121/4fd2e845-cd8c-41b4-945d-e55baf38c543.jpg?class=width-large",
      title: "RahnaBeauty Makeup Artistry",
      description: "A Makeup Studio catering to the beauty needs of women. We offer Makeup services for; bridals, birthday celebrations, brand campaigns, event guests, we also teach and empower makeup artists & enthusiasts on the how & why of makeup application and processes",
      locationText: "Lagos, Nigeria",
      // pricingText: "USD 50/Day",
      rating: 4.9,
    },
    {
      imageSrc: "https://images.fresha.com/locations/location-profile-images/343195/428815/99ddb1f6-bfe0-4e9a-ad20-62f63e4c1419.jpg?class=width-large",
      title: "Veeda Beauty Lounge",
      description: "Veeda beauty lounge is a full-service beauty salon dedicated to consistently providing high customer satisfaction by rendering excellent service, quality products, and furnishing an enjoyable atmosphere at an acceptable price ",
      locationText: "FCT, Nigeria",
      // pricingText: "USD 19/Day",
      rating: "5.0",
    },
    {
      imageSrc: "https://images.fresha.com/locations/location-profile-images/350076/380247/41d11805-d7f5-40ff-a321-00bf8bff7095.jpg?class=width-large",
      title: "The Hikkys Hair Studio",
      description: "Hikky's Hair is a brand passionate about enhancing the beauty of the modern-day African woman through quality hair and haircare. Our services revolve around the sale of quality Human Hair Extensions, Natural hair care, Installation, Microlinks ,LA Weave, Wig fitting, Wig making, Wig laundry, Colouring services and more.",
      locationText: "Port Harcourt, Nigeria",
      // pricingText: "USD 99/Day",
      rating: 4.5,
    },
  ]

  return (
    <Container>
      <Content>
        <HeadingWithControl>
          <Heading>Popular Businesses</Heading>
          <Controls>
            <PrevButton onClick={sliderRef?.slickPrev}><ChevronLeftIcon/></PrevButton>
            <NextButton onClick={sliderRef?.slickNext}><ChevronRightIcon/></NextButton>
          </Controls>
        </HeadingWithControl>
        <CardSlider ref={setSliderRef} {...sliderSettings}>
          {business.map(business => (
            <Card key={business._id}>
              <CardImage imageSrc={cards[Math.floor(Math.random() * 3)].imageSrc} />
              {/* <CardImage imageSrc={"https://images.fresha.com/locations/location-profile-images/343195/428815/99ddb1f6-bfe0-4e9a-ad20-62f63e4c1419.jpg?class=width-large"} /> */}
              <TextInfo>
                <TitleReviewContainer>
                  <Title>{business.name}</Title>
                  <RatingsInfo>
                    <StarIcon />
                    <Rating>{Math.round((Math.random() * 5* 10)) / 10}</Rating>
                  </RatingsInfo>
                </TitleReviewContainer>
                <SecondaryInfoContainer>
                  <IconWithText>
                    <IconContainer>
                      <LocationIcon />
                    </IconContainer>
                    <Text>{business.country}</Text>
                  </IconWithText>
                  
                </SecondaryInfoContainer>
                <Description>{business.description}</Description>
              </TextInfo>
              {/* <Card.Link className="fw-bold"> */}
              <PrimaryButton>
                <a href={"/business/" + business._id} >Book Now</a>
                </PrimaryButton>
              {/* </Card.Link> */}
            </Card>
          ))}
        </CardSlider>
      </Content>
    </Container>
  );
};


export default Businesses;