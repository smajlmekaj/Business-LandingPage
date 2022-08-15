import { Container } from '@mui/material';
import React from 'react';
import OurStory from './OurStory';
import Mission from './Mission';
import styled from '@emotion/styled';

const BottomWrapper = styled('div')(({ theme }) => ({
  height: 'auto',
  background: '#fafef5',
  padding: '30px 0',
  textAlign: 'center',
  div: {
    margin: '25px 0',
  },

  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    justifyContent: 'space-around',
    margin: ' 0 0 140px 0 ',
  },
}));

const StyledNumber = styled.h1`
  font-weight: 600;
  font-size: 60px;
  letter-spacing: -0.02em;
  color: #22b56b;
`;

const StyledHeadingFive = styled.h5`
  font-weight: 500;
  font-size: 18px;
  color: #101828;
`;

const About = () => {
  return (
    <>
      <OurStory />
      <Mission />

      <Container maxWidth="xl">
        <BottomWrapper>
          <div>
            <StyledNumber>400+</StyledNumber>
            <StyledHeadingFive>Projects completed</StyledHeadingFive>
          </div>
          <div>
            <StyledNumber>600%</StyledNumber>
            <StyledHeadingFive>
              Return on investment
            </StyledHeadingFive>
          </div>
          <div>
            <StyledNumber>10k</StyledNumber>
            <StyledHeadingFive>Global downloads</StyledHeadingFive>
          </div>
        </BottomWrapper>
      </Container>
    </>
  );
};

export default About;
