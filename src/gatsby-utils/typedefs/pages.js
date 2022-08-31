module.exports = `
    type Page implements Node {
        id: ID!
        title: String!
        content: [PageContent]
        pageType: PageType!
    }
    enum PageType {
        innerpage
        homepage
    }
    type PageContent {
        id: ID!
        section: String!
        headerInfo: String
        headings: [Heading]
        texts: [Text]
        items: [Item]
        section_title: String
        images: [Image]
        date: BlogDate!
        buttons: [Button]
        link: String
        name: String
        socials: [Social]
    }
    type BlogDate {
        date: Date! @dateformat
        slug: String!
    }
    type Item {
        id: ID!
        title: String
        description: String
        images: [Image]
        link: String
        name: String,
        designation: String,
        socials: [Social]
        rating: Int
        subject: String
        alt: String
        icon: String
        countNumber: Int
        action_link: [ActionLink]
    }
    type ActionLink {
        title: String
        link: String
    }

`;
