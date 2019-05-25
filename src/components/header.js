import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      position: 'absolute',
      background: `black`,
      marginBottom: `1.45rem`,
      width: '100vw',
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
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: '1em',
          }}>About</Link>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            margin: '1em',
          }}>Projects</Link>
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
