import React from 'react';
import { Grid } from '@mui/material';
import styled from '@emotion/styled';
import SmileIcon from '../svgIcons/SmileIcon.js';
import DeliverIcon from '../svgIcons/DeliverIcon.js';
import PlateIcon from '../svgIcons/PlateIcon.js';
import { Container } from '@mui/material';

const ServicesWrapper = styled.div`
  background-color: white;
  height: auto;
  display: flex;
  align-items: center;
  margin: 100px 0;
`;

const SecionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;

  .icons-div {
    margin-bottom: 20px;
    padding: 5px 5px 1px 5px;
    border-radius: 50px;
    background-color: #22b56b;
  }
`;

const StyledHeadingOne = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: #101828;
`;

const StyledParagraph = styled.div`
  font-weight: 400;
  font-size: 16px;
  color: #667085;
  line-height: 24px;
  margin: 16px 0;
`;

const Jobs = () => {
  return (
    <ServicesWrapper>
      <Container maxWidth="xl">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item lg={4}>
            <SecionWrapper>
              <div className="icons-div">
                <SmileIcon className="icons" />
              </div>
              <StyledHeadingOne>Share team inboxes</StyledHeadingOne>
              <StyledParagraph>
                Whether you have a team of 2 or 200, our shared team
                inboxes keep everyone on the same page and in the
                loop.
              </StyledParagraph>
            </SecionWrapper>
          </Grid>
          <Grid item lg={4}>
            <SecionWrapper>
              <div className="icons-div">
                <DeliverIcon className="icons" />
              </div>
              <StyledHeadingOne>Share team inboxes</StyledHeadingOne>
              <StyledParagraph>
                Whether you have a team of 2 or 200, our shared team
                inboxes keep everyone on the same page and in the
                loop.
              </StyledParagraph>
            </SecionWrapper>
          </Grid>
          <Grid item lg={4}>
            <SecionWrapper>
              <div className="icons-div">
                <PlateIcon className="icons" />
              </div>
              <StyledHeadingOne>Share team inboxes</StyledHeadingOne>
              <StyledParagraph>
                Whether you have a team of 2 or 200, our shared team
                inboxes keep everyone on the same page and in the
                loop.
              </StyledParagraph>
            </SecionWrapper>
          </Grid>
        </Grid>
      </Container>
    </ServicesWrapper>
  );
};

export default Jobs;
