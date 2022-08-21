import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../components/title";
import WelcomeFeatures from "../../../components/welcome-features";
import { StaticImage } from "gatsby-plugin-image";

const WelcomeFeaturesArea = ({ data }) => {
    return (
        <section className="pt-16 md:pt-24">
            <div className="container p-10">
                {data?.section_title && (
                    <SectionTitle
                        heading={data?.section_title.heading}
                        {...data.section_title}
                    />
                )}

                <div className="flex flex-wrap mx-3 text-center">
                    <div className="grid gap-y-6 gap-x-3 md:gap-x-4 xl:gap-9 sm:grid-cols-2 lg:grid-cols-2 my-15">
                        <StaticImage
                            className="align-middle ml-3 transition-all group-hover:ml-5"
                            src="../../../data/images/others/about-thumb.webp"
                            alt=""
                        />
                        <p className="text-white">
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum. <br />
                            <StaticImage
                                className="align-middle mt-10 ml-3 transition-all group-hover:ml-5"
                                src="../../../data/images/icons/infinity-symbol.webp"
                                alt=""
                            />
                            <h1 className="mt-10 text-white">
                                Live For The Moment!
                            </h1>
                        </p>
                    </div>
                </div>

                <div className="flex flex-wrap -mx-3 text-center">
                    {data?.items &&
                        data?.items.map((item) => (
                            <div
                                key={item.id}
                                className="w-full md:w-1/2 lg:w-1/3 px-4"
                            >
                                <WelcomeFeatures
                                    title={item.headings[0].content}
                                    level={item.headings[0].level}
                                    iconImage={item.images[0].src}
                                    bgShapImage={item.images[1].src}
                                    description={item.description}
                                />
                            </div>
                        ))}
                </div>
            </div>
        </section>
    );
};
WelcomeFeaturesArea.propTypes = {
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
export default WelcomeFeaturesArea;
