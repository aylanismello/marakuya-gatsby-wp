import React from 'react';
import styled from 'styled-components';
import NavLinks from './nav_links';
import x from '../images/e-remove.svg';

const UnmodalWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  /* align-items: center; */
  height: 100vh;
`;

const CloseBtn = styled.div`
  position: absolute;
  right: 3rem;
  top: 3rem;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;

const Unmodal = ({ toggleModal }) => {
  return (
    <UnmodalWrapper className="unmodal">
      <CloseBtn onClick={toggleModal}>
        <img src={x} />
      </CloseBtn>
      <NavLinks linksLocation="menu" />
    </UnmodalWrapper>
  );
};

export default Unmodal;
