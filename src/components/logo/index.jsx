import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const Logo = () => {
    return (
        <Link to="/">
            <StaticImage
                src="../../data/images/logo.webp"
                alt="Reese"
                width={145}
                height={145}
            />
        </Link>
    );
};
export default Logo;
