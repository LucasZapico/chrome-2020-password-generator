import React, { useEffect, useRef, useState } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Link from 'gatsby-plugin-transition-link/AniLink'
import { FiFigma, FiSmile } from 'react-icons/fi'
import { AiFillGithub } from 'react-icons/ai/'
import { SideNav } from '../components/SideNav'
import Layout from '../components/Layout'
import HomeHero from '../components/HomeHero'
// import ProductImg from '../assets/images/product-showcase-img.png'
import { useTrail, animated, interpolate } from 'react-spring'
import * as easings from 'd3-ease'
import { IoIosOpen } from 'react-icons/io'
import BlobOne from '../assets/images/blob-1.svg'
import BlobTwo from '../assets/images/blob-2.svg'
import BlobThree from '../assets/images/blob-3.svg'

const HomePage = ({ data }) => {
  const docs = data.docs.edges
  const cardAniTrigger = useRef(null)
  const [scrollY, setScrollY] = useState(0)
  const [animate, setAnimate] = useState(false)

  const logit = () => {
    setScrollY(window.pageYOffset)
    console.log(new Date().getTime())
  }

  useEffect(() => {
    function watchScroll() {
      window.addEventListener('scroll', logit)
    }
    watchScroll()
    return () => {
      window.removeEventListener('scroll', logit)
    }
  })

  useEffect(() => {
    if (cardAniTrigger.current !== null) {
      if (
        scrollY > cardAniTrigger.current.getBoundingClientRect().y
      ) {
        setAnimate(true)
      } else {
        setAnimate(false)
      }
    }
  }, [scrollY])

  const trail = useTrail(3, {
    transform: animate ? 'translateY(0px)' : 'translateY(100px)',
    config: { duration: 1000, easing: easings.easeBackInOut },
  })
  return (
    <div className="app">
      <div className="blob__container ">
        <BlobOne />
      </div>
      <div className="blob__container">
        <BlobTwo />
      </div>
      <div className="blob__container">
        <BlobThree />
      </div>
      <div className="blob__container ">
        <BlobOne />
      </div>
      <div className="blob__container">
        <BlobTwo />
      </div>
      <div className="blob__container">
        <BlobThree />
      </div>
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
                For anyone interested here are links to the resouces
                used in this project. They are alll free or open
                source
              </p>
            </div>
            <div
              className="resource-links__container"
              ref={cardAniTrigger}
            >
              <animated.div style={trail[0]} className="card">
                <h5>Design Resources</h5>
                <div className="card__icon">
                  <FiFigma />
                </div>
                <p>Here are the Figma resources for this project.</p>
                <a
                  className="cta__primary--dark cta__icon--dark"
                  href="https://www.figma.com/file/oV2IZUPzLk6bV3M0VTDF1H/chrome-password-generator?node-id=1%3A5"
                >
                  Get Design Resouces
                  <IoIosOpen />
                </a>
              </animated.div>
              <animated.div style={trail[1]} className="card">
                <h5>Extension Repo</h5>
                <div className="card__icon">
                  <AiFillGithub />
                </div>
                <p>
                  Here is the repository for the extension. The build
                  process is ES6 and SASS supported.
                </p>
                <a
                  className="cta__primary--dark  cta__icon--dark"
                  href="https://github.com/LucasZapico/chrome-2020-password-generator/tree/master/extension"
                >
                  See Extension Code <IoIosOpen />
                </a>
              </animated.div>
              <animated.div style={trail[2]} className="card">
                <h5>Showcase Repo</h5>
                <div className="card__icon">
                  <AiFillGithub />
                </div>
                <p>
                  Here is the Gatsby site we are on, clone it, fork it
                  make it pink. <FiSmile />
                </p>
                <a
                  className="cta__primary--dark cta__icon--dark"
                  href="https://github.com/LucasZapico/chrome-2020-password-generator/tree/master/product-site"
                >
                  See Site Code <IoIosOpen />
                </a>
              </animated.div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    productImg: file(
      relativePath: { eq: "product-showcase-img.png" }
    ) {
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
`
