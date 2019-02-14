import React from 'react';
import styled from 'styled-components';
import { graphql } from 'gatsby';
import ArtPiece from '../components/art_piece';
import Layout from '../components/layout';

const PAGINATION_SIZE = 3;

const LoadButton = styled.div`
  display: ${props => (props.hasMorePieces ? 'flex' : 'none')};
  padding: 1rem;
  justify-content: center;
  font-size: 2rem;
  line-height: 1.1;
  
  
  .text-container {
    border-bottom: 1px solid;
    width: 10rem;  
    &:hover {
      cursor: pointer;
    }
  }

  p {
    margin-bottom: 0.3em;
    text-align: center;
  }
`;
class IndexPage extends React.Component {
  state = {
    listSize: PAGINATION_SIZE
  };

  render() {
    const { data, location } = this.props;
    const { node } = data.allWordpressPage.edges[0];
    const { title, slug } = node;
    const { listSize } = this.state;
    const { art_list } = node.acf;
    const hasMorePieces = art_list.length > listSize;

    return (
      <Layout location={location}>
        {art_list.slice(0, listSize).map(art => (
          <ArtPiece {...art} />
        ))}
        <LoadButton
          hasMorePieces={hasMorePieces}
          onClick={() => this.setState({ listSize: listSize + PAGINATION_SIZE })
          }
        >
          <div className="text-container">
            <p>Load More</p>
          </div>
        </LoadButton>
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
              }
            }
          }
        }
      }
    }
  }
`;
