import React from 'react';
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import LandingPage from './LandingPage';
import Services from './Services';
import GetStarted from './GetStarted';
import GetToKnowUs from './GetToKnowUs';
import Screens from './Screens';
import Faq from './Faq';

const HeroWrapper = styled.div`
  background-image: linear-gradient(
    to bottom right,
    #25b46d,
    #dcf2e6
  );

  height: auto;
  padding-bottom: 50px;
  position: relative;
`;

const Home = () => {
  return (
    <>
      <HeroWrapper>
        <Container maxWidth="xl">
          <LandingPage />
        </Container>
      </HeroWrapper>
      <Services />
      <GetStarted />
      <GetToKnowUs />
      <Screens />
      <Faq />
    </>
  );
};

export default Home;
