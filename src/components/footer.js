import React from 'react';
import styled from 'styled-components';
import NavLinks from './nav_links';


const Wrapper = styled.section`
  /* padding-top: 4rem;
  padding-bottom: 4rem; */
  padding: 4rem 1.2rem;
  
  @media(min-width: 768px) {
    padding: 4rem 6em;
  }
  /* background: #f8f8f8; */
`;

const FooterNotes = styled.section`
  padding-top: 1.5rem;
  width: 70%;

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

const Footer = ({ pathname }) => (
  <Wrapper>
    <NavLinks pathname={pathname} />
    <FooterNotes>
      <div className="footer-note">
        This online portfolio contains only a small sample of current work.
      </div>
      <div className="footer-note">
        More are available <a href="mailto: mail@minbark.com">by request.</a>
      </div>
    </FooterNotes>
    <Copyright>
      © {(new Date()).getFullYear()} Minbark.com
    </Copyright>
  </Wrapper>
);

export default Footer;
