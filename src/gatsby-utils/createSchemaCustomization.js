const {
    pagesDefs,
    contentDefs,
    generalDefs,
    matchDefs,
    productsDefs,
    articlesDefs,
    testimonialsDefs,
} = require("./typedefs");

module.exports = async ({ actions }) => {
    const { createTypes } = actions;

    const allTypeDefs = [
        pagesDefs,
        contentDefs,
        generalDefs,
        matchDefs,
        productsDefs,
        articlesDefs,
        testimonialsDefs,
    ];

    createTypes(allTypeDefs);
};
