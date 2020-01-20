import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

export const Sizes = {
    LG: "avatar-lg",
};

const Avatar = ({
    image,
    size,
    active,
    onClick
}) => {
    const classNames = classnames("avatar", "rounded-circle", {
        "avatar-lg": size === Sizes.LG,
    });

    return (
        <div class="avatar-parent-child">
            <a onClick={onClick} className={classNames}>
                <img alt="Avatar" src={image}/>
            </a>
            { active && <span class="avatar-child avatar-badge bg-info"></span> }
        </div>
    );
};

Avatar.propTypes = {
    image: PropTypes.string.isRequired,
    size: PropTypes.oneOf(Object.keys(Sizes)),
    active: PropTypes.bool,
    onClick: PropTypes.func,
};

Avatar.defaultProps = {
    size: Sizes.LG,
};

export default Avatar;