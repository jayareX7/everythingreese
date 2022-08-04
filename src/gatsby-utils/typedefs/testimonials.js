module.exports = `
    type Testimonials implements Node {
        id: ID!
        title: String!
        name: String
        slug: String!
        needLavel: String
        date: Date @dateformat
        image: Image
        socials: [Social]
        items: [Item]
    }
    type Item {
        id: ID!
        socials: [Social]
    }
`;
