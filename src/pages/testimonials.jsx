import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import PageBreadcrumb from "../components/pagebreadcrumb";
import TestimonialsArea from "../container/home/testimonials/testimonials-list/testimonials-details";

const TestimonialsPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Testimonials Page" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Testimonials"
            />
            <TestimonialsArea
                data={{
                    items: data.allTestimonials.nodes,
                }}
            />
        </Layout>
    );
};

TestimonialsPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allTestimonials: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query testimonialsPagePageQuery {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    ...Footer
                }
            }
        }
        allTestimonials {
            nodes {
                name
                slug
                title
                needLavel
                date
                socials {
                    id
                    icon
                    link
                    title
                }
                items {
                    description
                    designation
                }
                image {
                    alt
                    src {
                        childImageSharp {
                            gatsbyImageData(formats: WEBP)
                        }
                    }
                }
            }
        }
    }
`;

export default TestimonialsPage;
