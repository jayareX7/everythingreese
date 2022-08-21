import React, { useState } from "react";
import PropTypes from "prop-types";
import Layout from "@layout";
import SEO from "@components/seo";
import PageBreadcrumb from "@components/pagebreadcrumb";
import Swiper, { SwiperSlide } from "@components/shared/swiper";
import { graphql } from "gatsby";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { normalizedData } from "@utils/functions";
import ContentText from "../../components/content-text";
import { PlusIcon, MinusIcon } from "@heroicons/react/solid";
import PopularProductsArea from "../../container/home/popular-products";

const ProductsDetails = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.products.content || []);
    const [quantity, setQuantity] = useState(1);

    // Base Url
    const baseUrl = "https://bonx.com";

    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Products Details" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Products Details"
            />
            <div className="games-post-content-wrapper">
                <div className="container">
                    <div className="content-box">
                        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
                            <div className="game-all-images my-10">
                                <Swiper
                                    layout={{
                                        nav: "games-navigation",
                                        dots: "games-dots-style",
                                    }}
                                    navigation={{
                                        nextEl: ".games-slider-button-next",
                                        prevEl: ".games-slider-button-prev",
                                    }}
                                    slidesPerView={1}
                                    spaceBetween={20}
                                >
                                    {data?.products?.images &&
                                        data?.products?.images?.map(
                                            (gameThum) => (
                                                <SwiperSlide key={gameThum.alt}>
                                                    <GatsbyImage
                                                        image={getImage(
                                                            gameThum.src
                                                        )}
                                                        alt={gameThum.alt}
                                                    />
                                                </SwiperSlide>
                                            )
                                        )}
                                </Swiper>
                                <div className="z-10 transform pt-12 flex space-x-4">
                                    <div
                                        className="games-slider-button-next swipper-arrow text-white transform w-68 h-55
                                             flex items-center justify-center bg-arrow-shape hover:bg-arrow-hover-shape transition-all bg-cover"
                                    >
                                        <StaticImage
                                            src="../../data/images/icons/navigation-arrow2.webp"
                                            alt=""
                                        />
                                    </div>
                                    <div
                                        className="games-slider-button-prev swipper-arrow text-white 
                                            transform w-68 h-55 flex items-center
                                             justify-center bg-arrow-shape hover:bg-arrow-hover-shape transition-all bg-cover"
                                    >
                                        <StaticImage
                                            src="../../data/images/icons/navigation-arrow1.webp"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="">
                                <h2 className="font-bold mb-10">
                                    {data.products.title}{" "}
                                </h2>

                                <p className="text-black">
                                    {" "}
                                    <i>"{data?.products?.quoteText}"</i>{" "}
                                </p>

                                <div className="content-details text-black">
                                    <ContentText
                                        data={content["game-details-per-one"]}
                                    />
                                </div>
                                <div className="flex items-center md:items-stretch ml-8 font-roboto bg-light-gray ">
                                    <button
                                        type="button"
                                        className="flex items-center justify-center border border-primary py-2 md:py-1 px-2"
                                        onClick={() =>
                                            setQuantity(
                                                quantity > 1 ? quantity - 1 : 1
                                            )
                                        }
                                    >
                                        <MinusIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </button>
                                    <button
                                        type="button"
                                        className="py-1 px-4 text-lg font-light"
                                    >
                                        {quantity}
                                    </button>
                                    <button
                                        type="button"
                                        className="flex items-center justify-center border border-primary py-2 md:py-1 px-2"
                                        onClick={() =>
                                            setQuantity(quantity + 1)
                                        }
                                    >
                                        <PlusIcon
                                            className="h-5 w-5"
                                            aria-hidden="true"
                                        />
                                    </button>
                                </div>

                                <button
                                    className="snipcart-add-item my-10"
                                    data-item-id={data?.products?.id}
                                    data-item-price={data?.products?.price}
                                    data-item-description={
                                        data?.products?.quoteText
                                    }
                                    data-item-quantity={quantity}
                                    data-item-image={
                                        data?.products?.images &&
                                        data?.products?.images?.map(
                                            (gameThum) => (
                                                <SwiperSlide key={gameThum.alt}>
                                                    <GatsbyImage
                                                        image={getImage(
                                                            gameThum.src
                                                        )}
                                                        alt={gameThum.alt}
                                                    />
                                                </SwiperSlide>
                                            )
                                        )
                                    }
                                    data-item-name={data.products.title}
                                    data-item-custom1-name={
                                        data?.products?.customOptionName
                                    }
                                    data-item-custom1-options={
                                        data?.products?.customOption
                                    }
                                >
                                    Add to cart
                                </button>
                            </div>
                        </div>

                        <div className="mt-15 additional-information-area bg-secondary-60 px-9 py-9 rounded-2xl mb-9">
                            <h3 className="font-bold mb-6">Product Specs:</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-5">
                                <div className="additional_information_text">
                                    <h4 className="font-bold mb-5">Updated:</h4>
                                    <span>{data?.products?.updated}</span>
                                </div>
                                <div className="additional_information_text">
                                    <h4 className="font-bold mb-5">SIZE:</h4>
                                    <span>{data?.products?.size}</span>
                                </div>
                                <div className="additional_information_text">
                                    <h4 className="font-bold mb-5">
                                        INSTALLS:
                                    </h4>
                                    <span>{data?.products?.installs}</span>
                                </div>
                                <div className="additional_information_text">
                                    <h4 className="font-bold mb-5">
                                        CURRENT VERSION:
                                    </h4>
                                    <span>
                                        {data?.products?.currentVersion}
                                    </span>
                                </div>
                                <div className="additional_information_text">
                                    <h4 className="font-bold mb-5">
                                        IN-APP PRODUCTS:
                                    </h4>
                                    <span>{data?.products?.inAppProducts}</span>
                                </div>
                            </div>
                        </div>

                        <div className="my-10">
                            <h2 className="font-bold section-title">
                                Related Products:
                            </h2>
                            <PopularProductsArea
                                data={{
                                    ...content["popular-products-section"],
                                    items: data.allProducts.nodes,
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

ProductsDetails.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        products: PropTypes.shape({
            quoteText: PropTypes.string,
            images: PropTypes.arrayOf(
                PropTypes.shape({
                    src: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.shape({}),
                    ]).isRequired,
                    alt: PropTypes.string,
                })
            ),
            updated: PropTypes.string,
            size: PropTypes.string,
            updated: PropTypes.string,
            installs: PropTypes.string,
            gameThum: PropTypes.shape({
                src: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({}),
                ]).isRequired,
                alt: PropTypes.string,
            }),
            currentVersion: PropTypes.string,
            inAppProducts: PropTypes.string,
            id: PropTypes.string,
            price: PropTypes.string,
            customOptionName: PropTypes.string,
            customOption: PropTypes.string,
            title: PropTypes.string,
            date: PropTypes.string,
            author: PropTypes.string,
            content: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number,
                    ]),
                })
            ),
        }),
        allProducts: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const postQuery = graphql`
    query productsDetailsBySlug($slug: String!) {
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
        products(slug: { eq: $slug }) {
            ...Products
        }
        allProducts(sort: { fields: updated, order: DESC }, limit: 4) {
            nodes {
                ...Products
            }
        }
    }
`;
export default ProductsDetails;
