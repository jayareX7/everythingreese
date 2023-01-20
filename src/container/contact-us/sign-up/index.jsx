import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../components/shared/button";
import SectionTitle from "../../../components/title";

const SignUpArea = ({ data }) => {
    return (
        <section className="sign-up-section pt-16 md:pt-24">
            <div className="container">
                <h2 className="center primary-orange">Welcome</h2>
                <br />
                <p className="primary-brown">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Metus aliquam eleifend mi in nulla posuere.
                </p>
                <br />
                <p className="primary-brown">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. A arcu cursus vitae congue mauris rhoncus. Est
                    ultricies integer quis auctor elit sed vulputate mi.
                </p>
                <div className="grid gap-x-8 grid-cols-2">
                    <div className="single-fild">
                        <input
                            className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                            type="text"
                            placeholder="Name"
                        />
                    </div>
                    <div className="single-fild">
                        <input
                            className="px-6 h-14 mb-6 border-secondary-90 bg-secondary-100 hover:border-primary transition-all border-2 border-solid block rounded-md w-full focus:outline-none"
                            type="email"
                            placeholder="E-mail"
                        />
                    </div>
                </div>
                {data?.buttons &&
                    data.buttons.map(({ id, content, ...props }) => (
                        <div
                            className="section-title-warp text-center mt-10"
                            key={id}
                        >
                            <Button {...props} className="text-white mb-10">
                                {content}
                                <StaticImage
                                    className="align-middle ml-3 transition-all group-hover:ml-5"
                                    src="../../../data/images/icons/arrrow-icon.webp"
                                    alt=""
                                />
                            </Button>
                        </div>
                    ))}
            </div>
        </section>
    );
};
SignUpArea.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
        buttons: PropTypes.arrayOf(
            PropTypes.shape({
                content: PropTypes.string,
            })
        ),
    }),
};
export default SignUpArea;
