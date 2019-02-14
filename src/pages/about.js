import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import ArtPiece from '../components/art_piece';
import Layout from '../components/layout';

class AboutPage extends React.Component {
  render() {

    const { data, location } = this.props;
    const aboutData = data.allWordpressPage.edges[0].node.acf.art_list[0];
    
    return (
      <Layout location={location}>
        <ArtPiece {...aboutData} />
      </Layout>
    );
  }
}

export default AboutPage;

export const query = graphql`
  {
    allWordpressPage(filter: { slug: { eq: "about" } }) {
      edges {
        node {
          id
          slug
          template
          title
          acf {
            art_list {
              year
              title
              subtitle
              description
              images {
                image {
                  width
                  height
                  url
                  caption
                  title
                  sizes {
                    thumbnail
                    medium
                    large
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;