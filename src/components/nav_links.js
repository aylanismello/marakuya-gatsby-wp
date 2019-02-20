import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavLinksWrapper = styled.section`
  display: flex;
  flex-direction: ${props => (props.linksLocation === 'header' ? 'row' : 'column')};
  width: ${props => (props.linksLocation === 'footer' ? '4rem' : '')};
  align-items: ${props => (props.linksLocation === 'menu' ? 'center' : '')};

  position: ${props => (props.linksLocation === 'menu' ? 'absolute' : '')};
  top: ${props => (props.linksLocation === 'menu' ? '20%' : '')};
`;

// TODO: dry this up. but how
// TODO: add more margin to border bottom
const CustomLinkContent = styled(Link)`
  /* margin-bottom: ${props => (props.isActive && props.linksLocation !== 'footer' ? '0.5rem' : '')}; */
  font-size: ${props => (props.linksLocation === 'menu' ? '2.4rem' : '1.4rem')};
  border-bottom: ${props => (props.isActive ? '1px solid' : '')};

  &:hover {
    color: #a7a7a7;
  }
`;

const CustomAnchorContent = styled.a`
  margin-bottom: ${props => (props.isActive ? '0.5rem' : '')};
  font-size: ${props => (props.linksLocation === 'menu' ? '2.4rem' : '1.4rem')};

  &:hover {
    color: #a7a7a7;
  }
`;

const CustomLinkWrapper = styled.div`
  padding: ${props => (props.linksLocation === 'header' ? '0 1rem' : '0.6rem 0')};
  @media (max-width: 767px) {
    padding: ${props => (props.linksLocation === 'menu' ? '1.2em 0' : '0.6rem 0')};
  }
`;

const CustomLink = props => {
  const { pathname, to, children, href, linksLocation } = props;
  const isActive = pathname === to || pathname === `${to}/`;

  return (
    <CustomLinkWrapper
      linksLocation={linksLocation}
      isActive={isActive}
      className="custom-link"
    >
      {href ? (
        <CustomAnchorContent
          linksLocation={linksLocation}
          isActive={isActive}
          href={href}
        >
          {children}
        </CustomAnchorContent>
      ) : (
        <CustomLinkContent
          linksLocation={linksLocation}
          isActive={isActive}
          to={to}
        >
          {children}
        </CustomLinkContent>
      )}
    </CustomLinkWrapper>
  );
};

const NavLinks = ({ linksLocation, pathname }) => (
  <NavLinksWrapper linksLocation={linksLocation}>
    <CustomLink linksLocation={linksLocation} pathname={pathname} to="/">
      Work
    </CustomLink>
    <CustomLink linksLocation={linksLocation} pathname={pathname} to="/about">
      About
    </CustomLink>
    <CustomLink linksLocation={linksLocation} pathname={pathname} to="/vita">
      Vita
    </CustomLink>
    <CustomLink
      linksLocation={linksLocation}
      pathname={pathname}
      href="mailto: mail@minbark.com"
      className="custom-link"
    >
      Contact
    </CustomLink>
  </NavLinksWrapper>
);

export default NavLinks;
