import React from 'react';
import styled from '@emotion/styled';
import { Container } from '@mui/material';

const ScreensWrapper = styled.div`
  background-image: linear-gradient(to bottom right, #25b46d, white);
`;

const StyledImages = styled.img`
  width: 100%;
  margin: 67px 0 78px 0;
  @media (max-width: 900px) {
    margin: 37px 0 48px 0;
  }
`;

const Screens = () => {
  return (
    <ScreensWrapper>
      <Container maxWidth="xl">
        <StyledImages src="/imgs/Screens.png" alt="some image" />
      </Container>
    </ScreensWrapper>
  );
};

export default Screens;
