import React from 'react';
import Home from '../components/home';
import { createTheme } from '@mui/material/styles';
import Cookie from '../components/cookie';

export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1440,
      xxl: 2000,
    },
  },
});

const HomePage = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

export default HomePage;
