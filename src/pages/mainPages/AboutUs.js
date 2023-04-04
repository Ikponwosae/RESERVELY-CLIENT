import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Reservely</Subheading>}
        heading="We are a modern agency."
        buttonRounded={false}
        // primaryButtonText="See Portfolio"
        imageSrc="https://dumolulubriggsyouthfoundation.org/wp-content/uploads/2016/03/about-us2.png"
      />
      <MainFeature3
        subheading={<Subheading>Our Vision</Subheading>}
        heading=""
        buttonRounded={false}
        // primaryButtonText="Contact Us"
        imageSrc="https://www.ulutrading.com/upload/galeri/our-vision.png"
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description=""
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Support",
            description: "At Reservely, we understand that scheduling appointments can be a crucial aspect of running a successful business. We also understand that issues can arise at any time, day or night. That's why we offer 24/7 support as one of our core values."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Strong Teams",
            description: "We understand that every team member has unique strengths and skill sets, and we strive to create an environment that fosters collaboration and mutual support. We encourage open communication and value constructive feedback, recognizing that this is essential for growth and improvement."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "We understand that our clients' satisfaction is key to building long-lasting relationships, which is why we prioritize their needs and ensure that their experience with our platform is positive and rewarding. From the initial sign-up process to ongoing support, we are committed to delivering the highest level of customer service to our clients."
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading>Our Team</Subheading>}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
