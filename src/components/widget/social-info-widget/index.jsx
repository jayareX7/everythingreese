import React, { Fragment } from "react";
import PropTypes from "prop-types";

const SocialInfoWidget = ({ infoData }) => {
    return (
        <Fragment>
            <div className=" flex">
                {infoData?.socials?.map((item) => (
                    <a
                        key={item.id}
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`h-10 w-10 leading-10 text-center mr-3 hover:text-primary last:mr-0`}
                    >
                        <i className={item.icon}></i>
                    </a>
                ))}
            </div>
        </Fragment>
    );
};
SocialInfoWidget.propTypes = {
    infoData: PropTypes.shape({
        socials: PropTypes.arrayOf(PropTypes.shape({})),
        title: PropTypes.string,
        text: PropTypes.string,
    }),
};
export default SocialInfoWidget;
