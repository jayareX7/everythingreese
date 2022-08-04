import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import { graphql } from "gatsby";
import { normalizedData } from "@utils/functions";
import PageBreadcrumb from "../components/pagebreadcrumb";
import ContactUsInfoArea from "../container/contact-us/contact-info-card";
import ContactFormArea from "../container/contact-us/contact-form";
import FAQPage from "./faq";
import FAQSection from "../container/faq/faq-section";

const ContactUsPage = ({ data, location, pageContext }) => {
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const faqs = normalizedData(data?.faqs.content || []);
    const contact = normalizedData(data?.contact.content || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }}
        >
            <SEO title="Contact Us Page" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title="Contact Us"
            />

            <ContactFormArea data={contact["contact-us-form-section"]} />
        </Layout>
    );
};

ContactUsPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};

export const query = graphql`
    query contactUsPageQuery {
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
        contact: page(
            title: { eq: "contactUsPage" }
            pageType: { eq: innerpage }
        ) {
            content {
                ...PageContentAll
            }
        }
        faqs: page(title: { eq: "FAQPage" }, pageType: { eq: innerpage }) {
            content {
                ...PageContentAll
            }
        }
    }
`;

export default ContactUsPage;
