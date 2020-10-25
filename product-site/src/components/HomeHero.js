import React from 'react'
import Link from 'gatsby-plugin-transition-link/AniLink'
import HeroImg from '../assets/images/hero-elip-3.svg'

const HomeHero = () => {
  return (
    <div className="home-hero__container">
      <div className="home-hero__mask">
        <HeroImg />
      </div>

      <div className="home-hero__content container__content">
        <h1 className="h2 char-80">
          A Simple Password Generator for Chrome
        </h1>
        <div className="home-hero__cta margin__top--l">
          <a
            href="https://chrome.google.com/webstore/category/extensions?hl=en-US"
            className="btn btn__primary--dark ripple margin__bottom--m"
          >
            Add To Chrome
          </a>
          <Link
            to="about"
            className="cta__primary--dark margin__left--m"
          >
            About Building This Project
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HomeHero
