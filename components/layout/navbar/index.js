import {
  Grid,
  Container,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import styled from '@emotion/styled';
import DrawerMenu from './DrawerMenu';

const NavbarWrapper = styled.div``;

const StyledHeadingTwo = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  color: #1faf67;
  cursor: pointer;
`;

const StyledUl = styled.ul`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  li {
    cursor: pointer;
    margin: 0 32px;
    list-style: none;
    color: inherit;
    font-weight: 500;
    font-size: 16px;
    color: #667085;
    &:hover {
      text-decoration: underline;
      text-decoration-color: #1faf67;
      text-decoration-thickness: 3px;
    }
  }
`;

const DrawerWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
`;

const NavBar = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Container maxWidth="xl">
      {isMatch ? (
        <DrawerWrapper>
          <Link href="/">
            <StyledHeadingTwo>Foodi App</StyledHeadingTwo>
          </Link>
          <DrawerMenu />
        </DrawerWrapper>
      ) : (
        <NavbarWrapper>
          <Grid
            container
            sx={{ margin: '18px 0 23px 0' }}
            alignItems="center"
          >
            <Grid item lg={2}>
              <Link href="/">
                <StyledHeadingTwo>Foodi App</StyledHeadingTwo>
              </Link>
            </Grid>
            <Grid item lg={10}>
              <StyledUl>
                <Link href="/">
                  <li>Home </li>
                </Link>
                <Link href="/about">
                  <li>About Us </li>
                </Link>
                <Link href="/contact">
                  <li>Contact </li>
                </Link>
              </StyledUl>
            </Grid>
          </Grid>
        </NavbarWrapper>
      )}
    </Container>
  );
};

export default NavBar;
