
import PropTypes from "prop-types"
import React, { useState } from "react"

import { useCurrentWidth } from "../hooks"
import { IoIosMenu, IoIosClose } from "react-icons/io"
import Navigation from './Nav'
// todo add spring animation to nav toggle

const Header = ({ siteTitle }) => {
  const width = useCurrentWidth()
  const [showMenu, setShowMenu] = useState(false)
  return (
    <header className="header">
      
        {width > 800 ? (
          <>
            
              <Navigation width={width} />
            
          </>
        ) : (
          <>
            
            <div className="toggle toggle__nav" onClick={() => setShowMenu(!showMenu)}>
              {!showMenu ? (
                <IoIosMenu  />
              ) : (
                <IoIosClose/>
              )}
            </div>
            {showMenu ? (
              <div className="mobile__nav">
                <Navigation width={width} />
              </div>
            ) : (
              undefined
            )}
          </>
        )}
      
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: "",
}

export default Header

