import { Container, Grid } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

const SectionWrapper = styled.div`
  background: #fafef5;
  margin: 50px 0 0 0;
  padding: 50px 0;
  height: auto;
`;

const GetToKnowUsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h6 {
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #22b56b;
    text-align: center;
  }

  h3 {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.02em;
    color: #101828;
    text-align: center;
    margin: 12px 0 20px 0;
  }

  p {
    font-weight: 400;
    font-size: 18px;
    color: #667085;
    text-align: left;
    line-height: 30px;
  }

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    padding: 0 60px 0 0;
    p {
      font-size: 20px;
    }
  }
`;

const StyledImage = styled.div`
  img {
    width: 100%;
    height: auto;
    max-width: 576px;
    max-height: 496px;
    margin: 20px 0;
  }

  @media (min-width: 1200px) {
    width: 576px;
  }
`;

const GetToKnowUs = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          sx={{
            display: {
              sm: 'flex',
            },
            justifyContent: {
              xl: 'center',
            },
            margin: {
              lg: '50px',
            },
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            container
            alignItems="center"
            justifyContent="center"
          >
            <GetToKnowUsWrapper>
              <h6>Get to know us</h6>
              <h3>We're just getting started</h3>
              <p>
                Untitled is growing fast, and we are always looking
                for passionate, dynamic, and talented individuals to
                join our distributed team all around the world.
                <br />
                <br />
                Our philisophy is simple — hire a team of diverse,
                passionate people and foster a culture that empowers
                you to do you best work. Read more about.
              </p>
            </GetToKnowUsWrapper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <StyledImage>
              <img src="/imgs/Contents.png" alt="some image" />
            </StyledImage>
          </Grid>
        </Grid>
      </Container>
    </SectionWrapper>
  );
};

export default GetToKnowUs;
