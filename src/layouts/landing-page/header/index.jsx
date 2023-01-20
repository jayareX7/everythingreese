import React, { Fragment } from "react";
import PropTypes from "prop-types";
import SocialInfoWidget from "../../../components/widget/social-info-widget";

const Header2 = ({ data }) => {
    return (
        <Fragment>
            <div className="header-top">
                <div className="left bold text-primary-white">
                    <h4 style={{ margin: "0.4rem 0px 0px 1rem;" }}>Reese C</h4>
                </div>

                <div className="right footer_widget_list text-white sm:col-span-6 lg:col-span-4 lg:mr-12">
                    <SocialInfoWidget infoData={data?.footer?.[0]} />
                </div>
            </div>
        </Fragment>
    );
};

Header2.propTypes = {
    data: PropTypes.shape({
        footer: PropTypes.arrayOf(
            PropTypes.shape({
                link: PropTypes.string,
                title: PropTypes.string,
            })
        ),
    }),
};
export default Header2;
