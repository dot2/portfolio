import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div>
    <div className="navbarWrapper">
      <div className="navbar">
      <Link to="/"><div className="brand">Dylan Dotolo</div></Link>
        {/* <div className="navItems">
          <Link to="/work"><div className="navItem">Work</div></Link>
          <Link to="/about"><div className="navItem">About</div></Link>
          <Link to="contact"><div className="navItem">Contact</div></Link>
        </div> */}
      </div>
    </div>
  </div>
)

export default Header
