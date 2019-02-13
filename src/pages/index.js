import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const IndexPage = ({ data }) => {
  const { node } = data.allWordpressPage.edges[0];
  const { title, slug } = node;
  const { art_list } = node.acf;

  return (
    <Layout>
      {art_list.map(art => (
        <div>
          <h5>{art.year}</h5>
          <h3>{art.title}</h3>
          <h4>{art.subtitle}</h4>
          <div dangerouslySetInnerHTML={{ __html: art.description }} />
          <img src={art.images[0].image.sizes.large} />
        </div>
      ))}
    </Layout>
  );
};

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
              }
            }
          }
        }
      }
    }
  }
`;
