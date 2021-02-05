//import PropTypes from "prop-types"
//import { useStaticQuery, graphql } from "gatsby";
import React from "react"

const Footer = ({ company, address }) => {

    return (
        <footer>
            <p className="copyright">© {new Date().getFullYear()} Copyright { company }</p>
            <p className="address">{ address }</p>
        </footer>
    )
}



export default Footer


