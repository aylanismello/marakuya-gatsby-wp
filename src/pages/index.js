import React from 'react';
import { graphql } from 'gatsby';
import Work from '../components/work';
import Layout from '../components/layout';

class IndexPage extends React.Component {
  render() {
    const { data, location } = this.props;
    const { node } = data.allWordpressPage.edges[0];
    const { art_list } = node.acf;

    return (
      <Layout location={location}>
        <Work art_list={art_list} />
      </Layout>
    );
  }
}

export default IndexPage;

export const query = graphql`
  {
    allWordpressPage(filter: { slug: { eq: "sample-page" } }) {
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
                description
              }
            }
          }
        }
      }
    }
  }
`;
