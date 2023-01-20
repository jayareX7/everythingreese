import React from "react";
import { graphql, Link } from "gatsby";
import LandingHero from "../components/landing-hero";
import BigLogo from "../components/logo/big-logo";
import SignUpArea from "../container/contact-us/sign-up";
import Footer2 from "../layouts/landing-page/footer";
import Header2 from "../layouts/landing-page/header";
import { normalizedData } from "@utils/functions";

const LandingPage = ({ data }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page?.content || []);
    return (
        <>
            <Header2
                data={{
                    ...globalContent["footer"],
                }}
            />
            <nav className="bg-transparent flex justify-between items-center">
                <div className="absolute container">
                    {" "}
                    <SignUpArea />{" "}
                </div>
            </nav>
            <LandingHero />
            <Footer2 />
        </>
    );
};

export const query = graphql`
    query LandingPageQuery {
        allGeneral {
            nodes {
                section
                id
                menu {
                    ...Menu
                }
                footer {
                    ...Footer
                }
            }
        }
    }
`;

export default LandingPage;
