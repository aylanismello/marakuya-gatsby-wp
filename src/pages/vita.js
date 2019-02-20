import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

const COLUMN_DIVIDER = 4;

const VitaSectionContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-row-gap: 2rem;
  .vita-section-header {
    grid-column: ${COLUMN_DIVIDER} / -1;
  }

`;
const VitaItemWrapper = styled.section`
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: repeat(12, 1fr);
  line-height: 1.57;
  /* grid-column-gap: 20px; */


  .left-side {
    grid-column: 1 / ${COLUMN_DIVIDER};

    @media (min-width: 1440px) {
      grid-column: 2 / ${COLUMN_DIVIDER};
    }
    max-width: 100px;
    text-align: right; 
    font-size: 1.4rem;
    font-weight: bold;
    margin-right: 1.5rem;
  }

  .right-side {
    grid-column: ${COLUMN_DIVIDER} / -1;
    .vita-subtitle {
      color: #a7a7a7;
      font-style: italic;
    }
  }
`;

const VitaList = styled.div`
  display: grid;
  grid-row-gap: 9rem;
`;

const VitaItem = ({ vitaItem }) => (
  <VitaItemWrapper>
    <div className="left-side">{vitaItem.year}</div>
    <div className="right-side">
      <div className="vita-title">
      {vitaItem.title}
      </div>
      <div className="vita-subtitle">
      {vitaItem.subtitle}
      </div>
    </div>
  </VitaItemWrapper>
);

const VitaSection = ({ vitaType, vitaItems }) => {
  return (
    <VitaSectionContainer>
      <h1 className="vita-section-header">{vitaType}</h1>
      {vitaItems.map(vitaItem => (
        <VitaItem vitaItem={vitaItem} />
      ))}
    </VitaSectionContainer>
  );
};

class VitaPage extends React.Component {
  render() {
    const { data, location } = this.props;
    const { art_list } = data.allWordpressPage.edges[0].node.acf;

    const vita = {};

    // because fuck wordpress and fuck ACFs that's why.
    art_list.forEach(vitaItem => {
      const vitaType = vitaItem.description
        .replace('<p>', '')
        .replace('</p>', '')
        .trim();
      if (vita[vitaType]) {
        vita[vitaType].push(vitaItem);
      } else {
        vita[vitaType] = [vitaItem];
      }
    });

    return (
      <Layout location={location}>
        <VitaList>
        {Object.keys(vita).map(vitaType => {
          return <VitaSection vitaType={vitaType} vitaItems={vita[vitaType]} />;
        })}
        </VitaList>
      </Layout>
    );
  }
}

export default VitaPage;

export const query = graphql`
  {
    allWordpressPage(filter: { slug: { eq: "vita" } }) {
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
