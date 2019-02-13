import React from 'react';
import styled from 'styled-components';
import NavLinks from './nav_links';

const Wrapper = styled.nav`
  /* padding: 1.2rem; */
`;

const SiteName = styled.div`
  float: left;
  h1 {
    font-size: 1.6rem;
    line-height: 1.17;
    @media (min-width: 768px) {
      font-size: 2rem;
      line-height: 1.2;
    }
  }
  span {
    font-size: 1.4rem;
    line-height: 1.14;

    @media (min-width: 768px) {
      font-size: 1.8rem;
      line-height: 1.22;
    }
  }
`;

const Header = () => (
  <Wrapper>
    <SiteName>
      <h1>Min Bark</h1>
      <span>Artist</span>
    </SiteName>
    <NavLinks style={{ float: 'right' }} header />
  </Wrapper>
);

export default Header;
