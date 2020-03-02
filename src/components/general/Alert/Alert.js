import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

export const Types = {
    ERROR: "error",
    WARNING: "warning",
    SUCCESS: "success",
};

const Alert = ({
    accessories,
    children,
    text,
    type,
}) => {
    const classnames = classNames("alert", "alert-group", {
        "alert-danger": type === Types.ERROR,
        "alert-warning": type === Types.WARNING,
        "alert-success": type === Types.SUCCESS,
    });

    return (
        <div className={classnames} role="alert">
            <div class="alert-content">
                {text}
                {children}
            </div>

            { accessories ? (
                <div class="alert-action">
                    {accessories}
                </div>
            ) : null }
        </div>
    );
};

Alert.propTypes = {
    text: PropTypes.node.isRequired,
    type: PropTypes.oneOf(Object.values(Types)),
};

export default Alert;