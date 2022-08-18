import styled from '@emotion/styled';
import { Grid } from '@mui/material';
import React from 'react';
import { Container } from '@mui/material';

const MissionWrapper = styled.div`
  text-align: center;
  padding: 30px 0;
  color: #667085;
  h1 {
    font-weight: 600;
    font-size: 24px;
    color: #101828;
  }
  p,
  div {
    font-weight: 400;
    font-size: 15px;
    color: #667085;
  }
  .MuiContainer-root {
    height: 100% !important;
  }
  .MuiGrid-container {
    height: 100% !important;
    padding: 0 30px !important;
    @media (max-width: 960px) {
      padding: 0px !important;
    }
  }
`;

const TopWrapper = styled('div')(({ theme }) => ({
  padding: '10px',
  margin: ' 0 0 40px 0',
  h2: {
    fontWight: '600',
    fontSize: '30px',
    textAlign: 'center',
    color: ' #101828',
    marginBottom: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    h2: {
      fontSize: '36px',
    },
    p: {
      fontSize: '20px',
      padding: '0 300px',
    },
  },
}));

const GridWrapper = styled('div')(({ theme }) => ({
  margin: '50px 0',
  [theme.breakpoints.up('lg')]: {
    position: 'relative',
    height: '560px',
    margin: '96px 0',
  },
}));

const ImageWrapperRight = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    maxWidth: '50%',
    position: 'absolute',
    top: '0',
    left: '50%',
    width: '100%',
    height: '100%',
  },
}));

const ImageWrapperLeft = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    maxWidth: '50%',
    position: 'absolute',
    top: '0',
    right: '50%',
    height: '100%',
    width: '100%',
  },
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  marginTop: '10px',

  [theme.breakpoints.down('lg')]: {
    padding: '10px',
    borderRadius: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    margin: '0',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
}));

const FlexOfTwoIcons = styled.div`
  padding: 5px 0;
  display: flex;
  align-items: center;
`;

const IconsList = styled.div`
  margin: 30px 20px 20px 20px;
`;

const StyledIcons = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  margin-bottom: 10px;
`;

const ContentWrapper = styled.div`
  padding-right: 60px;
  text-align: left;
`;
const ContentWrapperMiddle = styled.div`
  padding-left: 90px;
  text-align: left;
  @media (max-width: 1200px) {
    padding-left: 0;
  }
`;

const Mission = () => {
  return (
    <MissionWrapper>
      <TopWrapper>
        <h2>We’re a mission driven company</h2>
        <p>
          Powerful, self-serve product and growth analytics to help
          you convert, engage, and retain more users. Trusted by over
          4,000 startups.
        </p>
      </TopWrapper>
      <div>
        <GridWrapper>
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              spacing={4}
            >
              <Grid item xs={12} lg={6}>
                <ContentWrapper>
                  <h1>Share team inboxes</h1>
                  <p>
                    Whether you have a team of 2 or 200, our shared
                    team inboxes keep everyone on the same page and in
                    the loop.
                  </p>
                  <IconsList>
                    <FlexOfTwoIcons>
                      <StyledIcons src="/imgs/Checkicon.png" />

                      <p>Leverage automation to move fast</p>
                    </FlexOfTwoIcons>
                    <FlexOfTwoIcons>
                      <StyledIcons src="/imgs/Checkicon.png" />

                      <p> Always give customers a human to chat to</p>
                    </FlexOfTwoIcons>
                    <FlexOfTwoIcons>
                      <StyledIcons src="/imgs/Checkicon.png" />

                      <p>
                        Automate customer support and close leads
                        faster
                      </p>
                    </FlexOfTwoIcons>
                  </IconsList>
                </ContentWrapper>
              </Grid>
              <Grid item xs={12} lg={6}>
                <ImageWrapperRight>
                  <StyledImage src="/imgs/Share.png" alt="some img" />
                </ImageWrapperRight>
              </Grid>
            </Grid>
          </Container>
        </GridWrapper>
        <GridWrapper>
          <Container maxWidth="xl">
            <Grid
              container
              alignItems="center"
              direction="row-reverse"
            >
              <Grid item xs={12} lg={6}>
                <ContentWrapperMiddle>
                  <h1>Deliver instant answers</h1>
                  <p>
                    An all-in-one customer service platform that helps
                    you balance everything your customers need to be
                    happy.
                  </p>
                  <IconsList>
                    <FlexOfTwoIcons>
                      <StyledIcons src="/imgs/Checkicon.png" />

                      <p>
                        Keep your customers in the loop with live chat
                      </p>
                    </FlexOfTwoIcons>
                    <FlexOfTwoIcons>
                      <StyledIcons src="/imgs/Checkicon.png" />

                      <p>Embed help articles right on your website</p>
                    </FlexOfTwoIcons>
                    <FlexOfTwoIcons>
                      <StyledIcons src="/imgs/Checkicon.png" />

                      <p>
                        Customers never have to leave the page to find
                        an answer
                      </p>
                    </FlexOfTwoIcons>
                  </IconsList>
                </ContentWrapperMiddle>
              </Grid>
              <Grid item xs={12} lg={6}>
                <ImageWrapperLeft>
                  <StyledImage
                    src="/imgs/Deliver.png"
                    alt="some img"
                  />
                </ImageWrapperLeft>
              </Grid>
            </Grid>
          </Container>
        </GridWrapper>
        <GridWrapper>
          <Container maxWidth="xl">
            <Grid
              container
              justifyContent="space-between"
              alignItems="center"
              spacing={2}
            >
              <Grid item xs={12} lg={6}>
                <ContentWrapper>
                  <h1>Manage your team with reports</h1>
                  <p>
                    Measure what matters with Untitled&rsquo;s
                    easy-to-use reports. You can filter, export, and
                    drilldown on the data in a couple clicks.
                  </p>
                  <IconsList>
                    <FlexOfTwoIcons>
                      <StyledIcons src="/imgs/Checkicon.png" />

                      <p>
                        Filter, export, and drilldown on the data
                        quickly
                      </p>
                    </FlexOfTwoIcons>
                    <FlexOfTwoIcons>
                      <StyledIcons src="/imgs/Checkicon.png" />

                      <p>
                        Save, schedule, and automate reports to your
                        inbox
                      </p>
                    </FlexOfTwoIcons>
                    <FlexOfTwoIcons>
                      <StyledIcons src="/imgs/Checkicon.png" />
                      <p>
                        Connect the tools you already use with 100+
                        integrations
                      </p>
                    </FlexOfTwoIcons>
                  </IconsList>
                </ContentWrapper>
              </Grid>
              <Grid item xs={12} lg={6}>
                <ImageWrapperRight>
                  <StyledImage
                    src="/imgs/Manage.png"
                    alt="some img"
                  />
                </ImageWrapperRight>
              </Grid>
            </Grid>
          </Container>
        </GridWrapper>
      </div>
    </MissionWrapper>
  );
};

export default Mission;
