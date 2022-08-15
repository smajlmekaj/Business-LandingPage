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
  [theme.breakpoints.up('lg')]: {
    height: '207px',
  },
}));

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

const StyledParagraph = styled('div')(({ theme }) => ({
  fontWeight: '400',
  fontSize: '15px',
  margin: '10px 0',
  textAlign: 'center',
  [theme.breakpoints.up('lg')]: {
    fontSize: '20px',
    textAlign: 'left',
  },
}));

const StyledParagraphSmall = styled('div')(({ theme }) => ({
  fontWeight: '400',
  fontSize: '14px',
  textAlign: 'center',
  [theme.breakpoints.up('lg')]: {
    textAlign: 'left',
  },
}));

const StyledParagraphSmallLink = styled('div')(({ theme }) => ({
  fontWeight: '400',
  fontSize: '14px',
  textAlign: 'center',
  cursor: 'pointer',
  [theme.breakpoints.up('lg')]: {
    marginLeft: '30px',
    textAlign: 'left',
  },
  [theme.breakpoints.down('lg')]: {
    margin: '20px 0',
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
            padding: '20px 0 15px 0',
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
          <Grid
            item
            container
            xs={12}
            lg={3}
            alignItems="center"
            justifyContent="center"
            sx={{
              display: {
                lg: 'flex',
              },
              justifyContent: {
                lg: 'flex-end',
                xs: 'center',
              },
            }}
          >
            <Image
              src="/imgs/google-play.svg"
              width="120px"
              height="32px"
            />
            <Image
              src="/imgs/app-store.svg"
              width="120px"
              height="32px"
            />
          </Grid>
        </Grid>
        <Grid
          container
          justifyContent="space-between"
          sx={{ marginTop: '30px' }}
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
