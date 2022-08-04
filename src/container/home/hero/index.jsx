import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../components/shared/button";
import HeroImage from "../../../data/images/hero/hero-bg1.webp";

const HeroArea = ({ data }) => {
    return (
        <section
            className="relative h-540 md:h-650 lg:h-780 xl:h-940 bg-no-repeat bg-center bg-cover flex items-center"
            style={{
                backgroundImage: `url(${HeroImage})`,
            }}
        >
            <div className="container px-4 z-10">
                <div className="text-white">
                    {data?.headings?.[0] && (
                        <h1 className=" mx-auto text-center text-shadow max-w-3xl">
                            {data.headings[0].content}
                        </h1>
                    )}
                    {data?.texts?.[0] && (
                        <p className="text-base mx-auto text-center lg:text-md font-bold mb-6 sm:mb-10 ">
                            {data.texts[0].content}
                        </p>
                    )}
                    <div className="text-align-center">
                        {data?.buttons &&
                            data.buttons.map(({ id, content, ...props }) => (
                                <Button
                                    key={id}
                                    {...props}
                                    className="text-white mx-auto text-center"
                                >
                                    {content}
                                    <StaticImage
                                        className="align-middle mx-auto text-center ml-3 transition-all group-hover:ml-5"
                                        src="../../../data/images/icons/arrrow-icon.webp"
                                        alt=""
                                    />
                                </Button>
                            ))}
                    </div>
                </div>
            </div>
            <div className="absolute right-0.5 bottom-0">
                <StaticImage
                    className="w-96 md:w-650 xl:w-auto"
                    src="../../../data/images/hero/hero-position-img.webp"
                    alt=""
                />
            </div>
        </section>
    );
};
HeroArea.propTypes = {
    data: PropTypes.shape({
        headings: PropTypes.arrayOf(
            PropTypes.shape({
                level: PropTypes.string,
                content: PropTypes.string,
            })
        ),
        texts: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
        buttons: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
        images: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.shape({}),
                ]).isRequired,
                alt: PropTypes.string,
            })
        ),
    }),
};
export default HeroArea;
