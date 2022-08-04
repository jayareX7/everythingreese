import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const BigLogo = () => {
    return (
        <Link to="/">
            <StaticImage src="../../data/images/big-logo.webp" alt="Reese" />
        </Link>
    );
};
export default BigLogo;
