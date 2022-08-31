import React from "react";
import PropTypes from "prop-types";

const HeaderArea = ({ data }) => {
    return (
        <>
            <div className="header-info">
                <p className="pt-6 pb-6 text-md cursor-pointer font-bold z-10 before:bg-nav-shape before:empty-content before:w-23.5 before:h-11 before:z-n1 before:top-1/2 before:left-1/2 before:transform before:-translate-x-2/4 before:-translate-y-2/4 before:transition-all before:opacity-0 hover:before:opacity-100">
                    {data?.headerInfo}
                </p>
            </div>
        </>
    );
};

HeaderArea.propTypes = {
    data: PropTypes.shape({
        headerInfo: PropTypes.string,
    }),
};
export default HeaderArea;
