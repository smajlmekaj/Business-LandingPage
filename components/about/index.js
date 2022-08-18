import { Container } from '@mui/material';
import React from 'react';
import OurStory from './OurStory';
import Mission from './Mission';
import styled from '@emotion/styled';

const BottomWrapper = styled.div`
  height: auto;
  background: #fafef5;
  padding: 30px 0;
  text-align: center;
  h1 {
    font-weight: 600;
    font-size: 35px;
    letter-spacing: -0.02em;
    color: #22b56b;
  }
  p {
    font-weight: 500;
    font-size: 14px;
    color: #101828;
  }
  div {
    margin: 30px 0;
  }

  @media (min-width: 600px) {
    display: flex;
    justify-content: space-around;
    margin: 0 0 140px 0;

    h1 {
      font-size: 60px;
    }
    p {
      font-size: 18px;
    }
  }
`;

const About = () => {
  return (
    <>
      <OurStory />
      <Mission />

      <Container maxWidth="xl">
        <BottomWrapper>
          <div>
            <h1>400+</h1>
            <p>Projects completed</p>
          </div>
          <div>
            <h1>600%</h1>
            <p>Return on investment</p>
          </div>
          <div>
            <h1>10k</h1>
            <p>Global downloads</p>
          </div>
        </BottomWrapper>
      </Container>
    </>
  );
};

export default About;
