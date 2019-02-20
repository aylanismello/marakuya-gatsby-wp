import React from 'react';
import styled from 'styled-components';
import NavLinks from './nav_links';

const Wrapper = styled.section`
  /* padding-top: 4rem;
  padding-bottom: 4rem; */
  padding: 4rem 1.2rem;

  .footer-item {
    padding: 2rem 0;
  }

  @media (min-width: 768px) {
    /* padding: 4rem 6em; */
    padding: 0 6em;
    display: flex;
    justify-content: space-around;
    align-items: baseline;
  }
  /* background: #f8f8f8; */
`;

const FooterNotes = styled.section`
  /* padding-top: 1.5rem; */
  width: 70%;
  @media (min-width: 768px) {
    padding: 4rem 6em;
    width: auto;
  }

  .footer-note {
    line-height: 1.57;
    font-size: 1.4rem;
    padding: 1rem 0;
  }

  a {
    text-decoration: underline;
  }
`;

const Copyright = styled.section`
  font-size: 1.4rem;
  line-height: 1.57;
`;

const LineStyle = styled.div`
  display: block;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Line = () => (
  // TODO: Make these lines work.
  <LineStyle>
    <svg
      className="piece-line"
      width="500"
      height="10"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line viewBox="100 100 100 100" stroke="#ebebeb" />
    </svg>
  </LineStyle>
);

const Footer = ({ pathname }) => (
  <Wrapper>
    <NavLinks
      linksLocation="footer"
      pathname={pathname}
      className="footer-item"
    />
    <Line />
    <FooterNotes className="footer-item">
      <div className="footer-note">
        This online portfolio contains only a small sample of current work.
      </div>
      <div className="footer-note">
        More are available <a href="mailto: mail@minbark.com">by request.</a>
      </div>
    </FooterNotes>
    <Line />
    <Copyright className="footer-item">
      © {new Date().getFullYear()} Minbark.com
    </Copyright>
  </Wrapper>
);

export default Footer;
