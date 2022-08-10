import React from 'react';
import { Container } from '@mui/material';
import styled from '@emotion/styled';
import FaqQuestions from './FaqQuestions';

const FaqWrapper = styled.div`
  margin: 40px 0;
  padding: 20px;
`;

const TopWrapper = styled.div`
  h1 {
    font-weight: 600;
    font-size: 36px;
    letter-spacing: -0.02em;
    color: #101828;
    text-align: center;
  }
  p {
    font-weight: 400;
    font-size: 20px;
    margin: 20px 0;
    color: #667085;
    text-align: center;
  }
`;

const AccordianWrapper = styled.div``;

const Faq = () => {
  return (
    <FaqWrapper>
      <Container maxWidth="md">
        <TopWrapper>
          <h1>Frequently asked questions</h1>
          <p>
            Everything you need to know about the product and billing.
          </p>
        </TopWrapper>
        <AccordianWrapper>
          <FaqQuestions />
        </AccordianWrapper>
      </Container>
    </FaqWrapper>
  );
};

export default Faq;
