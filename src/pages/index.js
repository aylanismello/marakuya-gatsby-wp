import React from "react";
import { Link } from "gatsby";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";

const IndexPage = ({ data }) => {
  const { node } = data.allWordpressPage.edges[0];
  const { title, slug } = node;
  const { art_list } = node.acf;
  // description: "<p>Min Bark wrote a message on the ground using black rice: "I was here!" </p>↵<p>She began her art project ‘Search for Mother’ on the 24.05.2016, which is closely connected to an annually recurring homecoming. On this date, Bark once again returned to Andong, the place where she was found. The country has changed.</p>↵<p>The precise location does not exist anymore, the streets have changed. Maybe the mother moved to the city or does not live anymore. As Bark grew up without a biological mother, it seems like as if her mother did not exist, like she was looking down from above. Bark: “I have rediscovered the earth and the ground.” </p>↵"
  // images: (2)[{ … }, { … }]
  // subtitle: "Project / Photography and Video"
  // title: "Search for Mother"
  // year: "2017"
  return (
    <Layout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      {/* <h1>This is a test for pulling WP data</h1> */}
      {art_list.map(art => (
        <div>
          <h5>{art.year}</h5>
          <h3>{art.title}</h3>
          <h4>{art.subtitle}</h4>
          <p dangerouslySetInnerHTML={{ __html: art.description }} />
          <img src={art.images[0].image.sizes.large} />
        </div>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
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
