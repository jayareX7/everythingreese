import React, { Fragment } from "react";
import PropTypes from "prop-types";

const Footer2 = ({ data }) => {
    return (
        <Fragment>
            <footer className="footer-bg">
                <div className="footer-bottom bg-primary-brown">
                    <div className="container">
                        <div className=" flex text-primary-white flex-col md:flex-row md:justify-between items-center py-6">
                            <div className="mx-auto">
                                &copy; {new Date().getFullYear()} THEME MADE
                                WITH <i className="icofont-heart"></i> BY
                                <a
                                    className="hover:text-primary"
                                    href="https://avxstudio.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {" "}
                                    AVX STUDIO
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Fragment>
    );
};
Footer2.propTypes = {
    data: PropTypes.shape({
        footer: PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.string,
                title: PropTypes.string,
            })
        ),
    }),
};
export default Footer2;
