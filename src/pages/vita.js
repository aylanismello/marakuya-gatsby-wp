import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import Layout from '../components/layout';

  const VitaSectionWrapper = styled.section`
  `;
  const VitaItemWrapper = styled.section`
  `;

const VitaItem = ({ vitaItem }) => (
  <VitaItemWrapper>
    {vitaItem.year}
    {vitaItem.title}
    {vitaItem.subtitle}
  </VitaItemWrapper>
);


const VitaSection = ({ vitaType, vitaItems }) => {
  return (
    <VitaSectionWrapper>
      <h1>
        {vitaType}
      </h1>
      {vitaItems.map(vitaItem => <VitaItem vitaItem={vitaItem} />)}
    </VitaSectionWrapper>
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
        {Object.keys(vita).map(vitaType => {
          return <VitaSection vitaType={vitaType} vitaItems={vita[vitaType]} />;
        })}
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
