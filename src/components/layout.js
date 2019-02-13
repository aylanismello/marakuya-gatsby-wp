import React from 'react';
import PropTypes from 'prop-types';
import { Normalize } from 'styled-normalize';

const Layout = ({ children }) => {
  return <Normalize> {children} </Normalize>;
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
