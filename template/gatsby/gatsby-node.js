/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */
const path = require('path');

async function turnDataIntoPages({ graphql, actions }) {
    //get template for page
    const comingSoonTemplate = path.resolve('./src/templates/ComingSoon.js')
    
    //query data
    const { data } = await graphql(`
        query {
            allSanityInfo {
                nodes {
                    slug
                }
            }
        }
    `);
    //loop over data and create pages
    data.allSanityInfo.nodes.forEach( (page) => {
        actions.createPage({
            path: page.slug,
            component: comingSoonTemplate,
            context: {
                slug: page.slug
            }
        });
    });
}

exports.createPages = async (params) => {
    //create pages dynamically
    await turnDataIntoPages(params);
}
