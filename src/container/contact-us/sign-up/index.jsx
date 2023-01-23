import React from "react";
import PropTypes from "prop-types";
import { StaticImage } from "gatsby-plugin-image";
import Button from "../../../components/shared/button";
import SectionTitle from "../../../components/title";
import SubscribeForm from "./mailchimp";

const SignUpArea = ({ data }) => {
    return (
        <section className="sign-up-section pt-16 md:pt-24">
            <div className="container">
                <h1 className="center primary-orange">Welcome</h1>
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
                <SubscribeForm />
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
