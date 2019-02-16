import React from 'react';
import styled from 'styled-components';
import menu from '../images/menu-34.svg';

const BurgerWrapper = styled.div`
  &:hover {
    cursor: pointer;
  }
`;

const Burger = ({ toggleModal }) => (
  <BurgerWrapper className="burger" onClick={toggleModal}>
    <img src={menu} />
  </BurgerWrapper>
);

export default Burger;
