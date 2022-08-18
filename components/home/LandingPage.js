import React from 'react';
import { Container, Grid } from '@mui/material';
import styled from '@emotion/styled';
import Link from 'next/link';

const LandingPageWrapper = styled.div`
  background-image: linear-gradient(to bottom right, #25b46d, white);
  height: auto;
  padding-bottom: 50px;
  position: relative;
  @media (min-width: 1440px) {
    height: 840px;
    max-height: 1000px;
  }
`;

const StyledImgFirst = styled('img')(({ theme }) => ({
  width: '103.8%',
  marginTop: ' 50px',
  overflow: 'hidden',

  [theme.breakpoints.up('lg ')]: {
    right: 0,
    top: 0,
    position: 'absolute',
  },
  [theme.breakpoints.up('xl')]: {
    right: 0,
    maxWidth: '900px',
    position: 'absolute',
    top: '10px',
  },
}));

const StyledHeading = styled('h1')(({ theme }) => ({
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '35px',
  [theme.breakpoints.up('lg')]: {
    fontSize: '70px',
    marginTop: '240px',
  },
}));

const DownloadApp = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 20px;
  img {
    width: 100%;
    max-width: 120px;
    &:nth-of-type(2) {
      margin-left: 20px;
    }
  }
`;

const StyledParagraph = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
`;

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <Container maxWidth="xl">
        <Grid
          container
          alignItems="center"
          direction="row-reverse"
          sx={{
            color: 'white',
          }}
        >
          <Grid item sm={6} xs={12}>
            <StyledImgFirst src="/imgs/mobile-mockup.png" />
          </Grid>
          <Grid
            item
            sm={6}
            xs={12}
            sx={{
              marginTop: '10px',
              padding: {
                lg: '0 0 0 50px',
              },
            }}
          >
            <StyledHeading>
              Present
              <br /> Foodi App
            </StyledHeading>
            <StyledParagraph>
              Powerful, self-serve product and growth
              <br /> analytics to help you convert.
            </StyledParagraph>
            <DownloadApp>
              <Link href="https://play.google.com/store/apps">
                <img
                  style={{ cursor: 'pointer', width: '100%' }}
                  src="/imgs/google-play.svg"
                  alt="some image"
                />
              </Link>

              <Link href="https://www.apple.com/app-store/">
                <img
                  style={{ cursor: 'pointer' }}
                  src="/imgs/app-store.svg"
                  alt="some image"
                />
              </Link>
            </DownloadApp>
          </Grid>
        </Grid>
      </Container>
    </LandingPageWrapper>
  );
};

export default LandingPage;
