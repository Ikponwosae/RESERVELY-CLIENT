import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { SectionHeading } from "components/misc/Headings.js";
import { PrimaryLink as PrimaryLinkBase } from "components/misc/Links.js";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import { ReactComponent as LocationIcon } from "feather-icons/dist/icons/map-pin.svg";
import { ReactComponent as TimeIcon } from "feather-icons/dist/icons/clock.svg";
import { ReactComponent as TrendingIcon } from "feather-icons/dist/icons/trending-up.svg";
import { ReactComponent as ArrowRightIcon } from "images/arrow-right-icon.svg";

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto py-20 lg:py-24`;

const ThreeColumn = tw.div`flex flex-wrap`;
const Column = tw.div``;
const HeadingColumn = tw(Column)`w-full xl:w-1/3`;
const CardColumn = tw(Column)`w-full md:w-1/2 xl:w-1/3 mt-16 xl:mt-0`;

const HeadingInfoContainer = tw.div`text-center xl:text-left max-w-lg xl:max-w-none mx-auto xl:mx-0`;
const HeadingTitle = tw(SectionHeading)`xl:text-left leading-tight`;
const HeadingDescription = tw.p`text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-8`;
const PrimaryLink = styled(PrimaryLinkBase)`
  ${tw`inline-flex justify-center xl:justify-start items-center mt-8 text-lg`}
  svg {
    ${tw`ml-2 w-5 h-5`}
  }
`;

const Card = tw.div`mx-auto xl:mx-0 xl:ml-auto max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-xs`;
const CardImage = styled.div(props => [
  `background-image: url("${props.imageSrc}");`,
  tw`h-80 bg-cover bg-center rounded`
]);

const CardText = tw.div`mt-4`;

const CardHeader = tw.div`flex justify-between items-center`;
const CardType = tw.div`text-primary-500 font-bold text-lg`;
const CardPrice = tw.div`font-semibold text-sm text-gray-600`;
const CardPriceAmount = tw.span`font-bold text-gray-800 text-lg`;

const CardTitle = tw.h5`text-xl mt-4 font-bold`;

const CardMeta = styled.div`
  ${tw`flex flex-row flex-wrap justify-between sm:items-center font-semibold tracking-wide text-gray-600 uppercase text-xs`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex items-center mt-4`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const CardAction = tw(PrimaryButtonBase)`w-full mt-8`;

export default () => {
  const cards = [
    {
      imageSrc:
        "https://images.fresha.com/locations/location-profile-images/46355/737657/fbddebcc-c45a-4a6f-a3f1-84a6339f60cf.jpg?class=width-large",
      type: "Beauty & Hair Salon",
      // pricePerDay: "$99",
      title: "TasalaHQ Hair and Beauty - Lekki",
      trendingText: "Trending",
      // durationText: "7 Days Tour",
      locationText: "Lagos, Nigeria"
    },
    {
      imageSrc:
        "https://images.fresha.com/locations/location-profile-images/132500/574012/1d305c41-0932-4f00-b458-7fc603dede70.jpg?class=width-large",
      type: "Cruise",
      // pricePerDay: "$169",
      title: "Gazelle Wax Bar - Wuse 2",
      trendingText: "Trending",
      // durationText: "15 Days Tour",
      locationText: "FCT, Nigeria"
    }
  ];
  return (
    <Container>
      <Content>
        <ThreeColumn>
          <HeadingColumn>
            <HeadingInfoContainer>
              <HeadingTitle>Trending Services</HeadingTitle>
              <HeadingDescription>
              Don't miss out on the best of the best - explore the trending services on Reservely.
              </HeadingDescription>
              <PrimaryLink>
                View All <ArrowRightIcon />
              </PrimaryLink>
            </HeadingInfoContainer>
          </HeadingColumn>
          {cards.map((card, index) => (
            <CardColumn key={index}>
              <Card>
                <CardImage imageSrc={card.imageSrc} />
                <CardText>
                  {/* <CardHeader>
                    <CardType>{card.type}</CardType>
                    <CardPrice>
                      <CardPriceAmount>{card.pricePerDay}</CardPriceAmount> per day
                    </CardPrice>
                  </CardHeader> */}
                  <CardTitle>{card.title}</CardTitle>
                  <CardMeta>
                    <CardMetaFeature>
                      <TrendingIcon /> {card.trendingText}
                    </CardMetaFeature>
                    {/* <CardMetaFeature>
                      <TimeIcon /> {card.durationText}
                    </CardMetaFeature> */}
                    <CardMetaFeature>
                      <LocationIcon /> {card.locationText}
                    </CardMetaFeature>
                  </CardMeta>
                  <CardAction>Book Now</CardAction>
                </CardText>
              </Card>
            </CardColumn>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};
