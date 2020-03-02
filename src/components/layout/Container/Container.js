import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const Container = ({
    children,
    className
}) => (
    <div className={classnames("container", "mt-5", className)}>
        {children}
    </div>
);

Container.propTypes = {
    classNames: PropTypes.string,
};

export default Container;