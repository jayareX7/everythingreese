import React from "react";
import PropTypes from "prop-types";
import SectionTitle from "../../../components/title";
import { StaticImage } from "gatsby-plugin-image";
import WelcomeFeatures from "../../../components/welcome-features";
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
                            src="../../data/images/others/about-thumb.webp"
                            alt=""
                        />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum. <WelcomeFeatures />
                    </div>
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
