import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <div>
    <div className="navbarWrapper">
      <div className="navbar">
      <Link to="/"><div className="brand">Dylan Dotolo</div></Link>
        <div className="navItems">
          <a href="" target="_blank"><div className="navItem">Twitter</div></a>
          <div className="navDivider"></div>
          <a href="" target="_blank"><div className="navItem">Dribbble</div></a>
          <div className="navDivider"></div>
          <a href="" target="_blank"><div className="navItem">Instagram</div></a>
        </div>
      </div>
    </div>
  </div>
)

export default Header
