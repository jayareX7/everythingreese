import React from "react";
import PropTypes from "prop-types";

const TestimonialsDetailsText = ({ description }) => {
    return <p className="leading-8">{description}</p>;
};
TestimonialsDetailsText.propTypes = {
    description: PropTypes.string,
};
export default TestimonialsDetailsText;
