import styled from '@emotion/styled';
import { Box } from '@mui/material';
import React from 'react';

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
`;

const TopWrapper = styled('div')(({ theme }) => ({
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

const FlexOfTwo = styled('div')(({ theme }) => ({
  margin: '96px 0',
  p: {
    margin: ' 20px 0',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    p: {
      fontSize: '18px',
    },
    h1: {
      fontSize: '30px',
    },
  },
}));
const FlexOfTwoReverse = styled('div')(({ theme }) => ({
  margin: '50px 0',
  p: {
    margin: ' 20px 0',
  },
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    flexDirection: 'row-reverse',
    p: {
      fontSize: '18px',
    },
    h1: {
      fontSize: '30px',
    },
  },
}));

const SideFlexWrap = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    textAlign: 'left',
    padding: '0 20px',
  },
}));

const StyledImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '720px',
  borderRadius: '10px',
  marginTop: '10px',

  [theme.breakpoints.up('lg')]: {
    margin: '20px',
  },
}));

const FlexOfTwoIcons = styled.div`
  display: flex;
  align-items: center;
`;

const StyledIcons = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 20px;
  margin-bottom: 10px;
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
        <FlexOfTwo>
          <SideFlexWrap>
            <h1>Share team inboxes</h1>
            <p>
              Whether you have a team of 2 or 200, our shared team
              inboxes keep everyone on the same page and in the loop.
            </p>
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

              <p>Automate customer support and close leads faster</p>
            </FlexOfTwoIcons>
          </SideFlexWrap>
          <StyledImage src="/imgs/Share.png" alt="some img" />
        </FlexOfTwo>
        <FlexOfTwoReverse>
          <SideFlexWrap>
            <h1>Deliver instant answers</h1>
            <p>
              An all-in-one customer service platform that helps you
              balance everything your customers need to be happy.
            </p>
            <FlexOfTwoIcons>
              <StyledIcons src="/imgs/Checkicon.png" />

              <p> Keep your customers in the loop with live chat</p>
            </FlexOfTwoIcons>
            <FlexOfTwoIcons>
              <StyledIcons src="/imgs/Checkicon.png" />

              <p>Embed help articles right on your website</p>
            </FlexOfTwoIcons>
            <FlexOfTwoIcons>
              <StyledIcons src="/imgs/Checkicon.png" />

              <p>
                Customers never have to leave the page to find an
                answer
              </p>
            </FlexOfTwoIcons>
          </SideFlexWrap>
          <StyledImage src="/imgs/Deliver.png" alt="some img" />
        </FlexOfTwoReverse>
        <FlexOfTwo>
          <SideFlexWrap>
            <h1>Manage your team with reports</h1>
            <p>
              Measure what matters with Untitled’s easy-to-use
              reports. You can filter, export, and drilldown on the
              data in a couple clicks.
            </p>
            <FlexOfTwoIcons>
              <StyledIcons src="/imgs/Checkicon.png" />

              <p>Filter, export, and drilldown on the data quickly</p>
            </FlexOfTwoIcons>
            <FlexOfTwoIcons>
              <StyledIcons src="/imgs/Checkicon.png" />

              <p>
                Save, schedule, and automate reports to your inbox
              </p>
            </FlexOfTwoIcons>
            <FlexOfTwoIcons>
              <StyledIcons src="/imgs/Checkicon.png" />
              <p>
                Connect the tools you already use with 100+
                integrations
              </p>
            </FlexOfTwoIcons>
          </SideFlexWrap>
          <StyledImage src="/imgs/Manage.png" alt="some img" />
        </FlexOfTwo>
      </div>
    </MissionWrapper>
  );
};

export default Mission;
