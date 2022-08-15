import React from 'react';
import { Container, Grid, Button } from '@mui/material';
import styled from '@emotion/styled';
import Link from 'next/link';

const GetstartedWrapper = styled.div`
  margin: 90px 0;
  border-radius: 20px;
  max-width: 1300px;

  img {
    width: 100%;
    max-width: 480px;
    height: 280px;
    border-radius: 20px;
  }

  @media (min-width: 1200px) {
    border: 1px solid rgba(0, 0, 0, 0.2);
    margin-left: 60px;

    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      margin-left: auto;
    }
  }
`;

const LeftSideWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;

  h2 {
    font-weight: 600;
    font-size: 30px;
    color: #101828;
  }

  p {
    font-weight: 400;
    font-size: 17px;
    margin: 20px 0;
    line-height: 24px;
    text-align: center;
    color: #667085;
  }

  @media (min-width: 1200px) {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-left: 61px;
    h2 {
      font-size: 40px;
    }
    p {
      text-align: left;
    }
  }
`;

const GetStarted = () => {
  return (
    <Container maxWidth="xl">
      <GetstartedWrapper>
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} md={7}>
            <LeftSideWrapper>
              <h2>Give us a shot</h2>
              <p>
                Our philisophy is simple — hire a team of diverse,
                passionate people and foster a culture that empowers
                you to do you best work. Read more about
              </p>
              <div>
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
              </div>
            </LeftSideWrapper>
          </Grid>
          <Grid
            item
            xs={12}
            md={5}
            container
            justifyContent="center"
            alignItems="center"
          >
            <img src="/imgs/getStarted.png" alt="some img" />
          </Grid>
        </Grid>
      </GetstartedWrapper>
    </Container>
  );
};

export default GetStarted;
