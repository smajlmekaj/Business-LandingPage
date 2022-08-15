import styled from '@emotion/styled';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const CookieWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  zIndex: '999',
  bottom: '10px',

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  background: 'white',
  padding: '20px',
  borderRadius: '10px',
  width: '100%',
  maxWidth: '775px',
  [theme.breakpoints.up('lg')]: {
    left: '500px',
  },
}));

const StyledHeadingThree = styled('h3')(({ theme }) => ({
  fontWeight: '700',
  fontSize: '25px',
  letterSpacing: '0.02em',
  color: '#1A1E25',
}));

const StyledParagraph = styled('p')(({ theme }) => ({
  fontWeight: '300',
  fontSize: '14px',
  color: '#000000',
  margin: '20px 0 16px 0',
  span: {
    textDecoration: 'underline',
  },
}));

const StyledButton = styled('button')(({ theme }) => ({
  padding: '8px 14px',
  border: 'none',
  borderRadius: ' 8px',
  background: '#1FAF67',
  color: 'white',
  marginRight: '20px',
  cursor: 'pointer',
}));

const FlexOfTwo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  p: {
    fontEeight: '500',
    fontSize: '13px',
    textDecoration: 'underline',
    color: '#667085',
  },
}));

const TopWrapper = styled('div')(({ theme }) => ({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
}));

// *******************

const Cookie = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let flag = localStorage.getItem('showModal') == 'true';
    if (!flag) {
      setIsOpen(true);
    }
  }, []);

  const handleClick = () => {
    setIsOpen(false);
    localStorage.setItem('showModal', 'true');
  };

  if (isOpen == false) {
    return null;
  }

  return (
    <CookieWrapper>
      <TopWrapper>
        <StyledHeadingThree>Cookies</StyledHeadingThree>
        <CloseIcon
          onClick={handleClick}
          style={{
            padding: '4px',
            backgroundColor: '#F5F5F5',
            cursor: 'pointer',
          }}
        />
      </TopWrapper>
      <StyledParagraph>
        We use cookies to improve your experience on our site and to
        display relevant advertisements To learn more, read our
        <span>
          <Link href="/privacy"> privacy policy </Link>
        </span>
        and
        <span>
          <Link href="/terms"> terms of service. </Link>
        </span>
      </StyledParagraph>

      <FlexOfTwo>
        <StyledButton onClick={handleClick}>Ok</StyledButton>
        <p>Show more</p>
      </FlexOfTwo>
    </CookieWrapper>
  );
};

export default Cookie;
