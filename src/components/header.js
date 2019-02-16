import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import NavLinks from './nav_links';

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const SiteName = styled.div`
  .site-name-header {
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 1.17;
    @media (min-width: 768px) {
      font-size: 2rem;
      line-height: 1.2;
    }
  }
  .site-name-subheader {
    font-size: 1.4rem;
    line-height: 1.14;

    @media (min-width: 768px) {
      font-size: 1.8rem;
      line-height: 1.22;
    }
  }
`;

const Header = ({ pathname }) => (
  <Wrapper>
    <SiteName>
      <Link to="/">
        <div className="site-name-header">Min Bark</div>
      </Link>
      <div className="site-name-subheader">Artist</div>
    </SiteName>
    <NavLinks style={{ float: 'right' }} header pathname={pathname} />
  </Wrapper>
);

export default Header;
