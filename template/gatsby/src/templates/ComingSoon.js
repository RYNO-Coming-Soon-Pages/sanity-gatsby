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
    query ($slug: String!) {
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

    var sanityInfo = undefined;
    if (!sanityInfo) {
        sanityInfo = { 
                address: "1111 West Testing Lane2",
                company: "Reliable Air Conditioning2",
                email: "sample@sample.com2",
                heading: "Our new website is coming soon-ish!2",
                highlightColor: {
                    hex: "#24e33f"
                },
                logo: {
                    asset: {
                        fixed: {
                            src: "https://cdn.sanity.io/images/mqnw9q8f/production/b0b2a52891279ca88aed185ec3a8b3a6e86b8eef-4500x2215.jpg?w=400&h=197&fit=crop"
                        }
                    }
                },
                phone: "777-888-9999 2",
                slug: "page2"
            }
    }
    //console.log(sanityInfo);
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
