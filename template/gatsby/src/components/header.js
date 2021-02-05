//import { Link } from "gatsby"
//import { graphql, useStaticQuery } from "gatsby"
//import PropTypes from "prop-types"
import React from "react"

const Header = ({logo}) => {
  return (
    <div className="row">
      <div className="col-sm">
          <img src={ logo } alt="" className="logo" />
      </div>
    </div>
  )
}

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header;
