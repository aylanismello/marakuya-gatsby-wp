import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const NavLinksWrapper = styled.section`
  display: flex;
  flex-direction: ${props => (props.header ? 'row' : 'column')};
  width: ${props => (props.header ? '' : '4rem')};

  a {
    display: block;
    padding: ${props => (props.header ? '0 1rem' : '1rem 0')};
  }
`;


// TODO: dry this up. but how
const CustomLinkContent = styled(Link)`
  margin-bottom: ${props => (props.isActive ? '0.5rem' : '')};
  font-size: 1.4rem;
  text-decoration: none;

  &:hover {
    color: #a7a7a7;
  }
`;

const CustomAnchorContent = styled.a`
  margin-bottom: ${props => (props.isActive ? '0.5rem' : '')};
  font-size: 1.4rem;
  text-decoration: none;

  &:hover {
    color: #a7a7a7;
  }
`;

const CustomLinkWrapper = styled.div`
  border-bottom: ${props => (props.isActive ? '1px solid' : '')};
`;

const CustomLink = props => {
  const { pathname, to, children, href } = props;
  const isActive = pathname === to || pathname === `${to}/`;

  return (
    <CustomLinkWrapper isActive={isActive}>
      {href ? (
        <CustomAnchorContent isActive={isActive} href={href}>
          {children}
        </CustomAnchorContent>
      ) : (
        <CustomLinkContent isActive={isActive} to={to}>
          {children}
        </CustomLinkContent>
      )}
    </CustomLinkWrapper>
  );
};

const NavLinks = ({ header, pathname }) => (
  <NavLinksWrapper header={header}>
    <CustomLink pathname={pathname} to="/">
      Work
    </CustomLink>
    <CustomLink pathname={pathname} to="/about">
      About
    </CustomLink>
    <CustomLink pathname={pathname} to="/vita">
      Vita
    </CustomLink>
    <CustomLink pathname={pathname} href="mailto: mail@minbark.com">
      Contact
    </CustomLink>
  </NavLinksWrapper>
);

export default NavLinks;
