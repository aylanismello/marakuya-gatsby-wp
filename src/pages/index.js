import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import Layout from '../components/layout';

const ArtPieceStyle = styled.div`
  @media (min-width: 1440px) {
    display: flex;
  }
`;

const ArtPiece = ({
 year, title, subtitle, description, images
}) => (
  <ArtPieceStyle>
    <div className="piece-writing">
      <svg width="100" height="3" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="0" x2="22" y2="0" stroke="#ebebeb" />
      </svg>
      <h5
        style={{
          padding: '0px',
          margin: '0px',
          lineHeight: '1.71',
          fontSize: '1.4rem'
        }}
      >
        {year}
      </h5>
      <h3 style={{ fontSize: '2.4rem', lineHeight: '1.25' }}>{title}</h3>
      <h4
        style={{ color: '#a7a7a7', fontWeight: 'normal', fontSize: '1.4rem' }}
      >
        {subtitle}
      </h4>
      <div dangerouslySetInnerHTML={{ __html: description }} />
    </div>
    <div className="piece-image">
      <img
        style={{
          width: '100%',
          height: 'auto'
        }}
        src={images[0].image.sizes.large}
      />
    </div>
  </ArtPieceStyle>
);

const IndexPage = ({ data }) => {
  const { node } = data.allWordpressPage.edges[0];
  const { title, slug } = node;
  const { art_list } = node.acf;

  return (
    <Layout>
      {art_list.map(art => (
        <ArtPiece {...art} />
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
