import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import HeroArea from "../container/home/hero";
import HeaderArea from "../container/home/header";
import WelcomeFeaturesArea from "../container/home/welcome-features";
import WatchLiveStremingArea from "../container/home/watch-live-streaming";
import PopularProductsArea from "../container/home/popular-products";
import TestimonialArea from "../container/home/testimonials";
import LatestBlogArea from "../container/home/latest-blog";
import { graphql, Link } from "gatsby";
import { normalizedData } from "@utils/functions";
import FeaturesArea from "../container/home/features";

const IndexPage = ({ data }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page?.content || []);
    const welcome = normalizedData(data?.pages3.content || []);
    const testimonials = normalizedData(data?.pages2.content || []);
    const features = normalizedData(data?.pages4.content || []);

    return (
        <>
            {" "}
            <HeaderArea data={content["hero-section"]} />
            <Layout
                data={{
                    ...globalContent["menu"],
                    ...globalContent["footer"],
                }}
            >
                <SEO title="Home" pathname="/" />
                <HeroArea data={content["hero-section"]} />

                <PopularProductsArea
                    data={{
                        ...content["popular-products-section"],
                        items: data.allProducts.nodes,
                    }}
                />
                <div align="center" className="my-6 md:my-12 mx-auto">
                    <Link
                        to={`/products`}
                        className="text-white button-link font-code inline-block text-center font-bold group hover:opacity-80 text-22base h-73 w-230 leading-73 rounded-22 bg-primary-transparent"
                    >
                        View All
                    </Link>
                </div>

                <div className="about-container">
                    <WelcomeFeaturesArea data={welcome["welcome-section"]} />
                    <FeaturesArea data={features["features-section"]} />
                </div>

                <div className="section-divider"></div>

                <TestimonialArea data={testimonials["testimonial-section"]} />
                <WatchLiveStremingArea
                    data={{
                        ...content["latest-event-section"],
                        items: data.allMatch.nodes,
                    }}
                />
                <LatestBlogArea
                    data={{
                        ...content["latest-section"],
                        items: data.latestPosts.nodes,
                    }}
                />
            </Layout>
        </>
    );
};

IndexPage.propTypes = {
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allProducts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allMatch: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        latestPosts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query homePageQuery {
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
        page(title: { eq: "home" }, pageType: { eq: homepage }) {
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
        pages3: page(
            pageType: { eq: homepage }
            title: { eq: "welcomeSection" }
        ) {
            content {
                section_title
                text
                quote
            }
        }
        pages4: page(
            title: { eq: "featuresSection" }
            pageType: { eq: homepage }
        ) {
            items {
                headings {
                    content
                }
                description
            }
            content {
                section_title
            }
        }
        allProducts(sort: { order: DESC, fields: date }, limit: 4) {
            nodes {
                ...Products
                title
            }
        }
        allMatch(sort: { order: DESC, fields: date }, limit: 3) {
            nodes {
                ...Matchs
            }
        }
        latestPosts: allArticle(
            limit: 4
            sort: { fields: postedAt___date, order: DESC }
        ) {
            nodes {
                ...Articles
                image {
                    alt
                    src {
                        childImageSharp {
                            gatsbyImageData(
                                height: 200
                                width: 200
                                quality: 100
                            )
                        }
                    }
                }
            }
        }
    }
`;

export default IndexPage;
