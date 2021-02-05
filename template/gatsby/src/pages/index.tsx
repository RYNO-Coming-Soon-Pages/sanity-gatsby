import { graphql } from "gatsby"
import React from "react"
//import { Link } from "gatsby"

 import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  // <Layout>
  //   <SEO title="Home" />
  //   <h1>Hi people</h1>
  //   <p>Welcome to your new Gatsby site.</p>
  //   <p>Now go build something great.</p>
  //   <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
  //     <Image />
  //   </div>
  //   <Link to="/page-2/">Go to page 2</Link> <br />
  //   <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  // </Layout>
  const sanityInfo = data.sanityInfo;
  return (
    <Layout>
      <main className="row">
        <div className="col-xs col-lg-12">
          <div className="intro-text flex-column">
              <h2>{ sanityInfo.heading }</h2>
              <p>In the meantime you can reach us at <strong><a href="tel:{ sanityInfo.phone }">{ sanityInfo.phone }</a></strong> or email us at <strong><a href={ "mailto:" + sanityInfo.email }>{ sanityInfo.email }</a></strong>.</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export default IndexPage


export const query = graphql`
  query infoQuery {
    sanityInfo {
      email
      heading
      phone
      slug
    }
  }
`;
