import React from "react";
import PropTypes from "prop-types";
import ProductCard from "../../../components/products-card";
import SectionTitle from "../../../components/title";
import Button from "../../../components/shared/button";
import { Link } from "gatsby";

const PopularProductsArea = ({ data }) => {
    return (
        <>
            <section className="popular-games-section pt-8 md:pt-16 py-8 md:py-20">
                <div className="container">
                    {data?.section_title && (
                        <div className="section-title mb-15">
                            <SectionTitle
                                heading={data?.section_title.heading}
                                {...data.section_title}
                            />
                        </div>
                    )}

                    <div className="flex flex-wrap -mt-8">
                        {data?.items &&
                            data?.items.map((item) => (
                                <div
                                    className="w-full md:w-1/2 lg:w-1/4 px-4"
                                    key={item.id}
                                >
                                    <ProductCard
                                        date={item?.date}
                                        slug={item?.slug}
                                        image={item.gameThum.src}
                                        alt={item?.gameThum?.alt}
                                        buttons={item?.buttons}
                                    />
                                </div>
                            ))}
                    </div>
                    <div align="center" className="my-6 md:my-12 mx-auto">
                        <Link
                            to={`/products`}
                            className="text-white button-link font-code inline-block text-center font-bold group hover:opacity-80 text-22base h-73 w-230 leading-73 rounded-22 bg-primary-transparent"
                        >
                            View All
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

PopularProductsArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};
export default PopularProductsArea;
