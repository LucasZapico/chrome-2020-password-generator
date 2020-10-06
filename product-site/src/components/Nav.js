import React from "react"
import Link from "gatsby-plugin-transition-link/AniLink";
import Mark from '../assets/images/mark-base.svg'

const Navigation = () => {
  return (
    <div className="nav__container ">
      <nav className="nav">
        <ul className="nav__items">
          <li className="nav__item">
            <Link fade  to="/about">About</Link>
          </li>
          <li className="nav__item">
            <Link fade  to="/articles">Articles</Link>
          </li>
        </ul>
        <div className="nav__mark">
          <Link fade to="/">
            <Mark/>
          </Link>
        </div>
        <div className="nav__item">
        <a
            href="https://chrome.google.com/webstore/category/extensions?hl=en-US"
            className="btn btn__primary--light ripple margin__bottom--m"
          >
            Add To Chrome
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navigation
