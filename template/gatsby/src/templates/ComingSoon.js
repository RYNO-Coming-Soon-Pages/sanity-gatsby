/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export const query = graphql`
    query ($slug: String) {
        sanityInfo(slug: {eq: $slug}) {
            email
            phone
            slug
            highlightColor {
            hex
            }
            heading
            company
            address
            logo {
                asset {
                    fixed {
                        src
                    }
                }
            }
        }
    }
`

const comingSoonTemplate = function(props) {
    const sanityInfo = props.data.sanityInfo;
    return (
        <Layout sanityInfo={sanityInfo}>
        <main className="row">
            <div className="col-xs col-lg-12">
            <div className="intro-text flex-column">
                <h2>{ sanityInfo.heading }</h2>
                <p>In the meantime you can reach us at <strong><a href="tel:{ sanityInfo.phone }">{ sanityInfo.phone }</a></strong> or email us at <strong><a href={ "mailto:" + sanityInfo.email }>{ sanityInfo.email }</a></strong>.</p>
            </div>
            </div>
        </main>
        </Layout>
    )
}

export default comingSoonTemplate;
