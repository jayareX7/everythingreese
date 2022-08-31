import { graphql } from "gatsby";

export const query = graphql`
    fragment PageContentAll on PageContent {
        section
        headerInfo
        section_title
        headings {
            content
            level
        }
        link
        items {
            id
            title
            description
            designation
            link
            name
            rating
            subject
            icon
            countNumber
            headings {
                level
                content
            }
            images {
                ...Image
            }
            action_link {
                link
                title
            }
            socials {
                id
                title
                link
                icon
            }
        }
        texts {
            content
        }
        buttons {
            ...Button
        }
    }
`;
