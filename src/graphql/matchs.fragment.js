import { graphql } from "gatsby";

export const query = graphql`
    fragment Matchs on Match {
        id
        date(formatString: "DD MMMM, YYYY, hh:mm:ss A")
        title
        slug
        liveStreaming {
            id
            link
            headings {
                content
                level
            }
            images {
                alt
                src {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`;
