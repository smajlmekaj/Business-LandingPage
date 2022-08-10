import React from 'react';
import { Container, Grid, Button } from '@mui/material';
import styled from '@emotion/styled';
import Link from 'next/link';

const GetstartedWrapper = styled('div')(({ theme }) => ({
  margin: '90px 0',
  [theme.breakpoints.up('lg')]: {
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: '20px',
    padding: '0',
    margin: '0 100px 0 50px',
  },
}));

const GetstartedButtonWraper = styled.div``;

const LeftSideWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '20px',
  },

  [theme.breakpoints.up('md')]: {
    margin: '0 30px 0 0',
  },

  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: '100px',
  },
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '359px',
  height: '280px',
  borderRadius: '20px',
  [theme.breakpoints.up('lg')]: {
    width: '100%',
    paddingLeft: '70px',
    height: '400px',
  },
  [theme.breakpoints.up('xl')]: {
    width: '100%',
    paddingLeft: '100px',
    height: '400px',
  },
}));

const StyledHeadingTwo = styled('h2')(({ theme }) => ({
  fontWeight: '600',
  fontSize: '30px',
  color: '#101828',
  [theme.breakpoints.up('lg')]: {
    fontSize: '40px',
  },
}));

const StyledParagraph = styled('div')(({ theme }) => ({
  fontWight: '400',
  fontSize: '17px',
  margin: '20px 0',
  textAlign: ' center',
  color: '#667085',
  [theme.breakpoints.up('lg')]: {
    textAlign: ' left',
  },
}));

const GetStarted = () => {
  return (
    <Container maxWidth="xl">
      <GetstartedWrapper>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <LeftSideWrapper>
              <StyledHeadingTwo>Give us a shot</StyledHeadingTwo>
              <StyledParagraph>
                Our philisophy is simple — hire a team of diverse,
                passionate people and foster a culture that empowers
                you to do you best work. Read more about
              </StyledParagraph>
              <GetstartedButtonWraper>
                <Link href="/about">
                  <Button
                    variant="outlined"
                    size="medium"
                    style={{
                      color: ' #344054',
                      borderColor: 'rgba(16, 24, 40, 0.2)',
                      textTransform: 'inherit',
                      marginRight: '12px',
                    }}
                  >
                    Learn more
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="contained"
                    size="medium"
                    style={{
                      backgroundColor: '#22B56B',
                      textTransform: 'inherit',
                    }}
                  >
                    Get started
                  </Button>
                </Link>
              </GetstartedButtonWraper>
            </LeftSideWrapper>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            container
            justifyContent="center"
            alignItems="center"
          >
            <StyledImage src="/imgs/getStarted.png" alt="some img" />
          </Grid>
        </Grid>
      </GetstartedWrapper>
    </Container>
  );
};

export default GetStarted;
