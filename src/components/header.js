import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
  <header
    style={{
      background: `black`,
      position: 'relative',
      width: '99vw',
      marginBottom: `1.45em`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          W
        </Link>
      </h1>
      <div>
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: '1em',
          }}>about</Link>
        <Link
          to="/projects"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: '1em',
          }}>projects</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
