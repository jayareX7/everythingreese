import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import PageBreadcrumb from "../components/pagebreadcrumb";
import TestimonialSlider from "../container/about-us/testimonial-slider/testimonial-slider";
import AboutUsOurStudioArea from "../container/about-us/about-us-our-studio";

const AboutPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.pages1.content || []);
    const testimonials = normalizedData(data?.pages2.content || []);

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="About Us Page" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="About Us"
            />
        </Layout>
    );
};

AboutPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        latestPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query aboutUsPageQuery {
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
        pages1: page(
            pageType: { eq: innerpage }
            title: { eq: "aboutUsPage" }
        ) {
            content {
                ...PageContentAll
            }
        }
        pages2: page(
            title: { eq: "testimonialsPage" }
            pageType: { eq: innerpage }
        ) {
            content {
                ...PageContentAll
            }
        }
    }
`;

export default AboutPage;
