import React from "react";
import styled from "styled-components";
import NavLinks from "./nav_links";

const Wrapper = styled.section`
  padding-top: 4rem;
  padding-bottom: 4rem;
  div {
    font-size: 1.4rem;
  }
  /* background: #f8f8f8; */
`;

const Footer = () => (
  <Wrapper>
    <NavLinks />
    <div>
      This online portfolio contains only a small sample of current work.
    </div>
    <div>
      More are available <a href="mailto: mail@minbark.com">by request </a>
    </div>
  </Wrapper>
);

export default Footer;
