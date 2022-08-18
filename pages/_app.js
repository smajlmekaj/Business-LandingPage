import { Global, css } from '@emotion/react';
import Layout from '../components/layout';
import { ThemeProvider } from '@mui/material';
import { theme } from './index';
import Cookie from '../components/cookie';

const GlobalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: #ffffff;
  }

  a {
    text-decoration: none;
    color: inherit;
    list-style: none;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Global styles={GlobalStyles} />
        <Cookie />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
