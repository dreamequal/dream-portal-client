import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

/**
 * Button sizes
 */
export const Sizes = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Button types
 */
export const Types = {
    PRIMARY: "primary",
    LINK: "link",
    DANGER: "danger",
};

const Button = ({
    label,
    onClick,
    size,
    type,
    disabled,
}) => {
    const classNames = classnames("btn", {
        // Sizes
        "btn-sm": size === Sizes.SM,
        "btn-md": size === Sizes.MD,
        "btn-lg": size === Sizes.LG,
        // Types
        "btn-primary": type === Types.PRIMARY,
        "btn-link": type === Types.LINK,
        "btn-danger": type === Types.DANGER,
    });

    return (
        <button
            className={classNames}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

Button.propTypes = {
    label: PropTypes.node,
    onClick: PropTypes.func,
    size: PropTypes.oneOf(Object.values(Sizes)),
    type: PropTypes.oneOf(Object.values(Types)),
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    size: Sizes.MD,
    type: Types.PRIMARY,
};

export default Button;