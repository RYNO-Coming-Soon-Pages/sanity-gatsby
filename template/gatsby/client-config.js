console.log(process.env.SANITY_PROJECT_ID);
console.log(process.env.SANITY_DATASET);
module.exports = {
    sanity: {
        projectId: process.env.SANITY_PROJECT_ID || "<#< sanity.projectId >#>",
        dataset: process.env.SANITY_DATASET || "<#< sanity.dataset >#>"
    }
};