import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";

const LandingHero = () => {
    return (
        <div className="relative zIndex">
            <Link to="/">
                <StaticImage
                    src="../../data/images/landing-hero.webp"
                    alt="Reese"
                    objectFit="cover"
                />
            </Link>
        </div>
    );
};
export default LandingHero;
