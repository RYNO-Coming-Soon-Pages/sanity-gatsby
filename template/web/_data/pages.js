require('dotenv').config();
const client = require('../utils/sanityClient.js');

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
  