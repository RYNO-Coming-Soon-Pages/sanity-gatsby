require('dotenv').config();
const sanityClient = require('@sanity/client');

const projectId = process.env.SANITY_PROJECT;
//const apiToken = process.env.SANITY_TOKEN;
const dataset = process.env.SANITY_DATASET;

const client = sanityClient({
    projectId,
    dataset,
    // token: apiToken
})

module.exports = async function() {
    const query = `
        *[ _type == "info" && !(_id in path("drafts.**")) ]{
            "logoUrl": logo.asset->url,
            heading,
            phone,
            email,
            address,
            company,
            content,
            highlightColor
        }
    `;
    const params = {};

    return await client.fetch(query, params);
}
  