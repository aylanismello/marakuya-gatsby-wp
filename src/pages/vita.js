import React from 'react';
// import styled from 'styled-components';
import Layout from '../components/layout';

class VitaPage extends React.Component {
  render() {
    const { location } = this.props;
    return <Layout location={location} />;
  }
}

export default VitaPage;
