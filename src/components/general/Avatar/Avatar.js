import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export const Sizes = {
    SM: "avatar-sm",
    MD: "avatar-md",
    LG: "avatar-lg",
};

const Avatar = ({
    image,
    size,
    active,
    onClick
}) => {
    const classNames = classnames("avatar", "rounded-circle", {
        "avatar-sm": size === Sizes.SM,
        "avatar-md": size === Sizes.MD,
        "avatar-lg": size === Sizes.LG,
    });

    return (
        <div className="avatar-parent-child">
            <span onClick={onClick} className={classNames}>
                <img alt="Avatar" className="h-100" src={image}/>
            </span>
            { active && <span className="avatar-child avatar-badge bg-info"></span> }
        </div>
    );
};

Avatar.propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.oneOf(Object.values(Sizes)),
    active: PropTypes.bool,
    onClick: PropTypes.func,
};

export default Avatar;