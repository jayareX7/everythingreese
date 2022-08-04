module.exports = `
    type Products implements Node {
        id: ID!
        title: String!
        slug: String!
        date: Date @dateformat
        gameThum: Image
        updated: String
        size: String
        installs: String
        currentVersion: String
        inAppProducts: String
        is_featured: Boolean
        quoteText: String
        categories: [Categories]
        images: [Image]
        content: [ProductContent]
        buttons: [Button]
    }
    type ProductContent {
        id: ID!
        headings: [Heading]
        section: String
        items: [Item]
    }
    type Item {
        id: ID!
        desc: String
    }
    type Categories {
        title: String
        slug: String
    }
`;
