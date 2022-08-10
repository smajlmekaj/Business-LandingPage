import styled from '@emotion/styled';
import React from 'react';
import Footer from './foooter';
import NavBar from './navbar';

const Layout = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
