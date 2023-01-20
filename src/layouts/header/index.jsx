import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import Logo from "../../components/logo";
import MainMenu from "../../components/menu/main-menu";
import MobileNavMenu from "../../components/menu/mobile-menu";
import Button from "../../components/shared/button";

const Header = ({ data }) => {
    // OfCanvas Menu
    const [ofcanvasOpen, setOfcanvasOpen] = useState(false);

    // OfCanvas Menu Open & Remove
    const ofcanvasHandaler = () => {
        setOfcanvasOpen((prev) => !prev);
    };
    return (
        <>
            <header className="bg-transparent relative w-full mx-auto z-40">
                <div
                    className={`header-top "fixed top-0 bg-primary-transparent opacity-90 w-full"
                        : ""
                }`}
                >
                    <div className="container">
                        <nav className="bg-transparent flex justify-between items-center py-3">
                            <Logo />
                            <MainMenu allmenuData={data?.menu} />
                            <div className="header-right-action flex items-center">
                                <button
                                    onClick={ofcanvasHandaler}
                                    onKeyDown={ofcanvasHandaler}
                                    className="flex flex-col space-y-1.5 ml-8 lg:hidden"
                                >
                                    <span className="line h-0.5 w-6 inline-block bg-white"></span>
                                    <span className="line h-0.5 w-6 inline-block bg-white"></span>
                                    <span className="line h-0.5 w-6 inline-block bg-white"></span>
                                </button>
                                <MobileNavMenu
                                    MobilemenuData={data.menu}
                                    ofcanvasOpen={ofcanvasOpen}
                                    ofcanvasHandaler={ofcanvasHandaler}
                                />
                            </div>
                        </nav>

                        <div className="text-3xl font-semibold leading-none"></div>

                        <div className="profile-icons mx-auto hidden lg:flex lg:items-center lg:w-auto lg:space-x-12">
                            <button class="snipcart-customer-signin">
                                <i className="icofont-users-alt-4"></i>
                            </button>
                            <button class="snipcart-customer-signin">
                                <i className="icofont-bag"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

Header.propTypes = {
    data: PropTypes.shape({
        menu: PropTypes.arrayOf(PropTypes.shape({})),
        headerInfo: PropTypes.string,
    }),
};

export default Header;
