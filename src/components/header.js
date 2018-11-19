import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div>
    <div className="navbarWrapper">
      <div className="navbar">
        <div className="brand">Dylan Dotolo</div>
        <div className="navItems">
          <div className="navItem">Work</div>
          <div className="navItem">About</div>
          <div className="navItem">Contact</div>
        </div>
      </div>
    </div>
  </div>
)

export default Header
