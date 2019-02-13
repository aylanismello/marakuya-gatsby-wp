import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.section`
  display: flex;
  flex-direction: ${props => (props.header ? 'row' : 'column')};
  
  a {
    font-size: 1.4rem;
    padding: ${props => (props.header ? '0 1rem' : '0.5rem 0')};
    text-decoration: none;
    &:hover {
      color: #a7a7a7;
    }
  }
`;

const NavLinks = ({ header }) => (
  <Wrapper header={header} >
    <Link to="/">Work</Link>
    <Link to="/">About</Link>
    <Link to="/">Vita</Link>
    <a href="mailto: mail@minbark.com">Contact</a>
  </Wrapper>
);

export default NavLinks;
