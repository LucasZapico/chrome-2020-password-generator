import React, { useEffect, useRef } from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import Link from 'gatsby-plugin-transition-link/AniLink';
import { FiFigma } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai/';
import { SideNav } from '../components/SideNav';
import Layout from '../components/Layout';
import HomeHero from '../components/HomeHero';
// import ProductImg from '../assets/images/product-showcase-img.png'
import {useSpring, animated, interpolate} from 'react-spring'


const HomePage = ({ data }) => {
  const docs = data.docs.edges;
  const sprProps = useSpring({x: 0, from: {x: -100}})
  return (
    <div className="app">
      <Layout>
        <HomeHero />
        <section className="home-section product">
          <div className="section__content padding__all--m container__content">
            


                    <Img
                      className="product__image"
                      fluid={data.productImg.childImageSharp.fluid}
                      objectFit="contain"
                    />
                  

              <div className="product__content char-80">
                <h4>Instantly Generate Secure Passwords</h4>
                <h6>Number</h6>
                <h6>Symbols</h6>
                <h6>Case Sensitive</h6>
              </div>
            </div>
          
        </section>
        <section className="home-section resources">
          <div className="section__content padding__all--m container__content">
            <div className="char-80 resource__header">
              <h3>For Designers and Devs</h3>
              <p>
                For anyone interested here are links to the resouces used in
                this project. They are alll free or open source
              </p>
            </div>
            <div className="resource-links__container">

              <animated.div style={sprProps} className="resource__card">
                
                <h5>Design Resources</h5>
                <div className="resource__icon">
                  <FiFigma />
                </div>
                <p>
                 For anyone who is interested here is a link to the figma project where all of the design aspects of this little project took place.
                </p>
                <a className="cta__primary--dark" href="https://www.figma.com/file/oV2IZUPzLk6bV3M0VTDF1H/chrome-password-generator?node-id=1%3A5">Get design Resouces</a>
              </animated.div>
              <div className="resource__card">
                <h5>Extension Repo</h5>
                <div className="resource__icon">
                  <AiFillGithub />
                </div>
                <p>
                  Laborum proident dolore qui qui et nostrud elit nisi ut. Aute
                  occaecat est ullamco aute eiusmod nisi in laborum ut labore
                  labore ut sit ut. Nisi et amet sit irure amet ad.
                </p>
              </div>
              <div className="resource__card">
                <h5>Showcase Repo</h5>
                <div className="resource__icon">
                  <AiFillGithub />
                </div>
                <p>
                  Laborum proident dolore qui qui et nostrud elit nisi ut. Aute
                  occaecat est ullamco aute eiusmod nisi in laborum ut labore
                  labore ut sit ut. Nisi et amet sit irure amet ad.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query {
    productImg: file(relativePath: { eq: "product-showcase-img.png" }) {
      childImageSharp {
        fluid(maxWidth: 1440) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    docs: allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            title
            categories
            description
            path
          }
        }
        next {
          id
        }
        previous {
          id
        }
      }
    }
  }
`;
