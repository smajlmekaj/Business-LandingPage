import React from 'react';
import styled from '@emotion/styled';
import { Container, Grid } from '@mui/material';

const OurStoryWrapper = styled.div`
  margin-top: 60px;
  margin-bottom: 80px;

  .MuiGrid-container {
    padding: 0 30px !important;
    @media (max-width: 960px) {
      padding: 0px !important;
    }
  }
  h3 {
    font-weight: 600;
    font-size: 16px;
    color: #1faf67;
  }
  h1 {
    font-weight: 600;
    font-size: 36px;
    letter-spacing: -0.02em;
    color: #101828;
    margin: 10px 0 20px 0;
    @media (max-width: 960px) {
      font-size: 30px;
    }
  }
  p {
    font-size: 20px;
    color: #667085;
    line-height: 28px;
    @media (max-width: 960px) {
      font-size: 18px;
    }
  }

  ul {
    margin-bottom: 20px;
    padding-left: 20px;
    font-size: 20px;
    color: #667085;
    line-height: 28px;
    @media (max-width: 960px) {
      font-size: 18px;
    }
  }
`;

const OurStory = () => {
  return (
    <OurStoryWrapper>
      <Container maxWidth="xl">
        <Grid container spacing={8}>
          <Grid item lg={12} sm={12}>
            <h3>Our Story</h3>
            <h1>We’re just getting started</h1>
            <p>
              We’ve already helped over 4,000 companies achieve
              remarkable results.
            </p>
          </Grid>
          <Grid item lg={6} sm={12}>
            <p>
              Morbi sed imperdiet in ipsum, adipiscing elit dui
              lectus. Tellus id scelerisque est ultricies ultricies.
              Duis est sit sed leo nisl, blandit elit sagittis.
              Quisque tristique consequat quam sed. Nisl at
              scelerisque amet nulla purus habitasse.
              <br />
              <br />
              Nunc sed faucibus bibendum feugiat sed interdum. Ipsum
              egestas condimentum mi massa. In tincidunt pharetra
              consectetur sed duis facilisis metus. Etiam egestas in
              nec sed et. Quis lobortis at sit dictum eget nibh tortor
              commodo cursus.
            </p>
          </Grid>
          <Grid item lg={6} sm={12}>
            <ul>
              <li>
                Mi tincidunt elit, id quisque ligula ac diam, amet.
              </li>
              <li>
                Vel etiam suspendisse morbi eleifend faucibus eget
                vestibulum.
              </li>
              <li>
                Tellus aliquam enim urna, etiam. Mauris posuere
                vulputate.
              </li>
            </ul>
            <p>
              Ipsum sit mattis nulla quam nulla. Gravida id gravida ac
              enim mauris id. Non pellentesque congue eget consectetur
              turpis. Sapien, dictum molestie sem tempor. Diam elit,
              orci, tincidunt aenean tempus.
            </p>
          </Grid>
        </Grid>
      </Container>
    </OurStoryWrapper>
  );
};

export default OurStory;
