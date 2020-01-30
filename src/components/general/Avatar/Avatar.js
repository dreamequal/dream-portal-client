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
    initials,
    size,
    active,
    onClick
}) => {
    const imageClassNames = classnames("avatar", "rounded-circle", {
        "avatar-sm": size === Sizes.SM,
        "avatar-md": size === Sizes.MD,
        "avatar-lg": size === Sizes.LG,
    });

    const initialClassNames = classnames("avatar", "rounded-circle", "bg-info", "text-white", {
        "avatar-sm": size === Sizes.SM,
        "avatar-md": size === Sizes.MD,
        "avatar-lg": size === Sizes.LG,
    });

    return (
        <div className="avatar-parent-child">
            <span onClick={onClick} className={imageClassNames}>
                {image ? (
                    <img alt="Avatar" className="h-100" src={image}/>
                ) : (
                    <span className={initialClassNames}>{initials}</span>
                )}
            </span>
            { active && <span className="avatar-child avatar-badge bg-info"></span> }
        </div>
    );
};

Avatar.propTypes = {
    image: PropTypes.string,
    initials: PropTypes.string,
    size: PropTypes.oneOf(Object.values(Sizes)),
    active: PropTypes.bool,
    onClick: PropTypes.func,
};

Avatar.defaultProps = {
    size: Sizes.MD,
};

export default Avatar;