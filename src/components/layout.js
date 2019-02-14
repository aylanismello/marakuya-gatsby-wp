import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Header from './header';
import Footer from './footer';

// https://www.styled-components.com/docs/api
// hard resets are done here
const GlobalStyle = createGlobalStyle`
  html {
    font-size: 10px;
  }

  a {
    text-decoration: none;
    color: #4a4a4a;
  }
`;

const Wrapper = styled.div`
  font-family: "Asap";
  padding: 1rem;
  background: #f8f8f8;
  color: #4a4a4a;
  
  @media (min-width: 768px) {
    padding: 2rem;
  }
  @media (min-width: 1440px) {
    padding: 4rem;
  }
  `;

const Container = styled.div`
  background: #ffffff;
  padding: 1.2rem;

  @media (min-width: 768px) {
    padding: 2rem;
  }
  @media (min-width: 1440px) {
    padding: 4rem;
  }
`;

const Content = styled.div`
  font-size: 1.4rem;
  line-height: 2.2rem;
  margin: 0px auto;


  @media (min-width: 768px) {
    padding: 5.4rem;
    max-width: 580px;
  }

  @media (min-width: 1440px) {
    max-width: 1050px;
    padding: 10rem 15rem 10rem 15rem;
  }
`;
const Layout = ({ children, location }) => {
  return (
    <Wrapper>
      <Normalize />
      <GlobalStyle />
      <Container>
        <Header pathname={location.pathname} />
        <Content>{children}</Content>
      </Container>
      <Footer pathname={location.pathname} />
    </Wrapper>
  );
};

export default Layout;
