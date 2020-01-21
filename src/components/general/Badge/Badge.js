import React from "react";
import PropTypes from "prop-types";

const Badge = ({
    text
}) => (
    <span className="badge badge-info badge-pill mr-2">{text}</span>
);

PropTypes.propTypes = {
    text: PropTypes.string.isRequired,
};

export default Badge;