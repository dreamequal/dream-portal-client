import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Types = {
    ERROR: "error",
    WARNING: "warning",
    SUCCESS: "success",
};

const Alert = ({
    text,
    type,
}) => {
    const classnames = classNames("alert", {
        "alert-danger": type === Types.ERROR,
        "alert-warning": type === Types.WARNING,
        "alert-success": type === Types.SUCCESS,
    });

    return (
        <div className={classnames} role="alert">
            {text}
        </div>
    );
};

Alert.propTypes = {
    text: PropTypes.node,
    type: PropTypes.oneOf(Object.values(Types)),
};

export default Alert;