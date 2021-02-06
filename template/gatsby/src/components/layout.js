/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"
import 'normalize.css'
import GlobalStyles from "../styles/GlobalStyles"


const Layout = ({sanityInfo, children}) => {
 //console.log(sanityInfo); 

  
  const logoSrc = sanityInfo.logo.asset.fixed.src;
  const address = sanityInfo.address;
  const company = sanityInfo.company;
  const highlightColor = sanityInfo.highlightColor.hex;
  
  return (
    <>
      <div className="container">
        <GlobalStyles highlight={ highlightColor } />
        <Header logo={ logoSrc }/>
        { children }
        <Footer company={ company } address={ address } />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
