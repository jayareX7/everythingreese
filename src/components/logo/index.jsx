import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Logo = () => {
    return (
        <Link to="/">
            <StaticImage src="../../data/images/logo.webp" alt="Reese" />
        </Link>
    );
};
export default Logo;
