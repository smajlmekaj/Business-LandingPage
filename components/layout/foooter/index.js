import React from 'react';
import { Grid, Container } from '@mui/material';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const StyledBox = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyCntent: 'center',
  width: '100%',
  height: 'auto',
  color: ' #ffffff',
  background: ' #22b56b',
}));

const DownloadButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  img {
    width: 100%;
    max-width: 120px;
    &:nth-of-type(2) {
      margin-left: 20px;
    }
  }

  @media (min-width: 1200px) {
    justify-content: flex-end;
  }
`;

const StyledHeadingTwo = styled('h2')(({ theme }) => ({
  fontFamily: 'Poppins',
  fontStyle: 'normal',
  fontWeight: '700',
  fontSize: '30px',
  textAlign: 'center',
  [theme.breakpoints.up('lg')]: {
    textAlign: 'left',
  },
}));

const StyledParagraph = styled.p`
  font-weight: 400;
  font-size: 15px;
  text-align: center;
  margin: 10px 0 20px 0;
  @media (min-width: 1200px) {
    text-align: left;
    font-size: 20px;
    line-height: 30px;
  }
`;

const StyledParagraphSmall = styled('div')(({ theme }) => ({
  fontWeight: '400',
  fontSize: '14px',
  textAlign: 'center',
  [theme.breakpoints.up('lg')]: {
    textAlign: 'left',
  },
}));

const StyledParagraphSmallLink = styled('p')(({ theme }) => ({
  fontWeight: '400',
  fontSize: '14px',
  textAlign: 'center',
  cursor: 'pointer',
  [theme.breakpoints.up('lg')]: {
    marginLeft: '30px',
    textAlign: 'left',
  },
  [theme.breakpoints.down('lg')]: {
    marginTop: '15px',
    marginLeft: '30px',
    textAlign: 'left',
  },
}));

const Footer = () => {
  return (
    <StyledBox>
      <Container maxWidth="xl">
        <Grid
          justifyContent="center"
          alignItems="center"
          container
          sx={{
            padding: {
              xs: '19px 0 25px 0',
              lg: '39px 0 19px 0',
            },
            borderBottom: '1px solid rgba(255,255,255,0.5)',
          }}
        >
          <Grid item xs={12} lg={2}>
            <StyledHeadingTwo>Foodi App</StyledHeadingTwo>
          </Grid>
          <Grid item xs={12} lg={7}>
            <StyledParagraph>
              Powerful, self-serve product and growth
              <br />
              analytics to help you convert.
            </StyledParagraph>
          </Grid>
          <Grid item container xs={12} lg={3}>
            <DownloadButtonWrapper>
              <Link href="https://play.google.com/store/apps">
                <img
                  style={{ cursor: 'pointer' }}
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
            </DownloadButtonWrapper>
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          sx={{
            margin: {
              xs: '20px 0',
              lg: '36px 0',
            },
          }}
        >
          <Grid
            item
            xs={12}
            lg={6}
            container
            justifyContent="center"
            sx={{
              display: {
                lg: 'flex',
              },
              justifyContent: {
                lg: 'flex-start',
                xs: 'center',
              },
            }}
          >
            <StyledParagraphSmall>
              © 2022 Foodi. All rights reserved.
            </StyledParagraphSmall>
          </Grid>
          <Grid
            container
            item
            xs={12}
            lg={6}
            sx={{
              display: {
                lg: 'flex',
                xs: 'flex',
              },
              justifyContent: {
                lg: 'flex-end',
                xs: 'space-around',
              },
            }}
          >
            <Link href="/terms">
              <StyledParagraphSmallLink>
                Terms
              </StyledParagraphSmallLink>
            </Link>
            <Link href="/privacy">
              <StyledParagraphSmallLink>
                Privacy
              </StyledParagraphSmallLink>
            </Link>
            <StyledParagraphSmallLink>
              Cookies
            </StyledParagraphSmallLink>
          </Grid>
        </Grid>
      </Container>
    </StyledBox>
  );
};

export default Footer;
