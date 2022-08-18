import React from 'react';
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import LandingPage from './LandingPage';
import Services from './Services';
import GetStarted from './GetStarted';
import GetToKnowUs from './GetToKnowUs';
import Screens from './Screens';
import Faq from './Faq';

const Home = () => {
  return (
    <>
      <LandingPage />
      <Services />
      <GetStarted />
      <GetToKnowUs />
      <Screens />
      <Faq />
    </>
  );
};

export default Home;
