import React from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';

const LandingPageWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('xl')]: {
    height: '850px',
    maxHeight: '1000px',
  },
}));

const StyledImgFirst = styled('img')(({ theme }) => ({
  width: '104%',
  maxWidth: '900px',
  marginTop: ' 50px',

  [theme.breakpoints.up('lg ')]: {
    width: '100%',
    maxWidth: '700px',
    right: 0,
    position: 'absolute',
    top: 0,
  },
  [theme.breakpoints.up('xl')]: {
    right: 0,
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
  align-items: center;
  margin-top: 20px;
`;

const StyledParagraph = styled.div`
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
`;

const LandingPage = () => {
  return (
    <LandingPageWrapper>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
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
            <Image
              src="/imgs/google-play.svg"
              width="140px"
              height="38px"
            />
            <Image
              src="/imgs/app-store.svg"
              width="140px"
              height="38px"
            />
          </DownloadApp>
        </Grid>
      </Grid>
    </LandingPageWrapper>
  );
};

export default LandingPage;
