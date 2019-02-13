import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.section`
  display: flex;
  flex-direction: ${props => (props.header ? 'row' : 'column')};
  float: ${props => (props.header ? 'right' : 'none')};
  a {
    font-size: 1.4rem;
    padding: 1rem;
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
    <Link to="/">Contact</Link>
  </Wrapper>
);

export default NavLinks;
