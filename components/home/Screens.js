import React from 'react';
import styled from '@emotion/styled';
import { Container } from '@mui/material';

const ScreensWrapper = styled.div`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(
    to bottom right,
    #25b46d,
    #dcf2e6
  );
  padding-top: 30px;
`;

const StyledImages = styled.img`
  width: 101%;
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
