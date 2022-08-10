import { Container, Grid } from '@mui/material';
import React from 'react';
import styled from '@emotion/styled';

const SectionWrapper = styled('div')(({ theme }) => ({
  background: '#fafef5',
  margin: '50px 0 0 0',
  padding: ' 50px 0',
  height: 'auto',
}));

const GetToKnowUsWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    textAlign: 'left',
    padding: '0 200px 0 0',
  },
  [theme.breakpoints.down('md')]: {
    margin: '0 50px 0 50px',
  },
}));

const StyledImage = styled('div')(({ theme }) => ({
  img: {
    width: '100%',
    maxWidth: '576px',
    height: 'auto',
    maxHeight: '496px',
    margin: '20px 0',
  },
  [theme.breakpoints.up('lg')]: {
    width: '576px',
  },
}));

const StyledHeadingSix = styled.h6`
  font-weight: 600;
  font-size: 16px;
  color: #22b56b;
  text-align: center;
`;
const StyledHeadingThree = styled.h3`
  font-weight: 600;
  font-size: 36px;
  letter-spacing: -0.02em;
  color: #101828;
  text-align: center;
  margin: 12px 0 20px 0;
`;
const StyledParagraph = styled.div`
  font-weight: 400;
  font-size: 18px;
  color: #667085;
  text-align: left;
`;

const GetToKnowUs = () => {
  return (
    <SectionWrapper>
      <Container maxWidth="xl">
        <Grid
          conainer
          height="auto"
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
            container
            alignItems="center"
            justifyContent="center"
          >
            <GetToKnowUsWrapper>
              <StyledHeadingSix>Get to know us</StyledHeadingSix>
              <StyledHeadingThree>
                We're just getting started
              </StyledHeadingThree>
              <StyledParagraph>
                Untitled is growing fast, and we are always looking
                for passionate, dynamic, and talented individuals to
                join our distributed team all around the world.
                <br />
                <br />
                Our philisophy is simple — hire a team of diverse,
                passionate people and foster a culture that empowers
                you to do you best work. Read more about.
              </StyledParagraph>
            </GetToKnowUsWrapper>
          </Grid>
          <Grid item xs={12}>
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
