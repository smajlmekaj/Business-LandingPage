import React from 'react';
import styled from '@emotion/styled';

const OurStoryWrapper = styled.div`
  margin: 30px 0;
  padding: 0 30px;
  text-align: center;
`;

const TopWrapper = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: '100px',
  },
}));

const BottomWrapper = styled('div')(({ theme }) => ({
  marginTop: '40px',
  fontWeight: '400',
  fontSize: '14px',
  lineHeight: '28px',
  color: '#667085',

  ul: {
    paddingLeft: ' 10px',
    margin: ' 30px 0 10px 0',
  },
  [theme.breakpoints.up('lg')]: {
    textAlign: 'left',
    display: 'flex',
    alignItems: 'flex-end',
    marginBottom: '115px',
    p: {
      padding: '0 100px 0 0 ',
      fontSize: '18px',
    },
    ul: {
      fontSize: '18px',
      margin: ' 30px 0 10px 0',
    },
  },
}));

const BottomRight = styled('div')(({ theme }) => ({
  [theme.breakpoints.up('lg')]: {
    margin: '0 10px 40px 30px',
  },
}));

const StyledHeadingSix = styled('h6')(({ theme }) => ({
  fontWight: ' 600',
  fontSize: ' 13px',
  color: ' #1faf67',
  [theme.breakpoints.up('lg')]: {
    fontSize: '16px',
  },
}));

const StyledHeadingTwo = styled('h2')(({ theme }) => ({
  fontWeight: '600',
  fontSize: '30px',
  letterSpacing: '-0.02em',
  color: ' #101828',
  margin: '10px 0 20px 0',
  [theme.breakpoints.up('lg')]: {
    fontSize: '36px',
  },
}));

const StyledHeadingFive = styled.h5`
  font-weight: 400;
  font-size: 17px;
  line-height: 30px;
  color: #667085;
`;

const OurStory = () => {
  return (
    <OurStoryWrapper>
      <TopWrapper>
        <StyledHeadingSix>Our Story</StyledHeadingSix>
        <StyledHeadingTwo>
          We’re just getting started
        </StyledHeadingTwo>
        <StyledHeadingFive>
          We’ve already helped over 4,000 companies achieve remarkable
          results.
        </StyledHeadingFive>
      </TopWrapper>
      <BottomWrapper>
        <p>
          Morbi sed imperdiet in ipsum, adipiscing elit dui lectus.
          Tellus id scelerisque est ultricies ultricies. Duis est sit
          sed leo nisl, blandit elit sagittis. Quisque tristique
          consequat quam sed. Nisl at scelerisque amet nulla purus
          habitasse.
          <br />
          <br />
          Nunc sed faucibus bibendum feugiat sed interdum. Ipsum
          egestas condimentum mi massa. In tincidunt pharetra
          consectetur sed duis facilisis metus. Etiam egestas in nec
          sed et. Quis lobortis at sit dictum eget nibh tortor commodo
          cursus.
        </p>
        <BottomRight>
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
        </BottomRight>
      </BottomWrapper>
    </OurStoryWrapper>
  );
};

export default OurStory;
