import React from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { normalizedData } from "@utils/functions";
import TestimonialsDetailsText from "../../container/testimonials/testimonials-list/players-details";
import Button from "../../components/shared/button";

const TestimonialsDetails = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Testimonials Details" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Testimonials Details"
            />
            <div className="players-post-content-wrapper pt-10">
                <div className="container">
                    <div className="grid grid-cols-1 md:grid-cols-9 gap-8 lg:gap-14">
                        <div className="players-card col-span-1 md:col-span-4 lg:col-span-3 mx-auto md:max-w-none max-w-xs">
                            <div className="inline-block mb-4 image border-4 border-secondary-90 bg-secondary border-opacity-100 rounded-4xl">
                                <GatsbyImage
                                    className="rounded-4xl"
                                    image={getImage(
                                        data?.testimonials?.image?.src
                                    )}
                                    alt={data?.testimonials?.image?.alt}
                                />
                            </div>
                            <div className="players-card-info py-5 xl:py-7 text-center transition-all mt-8 w-full z-10">
                                <h3 className="uppercase font-bold mb-3">
                                    {data?.testimonials?.name}
                                </h3>
                            </div>

                            <div className="social-link text-center mt-8 space-x-3">
                                {data?.testimonials?.socials &&
                                    data?.testimonials?.socials?.map((item) => (
                                        <li
                                            key={`players-social-${item.id}`}
                                            className="text-center inline-block"
                                        >
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-12 h-12 flex items-center justify-center border-2 border-secondary-90 bg-secondary border-opacity-100 rounded-full hover:bg-primary hover:border-primary "
                                            >
                                                <i className={item.icon}></i>
                                            </a>
                                        </li>
                                    ))}
                            </div>
                        </div>

                        <div className="side__right col-span-1  md:col-span-5 lg:col-span-6">
                            <div className="content">
                                <h3 className="font-bold mb-5 text-primary uppercase pl-24 relative after:absolute content-after after:bg-primary after:w-16  after:h-1 after:z-0  after:top-1/2  after:left-0  after:transform  after:-translate-y-2/4  after:transition  after:opacity-100">
                                    PLAYER PROFILE
                                </h3>
                                <h2 className="title text-white font-bold mb-6">
                                    {data?.testimonials?.title}
                                </h2>
                                {data?.testimonials?.items &&
                                    data?.testimonials?.items?.map((item) => (
                                        <TestimonialsDetailsText
                                            key={`testimonials-${item.id}`}
                                            description={item.description}
                                        />
                                    ))}

                                <div className="mt-10">
                                    <Button path="/contact-us" size="lg">
                                        Contact Now
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

TestimonialsDetails.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        testimonials: PropTypes.shape({
            images: PropTypes.arrayOf(
                PropTypes.shape({
                    src: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.shape({}),
                    ]).isRequired,
                    alt: PropTypes.string,
                })
            ),
            image: PropTypes.object,
            id: PropTypes.string,
            title: PropTypes.string,
            name: PropTypes.string,
            needLavel: PropTypes.string,
            socials: PropTypes.array,
            items: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number,
                    ]),
                })
            ),
        }),
    }),
};

export const postQuery = graphql`
    query testimonialsDetailsBySlug($slug: String!) {
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
        testimonials(slug: { eq: $slug }) {
            name
            slug
            title
            date
            socials {
                id
                icon
                link
                title
            }
            items {
                id
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
`;
export default TestimonialsDetails;
